import { Request, Response } from 'express';
import { EventCreationAttributes } from '../interfaces/Event';
import { Event } from '../models/Event';
import { DB_RETRIEVAL_UPPER_CAP } from '../env_vars';
import logger from '../logger';
import { Attendee } from '../models/Attendee';

export async function getAllEvents(req: Request, res: Response) {
    try {
        const page = parseInt(req.query.page as string) || 1; // as 1 page will of limit size, so offset = page * limit
        const limit = parseInt(req.query.limit as string) || Number(DB_RETRIEVAL_UPPER_CAP);
        const offset = (page - 1) * limit;

        if (page <= 0) {
            logger.warn("Got page value as negative which is not appropriate.")
        }
        if (offset < 0) {
            throw "Offset is set to negative value, Which is not correct.";
        }

        const data = await Event.findAll({
            limit: limit,
            offset: offset
        })
        res.status(200).send({ success: true, ok: true, data });
    } catch (error) {
        logger.error(error);
        res.status(500).send({
            success: false,
            ok: false,
            msg: "Failed to fetch events"
        })
    }
}

export async function getEventDetailsByID(req: Request, res: Response) {
    try {
        const eventId = parseInt(req.params['id']) || 0;
        if (eventId === 0) {
            throw "Event ID must be a positive integer number > 0."
        }

        const data = await Event.findOne({
            where: {
                id: eventId
            }
        })

        if (data == null) {
            logger.warn(`Got request for non existing event id: ${eventId}.`)
            res.status(404).send({ success: false, ok: false, msg: "No event Found" });
        } else {
            res.status(200).send({ success: true, ok: true, data });
        }
    } catch (error) {
        logger.error(error);
        res.status(500).send({
            success: false,
            ok: false,
            error: "Failed to fetch event"
        })
    }
}

export async function createEvent(req: Request<{}, {}, EventCreationAttributes>, res: Response) {
    try {
        const event: EventCreationAttributes = req.body;

        const result = await Event.create(event);

        res.status(201).send({ success: true, ok: true, data: event, result });
    } catch (error) {
        logger.error(error);
        res.status(500).send({ success: false, ok: false, msg: "Failed to create New Events" })
    }
}

export async function getEventAttendees(req: Request, res: Response) {
    try {
        const eventId = parseInt(req.params['id']) || 0;
        if (eventId === 0) {
            throw "Event ID must be a positive integer number > 0."
        }

        const data = await Attendee.findAll({
            where: {
                eventId: eventId
            }
        })

        if (data === null) {
            res.status(404).send({ success: false, ok: false, msg: "No data Found", data: [] });
        } else {
            res.status(200).send({ success: true, ok: true, data });
        }
    } catch (error) {
        logger.error(error);
        res.status(500).send({
            success: false,
            ok: false,
            error: "Failed to fetch Attendees"
        })
    }
}