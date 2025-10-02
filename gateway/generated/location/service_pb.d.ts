// package: location
// file: location/service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class IpAddress extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): IpAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IpAddress.AsObject;
    static toObject(includeInstance: boolean, msg: IpAddress): IpAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IpAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IpAddress;
    static deserializeBinaryFromReader(message: IpAddress, reader: jspb.BinaryReader): IpAddress;
}

export namespace IpAddress {
    export type AsObject = {
        address: string,
    }
}

export class Point extends jspb.Message { 
    getLatitude(): number;
    setLatitude(value: number): Point;
    getLongitude(): number;
    setLongitude(value: number): Point;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Point.AsObject;
    static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Point;
    static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
    export type AsObject = {
        latitude: number,
        longitude: number,
    }
}
