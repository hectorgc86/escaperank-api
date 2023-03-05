import { Router } from "express";
import {
  getPerfiles,
  getPerfil,
  postPerfil,
  putPerfil,
  deletePerfil,
} from "../controllers/perfil";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", logMiddleware, getPerfiles);
router.get("/:id", getPerfil);
router.put("/:id", putPerfil);
router.post("/", postPerfil);
router.delete("/:id", deletePerfil);

export { router };
