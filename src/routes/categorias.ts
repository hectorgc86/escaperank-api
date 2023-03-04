import { Router } from "express";
import {
  getCategorias,
  getCategoria,
  postCategoria,
  putCategoria,
  deleteCategoria,
} from "../controllers/categoria";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", logMiddleware, getCategorias);
router.get("/:id", getCategoria);
router.put("/:id", putCategoria);
router.post("/", postCategoria);
router.delete("/:id", deleteCategoria);

export { router };
