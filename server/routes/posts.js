import express from "express";
import {
  posts_get,
  posts_post,
  posts_update,
  posts_delete,
  posts_like,
} from "../controllers/postControllers.js";

const router = express.Router();

router.get("/", posts_get);
router.post("/", posts_post);
router.patch("/:id", posts_update);
router.delete("/:id", posts_delete);
router.patch("/:id/likepost", posts_like);

export default router;
