import { Router } from "express";
import {
  deleteAmigo,
  deleteUsuario,
  getAmigosUsuario,
  getUsuario,
  getUsuarios,
  getUsuariosEquipo,
  postAmigo,
  postUsuario,
  putAmigo,
  putUsuario,
} from "../controllers/usuario";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", checkSession, getUsuarios);
router.get("/:id", checkSession, getUsuario);
router.get("/:id/amigos", checkSession, getAmigosUsuario);
router.get("/equipo/:idEquipo", checkSession, getUsuariosEquipo);
router.post("/", checkSession, postUsuario);
router.post("/:id/amigos", checkSession, postAmigo);
router.put("/:id", checkSession, putUsuario);
router.put("/:id/amigos/:idAmigo", checkSession, putAmigo);
router.delete("/:id", checkSession, deleteUsuario);
router.delete("/:id/amigos/:idAmigo", checkSession, deleteAmigo);

export { router };
