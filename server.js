import express, { json } from "express";
import cors from "cors";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
const app = express();
const port = process.env.PORT || 5000;
// import { connectToServer } from "./db/connection.js";
import { createUserRoute } from "./routes/user.route.js";

app.use(cors());
app.use(json());
app.use('/users', createUserRoute);
 
app.listen(port, () => {
    mongoose.connect(process.env.MONGO_URI_MINE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.error(err))

  console.log(`Server is running on port: ${port}`);
});