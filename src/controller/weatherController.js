require('dotenv').config()

const callWeatherApp = require("../services/weatherServices");

async function getWeather(req, res) {
    try {
        res.status(200).json(callWeatherApp(req));
    } catch (error) {
        console.error(error);
    }
  }

module.exports = getWeather