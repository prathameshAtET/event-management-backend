import { Request, Response } from 'express';
import { createEventDto } from '../interfaces/createEvent.dto';

export function getAllEvents(req: Request, res: Response) {
    res.status(200).send({ success: true, ok: true });
}

export function getEventDetailsByID(req: Request, res: Response) {
    const eventId = req.params['id'];

    res.status(200).send({ success: true, ok: true, id: eventId });
}

export function createEvent(req: Request<{}, {}, createEventDto>, res: Response) {
    const event: createEventDto = req.body;

    res.status(201).send({ success: true, ok: true, data: event });
}