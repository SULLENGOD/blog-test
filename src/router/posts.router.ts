import { createPost, getPost, getPosts } from "../controllers/posts.controller";
import { Router } from "express";

const router: Router = Router();

router.post('/', createPost);
router.get('/', getPosts);
router.get('/:id', getPost);

export default router;