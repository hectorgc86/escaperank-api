import { Router } from "express";
import { deleteCategoria, getCategoria, getCategorias, postCategoria, putCategoria } from "../controllers/categoria";

const router = Router();

router.get('/', getCategorias);
router.get('/:id', getCategoria);
router.put('/:id', putCategoria);
router.post('/', postCategoria);
router.delete('/:id', deleteCategoria);

export { router };
