// file to extract env vars for easy use in project
import dotenv from 'dotenv';
import logger from './logger';
dotenv.config()

// exporting all variables here
export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV || 'dev';

// querying hard upper limits
export const DB_RETRIEVAL_UPPER_CAP = (process.env.DB_RETRIEVAL_UPPER_CAP as unknown as number) || 50;

// handle missing DB info
export const DATABASE_NAME = process.env.DATABASE_NAME || 'eventdb';
export const DATABASE_USER = process.env.DATABASE_USER || 'eventapp';
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || '';
export const DATABASE_HOST = process.env.DATABASE_HOST || 'localhost';

export const DATABASE_URL = process.env.DATABASE_URL || '';