import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";

const PORT = process.env.PORT || 3001;
const app = express();

//anyadir rutas de origen en cors
app.use(cors());
app.use(router);
app.listen(PORT, () => console.log(`Servicio iniciado en puerto ${PORT}`));
