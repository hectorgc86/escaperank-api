import { Router } from "express";
import {
  getNoticias,
  getNoticia,
  postNoticia,
  putNoticia,
  deleteNoticia,
  getNoticiasUsuario,
} from "../controllers/noticia";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", checkSession, getNoticias);
router.get("/usuario/:idUsuario", checkSession, getNoticiasUsuario);
router.get("/:id", checkSession, getNoticia);
router.put("/:id", checkSession, putNoticia);
router.post("/", checkSession, postNoticia);
router.delete("/:id", checkSession, deleteNoticia);
router.post("/new", checkSession, postNoticia);

export { router };
