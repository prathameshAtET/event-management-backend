export interface AttendeeAttributes {
    id?: number;
    name: string;
    email: string;
    createdAt: Date;
    eventId: number;
}

export interface AttendeeCreationAttributes {
    name: string;
    email: string;
    eventId: number;
}
