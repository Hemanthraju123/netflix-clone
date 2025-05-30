import express from "express";
import { getTrendingMovie, getM0vieTrailers , getMovieDetails , getSimilarMovies ,getMoviesByCategory} from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/trending", getTrendingMovie);
router.get("/:id/trailers",getM0vieTrailers);
router.get("/:id/details",getMovieDetails);
router.get("/:id/similar",getSimilarMovies);
router.get("/:category",getMoviesByCategory);

export default router;