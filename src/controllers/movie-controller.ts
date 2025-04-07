import { Movie } from "../entities/movie";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createMovie = async (req: Request, res: Response) => {
    try {
        const { title, details, director, releaseDate, genre } = req.body;
        const formattedReleaseDate = releaseDate ? new Date(releaseDate) : undefined;

        const movie = new Movie(
            title,
            details,
            director,
            formattedReleaseDate,
            genre,
        );

        const post = await prisma.movie.create({
            data: {
                title: movie.title,
                details: movie.details,
                director: movie.director,
                releaseDate: movie.releaseDate,
                genre: movie.genre,
                slug: movie.slug,
            },
        });

        res.status(201).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create movie" });
    }
};

export const getAllMovies = async (req: Request, res: Response) => {
    try {
        const movies = await prisma.movie.findMany();
        res.status(200).json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch movies" });
    }
}

export const getMovieById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const movie = await prisma.movie.findUnique({
            where: { id: Number(id) },
        });
        if (!movie) {
            res.status(404).json({ error: "Movie not found" });
        }

        res.status(200).json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch movie" });
    }
}

export const deleteMovie = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const movie = await prisma.movie.delete({
            where: { id:Number(id) },
        });

        res.status(200).json(movie);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to delete movie" });
    }
}

export const updateMovie = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const existingMovie = await prisma.movie.findUnique({
            where: { id:Number(id) },
        });
        if (!existingMovie) {
            res.status(404).json({ error: "Movie not found" });
        }
        const { title, details, director, releaseDate, genre } = req.body;

        const formattedReleaseDate = releaseDate ? new Date(releaseDate) : undefined;

        const movie = await prisma.movie.update({
            where: { id: Number(id) },
            data: {
                title,
                details,
                director,
                releaseDate: formattedReleaseDate,
                genre,
            },
        });

        res.status(200).json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update movie" });
    }
}

export const getReviews = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const reviews = await prisma.review.findMany({
            where: { movieId: Number(id) },
        });
        res.status(200).json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch reviews" });
    }
}