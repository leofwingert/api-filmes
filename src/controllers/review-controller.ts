import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { Review } from '../entities/review';

const prisma = new PrismaClient();

export const createReview = async (req: Request, res: Response) => {
    try {
        const { content, rating, movieId } = req.body;

        const review = await prisma.review.create({
            data: {
                content,
                rating,
                movieId
            },
        });

        res.status(201).json(review);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create review' });
    }
};

export const getAllReviews = async (req: Request, res: Response) => {
    try {
        const reviews = await prisma.review.findMany();
        res.status(200).json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
}

export const getReviewById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const review = await prisma.review.findUnique({
            where: { id: Number(id) },
        });
        if (!review) {
            res.status(404).json({ error: 'Review not found' });
        }

        res.status(200).json(review);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch review' });
    }
};

export const deleteReview = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await prisma.review.delete({
            where: { id: Number(id) },
        });

        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete review' });
    }
};

export const updateReview = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { content, rating } = req.body;

        const review = await prisma.review.update({
            where: { id: Number(id) },
            data: {
                content,
                rating,
            },
        });

        res.status(200).json(review);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update review' });
    }
};