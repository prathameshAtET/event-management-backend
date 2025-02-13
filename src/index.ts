import express from 'express'; 
import {PORT} from './env_vars'; //import required variables

const app = express();

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT} at http://localhost:${PORT}`);
})