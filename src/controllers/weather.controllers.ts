import { Request, Response } from 'express';
import { WeatherBody } from './types';
// import { lastWeather } from '../models/weather.model';
import { openWebsockets } from '../websockets/weather.websocket';

// REST per comunicare al sistema il tempo corrente
// POST /weather
// Body: time: DAY o NIGHT, type: SUNNY, CLOUDY, PARTLY_CLOUDY, RAINY
export const weatherController = async (request: Request, response: Response): Promise<void> => {
    const newWeather: WeatherBody = request.body;
    console.log('REST WEATHER - NEW WEATHER', newWeather);
    // Gestire una memorizzazione del tempo corrente e inviare questo valore su tutte le websocket aperte
    // lastWeather = newWeather;
    /* for (const openWebsocket of openWebsockets) {
        openWebsocket.send(JSON.stringify(newWeather));
    } */
    openWebsockets.map((openWebsocket) => openWebsocket.send(JSON.stringify(newWeather)));
    response.status(200).json('Clients updated');
};
