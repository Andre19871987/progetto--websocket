import ws from 'ws';

// Array delle websocket aperte
export const openWebsockets: ws[] = [];

// Websocket ws://localhost:8080/weather
const wsWeatherServer = new ws.WebSocketServer({ noServer: true });

wsWeatherServer.on('connection', (ws, request) => {
    console.log('New connection', request.url, request.method);
    openWebsockets.push(ws);

    ws.on('open', () => {
        console.log('WS OPEN', ws);
    });

    ws.on('message', (data, isBinary) => {
        console.log('WS MESSAGE - WS', ws, 'DATA', data, `isBinary: ${isBinary}`);
    });

    ws.on('error', (error) => {
        console.log('WS ERROR', ws, error);
    });

    ws.on('close', (code, reason) => {
        console.log('WS CLOSE', ws, code, reason);
        openWebsockets.splice(openWebsockets.indexOf(ws), 1);
    });
});

export default {
    path: '/weather',
    websocketServer: wsWeatherServer
};
