import { Router } from "express";
import {
  getCiudades,
  getCiudad,
  postCiudad,
  putCiudad,
  deleteCiudad,
} from "../controllers/ciudad";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", checkSession, getCiudades);
router.get("/:id", checkSession, getCiudad);
router.put("/:id", checkSession, putCiudad);
router.post("/", checkSession, postCiudad);
router.delete("/:id", checkSession, deleteCiudad);

export { router };
