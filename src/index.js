// import mongoose from "mongoose";
// import express from "express";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
dotenv.config({
    path: "./.env",
});
connectDB();

// const app = express();
// async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         console.log("Connected to MongoDB");
//         app.on("error", (err) => {
//             console.error("MongoDB connection error:", err);
//             throw err;
//         });
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         throw error;
//     }
// };
