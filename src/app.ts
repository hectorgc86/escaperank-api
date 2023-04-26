import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import { dbConnectMySql } from "./config/db";

const PORT = process.env.PORT || 3001;
const BASE_PATH = process.env.BASE_PATH as string;

const app = express();

//anyadir rutas de origen en cors
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(BASE_PATH, router);

dbConnectMySql();

app.listen(PORT, () => console.log(`Servicio iniciado en ${PORT}`));
