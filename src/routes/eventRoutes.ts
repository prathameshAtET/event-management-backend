import { Router } from "express";
import { createEvent, getAllEvents, getEventDetailsByID } from "../handlers/eventHandler";
import { parseEvent } from "../middlewares/parseEvent";

const router = Router();

// get all events
router.get("/", getAllEvents);

// get event by id
router.get("/:id", getEventDetailsByID);

// create event
router.post("/", parseEvent, createEvent);

export default router;