import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import cors from "cors";

const app = express();

app.use(cors()); //Ejecutar cors antes de obtener las rutas
app.use(express.json());

app.use(indexRoutes);
app.use(taskRoutes);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
