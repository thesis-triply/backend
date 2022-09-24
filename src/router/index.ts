import * as express from "express";
import signInRouter from "./Router/signInRouter";
export default (app: express.Express) => {
    app.use("/login", signInRouter);

}