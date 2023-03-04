import { Router } from "express";
import {
  getCiudades,
  getCiudad,
  postCiudad,
  putCiudad,
  deleteCiudad,
} from "../controllers/ciudad";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", logMiddleware, getCiudades);
router.get("/:id", getCiudad);
router.put("/:id", putCiudad);
router.post("/", postCiudad);
router.delete("/:id", deleteCiudad);

export { router };
