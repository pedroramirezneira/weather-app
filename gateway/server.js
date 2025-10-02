const express = require("express");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");

const LOCATION_PROTO = path.join("..", "location", "service.proto");
const WEATHER_PROTO = path.join("..", "weather", "weather.proto");

const loaderOpts = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: [".."],
};

const locationDef = protoLoader.loadSync(LOCATION_PROTO, loaderOpts);
const weatherDef = protoLoader.loadSync(WEATHER_PROTO, loaderOpts);

const locationPkg = grpc.loadPackageDefinition(locationDef);
const weatherPkg = grpc.loadPackageDefinition(weatherDef);

const LocationClient =
  locationPkg.location?.Location ||
  locationPkg.location?.LocationService ||
  locationPkg.Location;
const WeatherClient =
  weatherPkg.weather?.WeatherService || weatherPkg.WeatherService;

const locationClient = new LocationClient(
  "location:3030",
  grpc.credentials.createInsecure()
);
const weatherClient = new WeatherClient(
  "weather:50051",
  grpc.credentials.createInsecure()
);

const app = express();

app.get("/", (req, res) => {
  const ip = req.query.ipaddress || req.socket.remoteAddress;
  locationClient.getLocation({ address: ip }, (error, response) => {
    if (error) {
      res.status(500).send(error);
      return;
    }
    console.log(response);
    const weatherRequest = {
      latitude: response.latitude,
      longitude: response.longitude,
    };
    weatherClient.getWeather(weatherRequest, (error, response) => {
      if (error) {
        res.status(500).send(error);
        return;
      }
      console.log(response);
      res.status(200).send(response);
    });
  });
});

app.listen(3000, () => {
  console.log("Gateway escuchando en http://localhost:3000");
});
