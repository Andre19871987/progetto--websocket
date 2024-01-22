import { weatherRoutes } from './weather.routes';
import { Express } from 'express';

export const routes = (app: Express): void => {
    weatherRoutes(app);
};
