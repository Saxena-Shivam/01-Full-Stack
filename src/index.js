import express from "express";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env",
});
const app = express();
connectDB()
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(process.env.PORT || 8000, () => {
            console.log(
                `Server is running on port ${process.env.PORT || 8000}`
            );
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err);
    });
