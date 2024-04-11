import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";

import authRouter from "./router/auth";
import productRouter from "./router/product";

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(
  "/static",
  express.static(path.join(__dirname, "public")),
  (req, res) => {
    const options = {
      headers: {
        "Content-Disposition": "inline",
      },
    };
    res.set(options);
  }
);

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => console.log("MongoDB is connected!"));

app.get("/", (req, res) => {
  res.send("Hello from Express server!");
});

app.use("/auth", authRouter);
app.use("/product", productRouter);

module.exports = app;
