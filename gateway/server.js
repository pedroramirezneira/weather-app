const express = require("express");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const LOCATION_PROTO = "../location/service.proto";
const WEATHER_PROTO = "../weather/weather.proto";

const locationDef = protoLoader.loadSync(LOCATION_PROTO, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const weatherDef = protoLoader.loadSync(WEATHER_PROTO, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const locationProto = grpc.loadPackageDefinition(locationDef);
const weatherProto = grpc.loadPackageDefinition(weatherDef);

const locationClient = new locationProto.location.LocationService(
  "localhost:3000",
  grpc.credentials.createInsecure()
);

const app = express();

app.get("/", (request, response) => {
  locationClient.GetLocation({}, (error, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log(response);
    }
  });
});
