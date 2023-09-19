const axios = require('axios');

const WEATHER_TOKEN= process.env.WEATHER_TOKEN

async function callWeatherApp(req,res) {
    const {city} = req.params
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_TOKEN}&q=${req}&aqi=no`);
    res = response.data;
}

module.exports = callWeatherApp