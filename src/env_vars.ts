// file to extract env vars for easy use in project
import dotenv from 'dotenv';
dotenv.config()

// exporting all variables here
export const PORT = process.env.PORT;
export const NODE_ENV = process.env.NODE_ENV;