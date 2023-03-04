import { Request, Response, Router } from "express";
import { postLogin, postRegistro } from "../controllers/auth";

const router = Router();

router.post('/register', postLogin);
router.post('/login', postRegistro); 

export { router };
