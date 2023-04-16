import express from "express";
import cors from "cors";
import PromptsController from "./controllers/prompts/prompts-controller.js";
import mongoose from "mongoose";
mongoose.connect('mongodb+srv://postergpt:postergpt@cluster0.pjcddy2.mongodb.net/?retryWrites=true&w=majority&dbname=postergpt1');
const app = express()
app.use(cors());
app.use(express.json());
PromptsController(app);
app.listen(4000)