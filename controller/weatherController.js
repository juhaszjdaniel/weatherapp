const axios = require('axios');

async function getWeather(req, res) {
    try {
        const {city} = req.params
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=b53802bfd3924de0b51124157231609&q=${city}&aqi=no`);
        console.log(response.data.current.temp_c);
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
    }
  }

module.exports = getWeather