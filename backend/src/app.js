import express from "express";
import cors from "cors";
import enqueteRoutes from "./routes/enquete.route.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", enqueteRoutes);

export default app;
