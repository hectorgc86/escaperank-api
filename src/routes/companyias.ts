import { Router } from "express";
import {
  getCompanyias,
  getCompanyia,
  postCompanyia,
  putCompanyia,
  deleteCompanyia,
} from "../controllers/companyia";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", checkSession, getCompanyias);
router.get("/:id", checkSession, getCompanyia);
router.put("/:id", checkSession, putCompanyia);
router.post("/", checkSession, postCompanyia);
router.delete("/:id", checkSession, deleteCompanyia);

export { router };
