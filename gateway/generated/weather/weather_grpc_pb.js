// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var weather_weather_pb = require('../weather/weather_pb.js');

function serialize_weather_WeatherRequest(arg) {
  if (!(arg instanceof weather_weather_pb.WeatherRequest)) {
    throw new Error('Expected argument of type weather.WeatherRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_weather_WeatherRequest(buffer_arg) {
  return weather_weather_pb.WeatherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_weather_WeatherResponse(arg) {
  if (!(arg instanceof weather_weather_pb.WeatherResponse)) {
    throw new Error('Expected argument of type weather.WeatherResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_weather_WeatherResponse(buffer_arg) {
  return weather_weather_pb.WeatherResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WeatherServiceService = exports.WeatherServiceService = {
  getWeather: {
    path: '/weather.WeatherService/GetWeather',
    requestStream: false,
    responseStream: false,
    requestType: weather_weather_pb.WeatherRequest,
    responseType: weather_weather_pb.WeatherResponse,
    requestSerialize: serialize_weather_WeatherRequest,
    requestDeserialize: deserialize_weather_WeatherRequest,
    responseSerialize: serialize_weather_WeatherResponse,
    responseDeserialize: deserialize_weather_WeatherResponse,
  },
};

exports.WeatherServiceClient = grpc.makeGenericClientConstructor(WeatherServiceService, 'WeatherService');
