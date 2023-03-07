import { Router } from "express";
import {
  getPerfiles,
  getPerfil,
  postPerfil,
  putPerfil,
  deletePerfil,
} from "../controllers/perfil";
import { logMiddleware } from "../middleware/log";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", checkSession, getPerfiles);
router.get("/:id", checkSession, getPerfil);
router.put("/:id", checkSession, putPerfil);
router.post("/", checkSession, postPerfil);
router.delete("/:id", checkSession, deletePerfil);

export { router };
