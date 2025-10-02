// package: weather
// file: weather/weather.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as weather_weather_pb from "../weather/weather_pb";

interface IWeatherServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getWeather: IWeatherServiceService_IGetWeather;
}

interface IWeatherServiceService_IGetWeather extends grpc.MethodDefinition<weather_weather_pb.WeatherRequest, weather_weather_pb.WeatherResponse> {
    path: "/weather.WeatherService/GetWeather";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<weather_weather_pb.WeatherRequest>;
    requestDeserialize: grpc.deserialize<weather_weather_pb.WeatherRequest>;
    responseSerialize: grpc.serialize<weather_weather_pb.WeatherResponse>;
    responseDeserialize: grpc.deserialize<weather_weather_pb.WeatherResponse>;
}

export const WeatherServiceService: IWeatherServiceService;

export interface IWeatherServiceServer extends grpc.UntypedServiceImplementation {
    getWeather: grpc.handleUnaryCall<weather_weather_pb.WeatherRequest, weather_weather_pb.WeatherResponse>;
}

export interface IWeatherServiceClient {
    getWeather(request: weather_weather_pb.WeatherRequest, callback: (error: grpc.ServiceError | null, response: weather_weather_pb.WeatherResponse) => void): grpc.ClientUnaryCall;
    getWeather(request: weather_weather_pb.WeatherRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: weather_weather_pb.WeatherResponse) => void): grpc.ClientUnaryCall;
    getWeather(request: weather_weather_pb.WeatherRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: weather_weather_pb.WeatherResponse) => void): grpc.ClientUnaryCall;
}

export class WeatherServiceClient extends grpc.Client implements IWeatherServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getWeather(request: weather_weather_pb.WeatherRequest, callback: (error: grpc.ServiceError | null, response: weather_weather_pb.WeatherResponse) => void): grpc.ClientUnaryCall;
    public getWeather(request: weather_weather_pb.WeatherRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: weather_weather_pb.WeatherResponse) => void): grpc.ClientUnaryCall;
    public getWeather(request: weather_weather_pb.WeatherRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: weather_weather_pb.WeatherResponse) => void): grpc.ClientUnaryCall;
}
