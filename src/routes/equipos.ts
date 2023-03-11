import { Router } from "express";
import {
  getEquipos,
  getEquipo,
  postEquipo,
  putEquipo,
  deleteEquipo,
  getEquiposUsuario,
} from "../controllers/equipo";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", checkSession, getEquipos);
router.get("/usuario/:idUsuario", checkSession, getEquiposUsuario);
router.get("/:id", checkSession, getEquipo);
router.put("/:id", checkSession, putEquipo);
router.post("/", checkSession, postEquipo);
router.delete("/:id", checkSession, deleteEquipo);

export { router };
