import express from "express";
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  getReviews,
  updateMovie,
} from "../controllers/movie-controller";

const router = express.Router();

router.post("/", createMovie);
router.get("/", getAllMovies);
router.get("/:id", getMovieById);
router.get("/list/:id", getReviews)
router.delete("/:id", deleteMovie);
router.patch("/:id", updateMovie);

export default router;
