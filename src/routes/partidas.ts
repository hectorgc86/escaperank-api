import { Router } from "express";
import {
  getPartidas,
  getPartida,
  postPartida,
  putPartida,
  deletePartida,
  getPartidasEquipo,
} from "../controllers/partida";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", checkSession, getPartidas);
router.get("/equipo/:idEquipo", checkSession, getPartidasEquipo);
router.get("/:id", checkSession, getPartida);
router.put("/:id", checkSession, putPartida);
router.post("/", checkSession, postPartida);
router.delete("/:id", checkSession, deletePartida);

export { router };
