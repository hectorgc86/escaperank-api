import { Router } from "express";
import {
  getCompanyias,
  getCompanyia,
  postCompanyia,
  putCompanyia,
  deleteCompanyia,
} from "../controllers/companyia";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", logMiddleware, getCompanyias);
router.get("/:id", getCompanyia);
router.put("/:id", putCompanyia);
router.post("/", postCompanyia);
router.delete("/:id", deleteCompanyia);

export { router };
