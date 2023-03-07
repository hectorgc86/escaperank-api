import { Router } from "express";
import {
  getDificultades,
  getDificultad,
  postDificultad,
  putDificultad,
  deleteDificultad,
} from "../controllers/dificultad";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", checkSession, getDificultades);
router.get("/:id", checkSession, getDificultad);
router.put("/:id", checkSession, putDificultad);
router.post("/", checkSession, postDificultad);
router.delete("/:id", checkSession, deleteDificultad);

export { router };
