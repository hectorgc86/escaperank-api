import { Router } from "express";
import {
  getCategorias,
  getCategoria,
  postCategoria,
  putCategoria,
  deleteCategoria,
} from "../controllers/categoria";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", checkSession, getCategorias);
router.get("/:id", checkSession, getCategoria);
router.put("/:id", checkSession, putCategoria);
router.post("/", checkSession, postCategoria);
router.delete("/:id", checkSession, deleteCategoria);

export { router };
