import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routers from "./router";
import { connection } from "./db/configmongoose";
const app = express();
const server = require("http").createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(cors({ origin: true }));

async function main() {
  connection();

  const PORT = process.env.PORT || 4000;

  server.listen(PORT, () => console.log("server is running at port " + PORT));
  routers(app);
}

main();