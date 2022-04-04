import { NextFunction, Request, Response } from "express";
import { RateLimiterRedis } from "rate-limiter-flexible";
import { createClient } from "redis";

import { AppError } from "@shared/errors/AppError";

const redisClient = createClient({
    legacyMode: true,
    socket: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
    }
});

const limiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: "rateLimiter",
    points: 10, 
    duration: 5 
});

export default async function rateLimiter(
    request: Request,
    resposne: Response,
    next: NextFunction
): Promise<void> {
    
    try{
        
        await redisClient.connect();

        await limiter.consume(request.ip);
        
        return next();
    }catch(err) {
        throw new AppError("too many request", 429);
    }
}