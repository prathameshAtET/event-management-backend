import { col, Optional } from "sequelize";
import { Table, Model, Column, DataType, CreatedAt } from "sequelize-typescript";
import { EventAttributes, EventCreationAttributes } from "../interfaces/Event";

@Table({
    timestamps: true,
    tableName: "events",
    modelName: "Event",
})
export class Event extends Model<
    EventAttributes,
    EventCreationAttributes
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
    declare eventName: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    declare eventDate: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare eventVenue: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    declare eventIcon?: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
    })
    declare ticketPrice: number;

    @Column({
        type: DataType.STRING(2000),
        allowNull: true,
    })
    declare description: string;

    @Column({
        type: DataType.INTEGER,
        // defaultValue: 0,
        allowNull: false,
    })
    declare ticketsSold?: number;

    @CreatedAt
    declare createdAt: Date;
}
