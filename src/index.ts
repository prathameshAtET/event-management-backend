import express from 'express'; 
import {PORT} from './env_vars'; //import required variables
import eventRouter from './routes/eventRoutes';

const app = express();

// middleware for parsing JSON bodies 
app.use(express.json());

// for event routes
app.use("/api/events",eventRouter);

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT} at http://localhost:${PORT}`);
})