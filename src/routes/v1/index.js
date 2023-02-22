import express from "express";
const router = express.Router();
import doctorRoute from "./doctorRoute.js";
router.use("/doctors", doctorRoute.router);

export { router };
