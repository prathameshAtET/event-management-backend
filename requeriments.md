POST /api/events -> list all events
GET /api/events -> list all events
GET /api/events/${eventId}/attendee -> event id attendee list
GET /api/attendee?name=${encodeURIComponent(searchQuery)} -> search by name across all events
GET /api/events/${eventId} -> fetch event details by id
GET /api/events/?page=${page}&limit=15 -> pagination across events and limit of page 