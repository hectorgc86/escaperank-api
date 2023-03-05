import { Router } from "express";
import {
  getProvincias,
  getProvincia,
  postProvincia,
  putProvincia,
  deleteProvincia,
} from "../controllers/provincia";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", logMiddleware, getProvincias);
router.get("/:id", getProvincia);
router.put("/:id", putProvincia);
router.post("/", postProvincia);
router.delete("/:id", deleteProvincia);

export { router };
