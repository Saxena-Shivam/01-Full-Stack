import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
//Rourtes import
import userRouter from "./routes/users.routes.js";
//ROutes declaration
app.use("/api/v1/users", userRouter);
// http://localhost:8000/api/v1/users/register
export { app };
