export interface createEventDto {
    eventName: string;
    eventDate: Date;
    eventVenue: string;
    eventIcon?:string;
    ticketPrice: number;
    description: string;
}