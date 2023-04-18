import { Router } from "express";
import { postSendMail } from "../controllers/mail";
import { checkSession } from "../middleware/session";

const router = Router();

router.post("/mail", checkSession, postSendMail);

export { router };
