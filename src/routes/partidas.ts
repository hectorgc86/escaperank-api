import { Router } from "express";
import {
  getPartidas,
  getPartida,
  postPartida,
  putPartida,
  deletePartida,
} from "../controllers/partida";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", logMiddleware, getPartidas);
router.get("/:id", getPartida);
router.put("/:id", putPartida);
router.post("/", postPartida);
router.delete("/:id", deletePartida);

export { router };
