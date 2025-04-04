import express from "express";
import {
  createReview,
  deleteReview,
  getAllReviews,
  getReviewById,
  updateReview,
} from "../controllers/review-controller";

const router = express.Router();

router.post("/", createReview);
router.get("/", getAllReviews);
router.get("/:id", getReviewById);
router.delete("/:id", deleteReview);
router.patch("/:id", updateReview);

export default router;
