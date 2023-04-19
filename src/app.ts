import express from "express";
import "dotenv";
import { router } from "./routes/users-router";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

export { app };
