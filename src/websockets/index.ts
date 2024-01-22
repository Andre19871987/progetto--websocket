import { Server } from 'http';
import weatherWebsocket from './weather.websocket';

// In caso si debbano definire nuove websocket, basta definirle in un file websocket.ts,
// importare il file e aggiungere l'oggetto importato a websocketServers

const websocketServers = [weatherWebsocket];

export const websockets = (http: Server): void => {
    http.on('upgrade', (request, socket, head) => {
        const pathname = request.url;

        const websocketServer = websocketServers.find((websocketServer) => websocketServer.path === pathname);

        if (websocketServer) {
            websocketServer.websocketServer.handleUpgrade(request, socket, head, (ws) => {
                websocketServer.websocketServer.emit('connection', ws, request);
            });
        } else {
            socket.destroy();
        }
    });
};
