import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

// import dotenv from 'dotenv';

// dotenv.config({ path: `${__dirname}/.env` });

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use(taskRoutes);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
