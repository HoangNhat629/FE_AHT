import { getPreciseLocation } from "./currentPostion";
import urls from "./urls"

export const getWeatherAsync = async(city = '') => {
    let lat = 0,
        lon = 0;
    if (city === '') {
        const currentPostion = await getPreciseLocation();
        lat = currentPostion[0];
        lon = currentPostion[1];
        console.log(currentPostion);
    } else {
        await fetch(`${urls.latlon}?q=${city}&appid=${urls.api_key}`)
            .then((res) => (res.json()))
            .then((data) => {
                //console.log(data);
                lat = data[0].lat;
                lon = data[0].lon;
            });
        // console.log(lat);
        // console.log(lon);
    }
    const cityname = await fetch(`${urls.cityName}?lat=${lat}&lon=${lon}&appid=${urls.api_key}&units=metric`)
        .then((res) => (res.json()))
        .then(name => {
            return name[0].local_names.vi || name[0].local_names.en;
        });
    //console.log(cityname);
    const weather = await fetch(`${urls.weatherOneCall}?lat=${lat}&lon=${lon}&appid=${urls.api_key}`).then((res) => (res.json()));
    //console.log(weather);
    return {
        weather,
        cityname
    }
};