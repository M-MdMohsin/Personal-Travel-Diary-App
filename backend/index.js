import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.route.js'
import userRoutes from "./routes/user.route.js"
import travelStoryRoutes from "./routes/travelStory.route.js"

import cookieParser from 'cookie-parser'

dotenv.config();

mongoose
    .connect(process.env.MONGO_URI)
    .then( () => {
        console.log("Database is Connected")
    })
    .catch((err) => {
        console.log(err)
    })

const app = express();

app.use(cookieParser())


app.use(express.json())

app.use(express.urlencoded({ extended: true }));


app.listen(3000, () => {
    console.log("Server is Running on port 3000!")
})

app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/travel-story", travelStoryRoutes)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500

  const message = err.message || "Internal Server Error"

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})