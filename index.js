import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import userRoute from "./routes/userRoute.js"

dotenv.config();

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.MONGODB ;

mongoose.connect(DB_URL).then(()=>{
    console.log("Database connected successfully!")
}).catch((err)=>{
    console.log("Database connection failed with error: ",err.message)
})

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`)
})

app.use("/api/user", userRoute)