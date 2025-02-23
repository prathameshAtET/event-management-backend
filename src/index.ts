import express from 'express';
import { PORT } from './env_vars';
import eventRouter from './routes/eventRoutes';
import attendeeRouter from './routes/attendeeRoutes';
import { logAccessedUrls } from './middlewares/logAccess';
import logger from './logger';
import db, { initializeDatabase } from './db/connection';

// Initialize database and start server
(async () => {
    try {
        // Initialize database with proper error handling
        await initializeDatabase();

        const app = express();

        // middleware for parsing JSON bodies 
        app.use(express.json());
        app.use("/", logAccessedUrls);

        // routes
        app.use("/api/events", eventRouter);
        app.use("/api/attendee", attendeeRouter);

        app.listen(PORT, () => {
            logger.info(`Started Server on PORT ${PORT}`);
        });
    } catch (error) {
        logger.error('Failed to initialize application:', error);
        process.exit(1);
    }
})();