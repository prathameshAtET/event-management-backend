import { Router } from "express";
import { createAttendee, getAttendeeById, getAttendeesByName } from "../handlers/attendeeHandler";

const router = Router();

// get all events
router.get("/", getAttendeesByName);

router.get("/:id",getAttendeeById);

router.post("/",createAttendee);

export default router;