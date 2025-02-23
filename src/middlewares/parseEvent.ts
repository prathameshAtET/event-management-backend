import { NextFunction, Request, Response } from "express";
import { EventCreationAttributes } from "../interfaces/Event";

export function parseEvent(req: Request, res: Response, next: NextFunction) {
    const body = req.body as EventCreationAttributes;

    // convert to date time object
    if (body.eventDate) body.eventDate = new Date(body.eventDate);

    // convert to number
    if (body.ticketPrice) body.ticketPrice = parseFloat(body.ticketPrice as unknown as string);

    // make ticketSold default to 0
    if (!body.ticketsSold) body.ticketsSold = 0;

    if (!body.eventIcon) body.eventIcon = "https://avatar.iran.liara.run/public";

    next();
}