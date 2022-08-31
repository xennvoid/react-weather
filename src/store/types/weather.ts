export interface WeatherDay {
    dt: number;
    dt_txt: string;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
    };

    weather: WeatherDescription[]

    wind: {
        speed: number;
    }
}

export interface WeatherDescription {
    description: string;
    icon: string;
}

export interface Weather {
    city: {
        name: string;
    }
    list: WeatherDay[]
}