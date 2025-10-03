import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'

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


app.use(express.json())

app.use(express.urlencoded({ extended: true }));


app.listen(3000, () => {
    console.log("Server is Running on port 3000!")
})

app.use("/api/auth", authRoutes)