require('dotenv').config()

const axios = require('axios');

const WEATHER_TOKEN= process.env.WEATHER_TOKEN

async function getWeather(req, res) {
    try {
        const {city} = req.params
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_TOKEN}&q=${city}&aqi=no`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
    }
  }

module.exports = getWeather