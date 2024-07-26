const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Statikus fájlok kiszolgálása
app.use(express.static(path.join(__dirname, "public")));

let sensorData = {
  temperature: null,
  humidity: null,
};

app.post("/api/sensor-data", (req, res) => {
  const { temperature, humidity } = req.body;
  if (temperature !== undefined && humidity !== undefined) {
    sensorData = { temperature, humidity };
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

app.get("/api/sensor-data", (req, res) => {
  res.json(sensorData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
