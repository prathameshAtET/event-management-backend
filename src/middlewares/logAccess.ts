import { NextFunction, Request, Response } from "express";
import logger from "../logger";

export function logAccessedUrls(req: Request, res: Response, next: NextFunction) {
    logger.info(`Accessed : '${req.url}'`);
    next();
}