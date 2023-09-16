const express = require("express");
const weatherRoute = require("./routes/weatherRoute")

const app = express()

app.use(express.json())

app.use("/api/weather", weatherRoute)

app.listen(3000, ()=> {
    console.log('Node is running on port 3000');
});
