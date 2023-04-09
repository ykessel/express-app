import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
import { createUserRoute } from "./routes/user.route.js";

app.use(cors());
app.use(json());
app.use("/users", createUserRoute);

app.listen(port, () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() =>
      console.log("Connected to the database: ", process.env.MONGO_URI)
    )
    .catch((err) => console.error("Mongoose Error: ", err));

  console.log(`Server is running on port: ${port}`);
});
