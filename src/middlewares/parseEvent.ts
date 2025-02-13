import { NextFunction, Request, Response } from "express";
import { createEventDto } from "../interfaces/createEvent.dto";

export function parseEvent(req: Request, res: Response, next: NextFunction) {
    const body = req.body as createEventDto;

    if (body.eventDate) body.eventDate = new Date(body.eventDate);

    if (body.ticketPrice) body.ticketPrice = parseFloat(body.ticketPrice as unknown as string);

    if (!body.eventIcon) body.eventIcon = "https://avatar.iran.liara.run/public";

    next();
}