
// backend/routes/index.ts
import express from "express";
import authRoutes from "./auth";

const router = express.Router();

router.use("/", authRoutes);

export default router;
