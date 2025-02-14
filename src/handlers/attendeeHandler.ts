import { Request, Response } from "express";

export function getEventAttendees(req:Request,res:Response){
    const eventId = req.params.id;

    res.status(200).send({eventId:eventId})
}

export function getAttendeesByName(req:Request,res:Response){
    const query = req.query;

    res.status(200).send({query:query})
}