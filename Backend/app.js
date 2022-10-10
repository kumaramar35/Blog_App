import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";
import Connection from './Db/connection.js'
import dotenv from 'dotenv';
const app = express();
dotenv.config()
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
Connection();
 app.listen(5000,(err)=>{
  console.log("Connected TO Database and Listening TO Localhost 5000")
 })

