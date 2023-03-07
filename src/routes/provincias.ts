import { Router } from "express";
import {
  getProvincias,
  getProvincia,
  postProvincia,
  putProvincia,
  deleteProvincia,
} from "../controllers/provincia";
import { logMiddleware } from "../middleware/log";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", checkSession, getProvincias);
router.get("/:id", checkSession, getProvincia);
router.put("/:id", checkSession, putProvincia);
router.post("/", checkSession, postProvincia);
router.delete("/:id", checkSession, deleteProvincia);

export { router };
