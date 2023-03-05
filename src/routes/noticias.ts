import { Router } from "express";
import {
  getNoticias,
  getNoticia,
  postNoticia,
  putNoticia,
  deleteNoticia,
} from "../controllers/noticia";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", logMiddleware, getNoticias);
router.get("/:id", getNoticia);
router.put("/:id", putNoticia);
router.post("/", postNoticia);
router.delete("/:id", deleteNoticia);

export { router };
