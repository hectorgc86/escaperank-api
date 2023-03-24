import { Router } from "express";
import { getSalasPromocionadas } from "../controllers/sala";

const router = Router();

router.get("/promocionadas", getSalasPromocionadas);

export { router };
