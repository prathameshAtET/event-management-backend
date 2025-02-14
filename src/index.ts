import express from 'express';
import { PORT } from './env_vars'; //import required variables
import eventRouter from './routes/eventRoutes';
import { logAccessedUrls } from './middlewares/logAccess';
import logger from './logger';
import db, { testConnection } from './db/connection';
import { Event } from './models/Event';

(async () => {
    await db.sync();

    await testConnection();
})();


const app = express();

// middleware for parsing JSON bodies 
app.use(express.json());
app.use("/", logAccessedUrls);

// for event routes
app.use("/api/events", eventRouter);

app.listen(PORT, () => {
    logger.info(`Started Server on PORT ${PORT}`);
})