import { Router } from "express";
import { getAttendeesByName } from "../handlers/attendeeHandler";

const router = Router();

// get all events
router.get("/", getAttendeesByName);

export default router;