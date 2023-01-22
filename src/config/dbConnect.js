import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

mongoose
.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.bzqqbqb.mongodb.net/alura-node`);

let db = mongoose.connection

export default db;
