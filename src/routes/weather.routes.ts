import express, { Express } from 'express';
import { weatherController } from '../controllers/weather.controllers';

/*
// http://localhost:8080/weather
app.post('/weather', weatherController);
*/

export const weatherRoutes = (expressApp: Express): void => {
    const weatherRouter = express.Router();

    weatherRouter.post('/', weatherController);

    expressApp.use('/weather', weatherRouter);
};
