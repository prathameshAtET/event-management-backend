export interface EventAttributes {
    id?: number;
    eventName: string;
    eventDate: Date;
    eventVenue: string;
    eventIcon?: string;
    ticketPrice: number;
    description: string;
    ticketsSold?: number;
    createdAt: Date;
}

export interface EventCreationAttributes {
    eventName: string;
    eventDate: Date;
    eventVenue: string;
    eventIcon?: string;
    ticketPrice: number;
    description: string;
    ticketsSold: number;
}
