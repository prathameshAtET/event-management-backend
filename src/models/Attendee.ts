import { col, Optional } from "sequelize";
import { Table, Model, Column, DataType, CreatedAt, ForeignKey } from "sequelize-typescript";
import { EventAttributes, EventCreationAttributes } from "../interfaces/Event";
import { AttendeeAttributes, AttendeeCreationAttributes } from "../interfaces/Attendee";
import { Event } from "./Event";

@Table({
    timestamps: true,
    tableName: "attendees",
    modelName: "Attendee",
})
export class Attendee extends Model<
    AttendeeAttributes,
    AttendeeCreationAttributes
> {
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true,
    })
    declare id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare email: string;

    @ForeignKey(() => Event)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
    })
    declare eventId: number;

    @CreatedAt
    declare createdAt: Date;
}
