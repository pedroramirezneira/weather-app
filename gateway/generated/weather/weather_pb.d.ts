// package: weather
// file: weather/weather.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class WeatherRequest extends jspb.Message { 
    getLatitude(): number;
    setLatitude(value: number): WeatherRequest;
    getLongitude(): number;
    setLongitude(value: number): WeatherRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WeatherRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WeatherRequest): WeatherRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WeatherRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WeatherRequest;
    static deserializeBinaryFromReader(message: WeatherRequest, reader: jspb.BinaryReader): WeatherRequest;
}

export namespace WeatherRequest {
    export type AsObject = {
        latitude: number,
        longitude: number,
    }
}

export class WeatherResponse extends jspb.Message { 
    getTemperature(): number;
    setTemperature(value: number): WeatherResponse;
    getDescription(): string;
    setDescription(value: string): WeatherResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WeatherResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WeatherResponse): WeatherResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WeatherResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WeatherResponse;
    static deserializeBinaryFromReader(message: WeatherResponse, reader: jspb.BinaryReader): WeatherResponse;
}

export namespace WeatherResponse {
    export type AsObject = {
        temperature: number,
        description: string,
    }
}
