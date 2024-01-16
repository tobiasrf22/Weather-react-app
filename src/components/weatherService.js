const API_KEY = 'cfcf7c70518683077835cb49d67fcc77';

const makeIconUrl = (iconId)=> {
    console.log(`http://openweathermap.org//img/wn/${iconId}@2x.png`);
    return `https://openweathermap.org//img/wn/${iconId}@2x.png`;
};


const getFormattedWeatherData = async (city, units) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}`;

    const data = await fetch(URL)
        .then(res => res.json())
        .then((data) => data);

    const {
        weather,
        main: { temp,
                feels_like,
                temp_min,
                temp_max,
                humidity,pressure },
        wind: { speed },
        sys: { country },
        name,
    } = data
    const { description,
            icon
        } = weather[0];

    return {
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        speed,
        country,
        name,
        description,
        pressure,
        iconUrl:makeIconUrl(icon)
    }
}

export { getFormattedWeatherData };
