import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit:"16kb"})); //body parser
app.use(express.urlencoded({extended:true,limit:"16kb"})); // url parser
app.use(express.static("public"));


// parse cookies
app.use(cookieParser());


//routes
import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users",userRouter);


export { app }