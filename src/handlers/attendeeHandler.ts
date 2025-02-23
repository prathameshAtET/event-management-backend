import { Request, Response } from "express";
import { DB_RETRIEVAL_UPPER_CAP } from "../env_vars";
import logger from "../logger";
import { Attendee } from "../models/Attendee";
import { Op } from "sequelize";
import { AttendeeCreationAttributes } from "../interfaces/Attendee";

export async function getAttendeeById(req:Request,res:Response) {
    try {
        const id = req.params.id;
        
        const data = await Attendee.findOne({
            where: {
                id: id
            }
        })
        res.status(200).send({ success: true, ok: true, data });
    } catch (error) {
        logger.error(error);
        res.status(500).send({
            success: false,
            ok: false,
            msg: "Failed to fetch Attendee"
        })
    }
}

export async function getAttendeesByName(req: Request, res: Response) {
    try {
        const name = req.query.name ? req.query.name : null;
        const page = parseInt(req.query.page as string) || 1; // as 1 page will of limit size, so offset = page * limit
        const limit = parseInt(req.query.limit as string) || Number(DB_RETRIEVAL_UPPER_CAP);
        const offset = (page - 1) * limit;

        if (page <= 0) {
            logger.warn("Got page value as negative which is not appropriate.")
        }
        if (offset < 0) {
            throw "Offset is set to negative value, Which is not correct.";
        }

        const whereCondition = name ?
            {
                [Op.or]: [
                    { name: { [Op.like]: `%${name}%` } },
                    { email: { [Op.like]: `%${name}%` } },
                ]
            }
            :
            {}

        const data = await Attendee.findAll({
            where: whereCondition,
            limit: limit,
            offset: offset
        })
        res.status(200).send({ success: true, ok: true, data });
    } catch (error) {
        logger.error(error);
        res.status(500).send({
            success: false,
            ok: false,
            msg: "Failed to fetch Attendees"
        })
    }
}

export async function createAttendee(req: Request<{}, {}, AttendeeCreationAttributes>, res: Response) {
    try {
        const attendee: AttendeeCreationAttributes = req.body;

        const result = await Attendee.create(attendee);

        res.status(201).send({ success: true, ok: true, data: attendee, result });
    } catch (error) {
        logger.error(error);
        res.status(500).send({ success: false, ok: false, msg: "Failed to create New Attendees" })
    }
} 