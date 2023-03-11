import { Router } from "express";
import { getProvincias } from "../controllers/provincia";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", checkSession, getProvincias);

export { router };
