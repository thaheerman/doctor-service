import express from "express";
import cors from "cors";
import { router } from "./routes/v1/index.js";
import { ApiError } from "./utils/ApiError.js";

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

// v1 api routes
app.use("/v1", router);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(404, "Not found"));
});
console.log('running');
export {app};
