import { Sequelize } from "sequelize-typescript";
import { NODE_ENV, DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USER, DATABASE_URL } from "../env_vars";
import logger from "../logger";
import { Event } from "../models/Event";
import { Attendee } from "../models/Attendee";

const db = (NODE_ENV == 'dev') ?
    new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
        dialect: "mssql",
        host: DATABASE_HOST,
        port: 1433, // default port for mssql
        dialectOptions: {
            options: {
                encrypt: NODE_ENV == 'dev' ? false : true,
                trustServerCertificate: true,
            },
        },
        models: [Event, Attendee]
    })
    :
    new Sequelize(DATABASE_URL, {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        models: [Event, Attendee]
    })





export async function initializeDatabase() {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
        // Add sync after successful authentication
        await db.sync({ alter: true });
        console.log('Database synchronized successfully.');
    } catch (error) {
        logger.error('Unable to connect to the database:', error);
    }
}

export default db;