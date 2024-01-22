export enum WeatherTime {
    DAY = 'DAY',
    NIGHT = 'NIGHT'
}

export enum WeatherType {
    SUNNY = 'SUNNY',
    CLOUDY = 'CLOUDY',
    PARTLY_CLOUDY = 'PARTLY_CLOUDY',
    RAINY = 'RAINY'
}

export type Weather = {
    time: WeatherTime;
    type: WeatherType;
};
