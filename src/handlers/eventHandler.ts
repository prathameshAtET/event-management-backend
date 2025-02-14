import { Request, Response } from 'express';
import { EventCreationAttributes } from '../interfaces/Event';
import { Event } from '../models/Event';

export function getAllEvents(req: Request, res: Response) {
    res.status(200).send({ success: true, ok: true });
}

export function getEventDetailsByID(req: Request, res: Response) {
    const eventId = req.params['id'];

    res.status(200).send({ success: true, ok: true, id: eventId });
}

export function createEvent(req: Request<{}, {}, EventCreationAttributes>, res: Response) {
    const event: EventCreationAttributes = req.body;

    Event.create(event);

    res.status(201).send({ success: true, ok: true, data: event });
}