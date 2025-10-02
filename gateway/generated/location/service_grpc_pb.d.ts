// package: location
// file: location/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as location_service_pb from "../location/service_pb";

interface ILocationService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getLocation: ILocationService_IGetLocation;
}

interface ILocationService_IGetLocation extends grpc.MethodDefinition<location_service_pb.IpAddress, location_service_pb.Point> {
    path: "/location.Location/GetLocation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<location_service_pb.IpAddress>;
    requestDeserialize: grpc.deserialize<location_service_pb.IpAddress>;
    responseSerialize: grpc.serialize<location_service_pb.Point>;
    responseDeserialize: grpc.deserialize<location_service_pb.Point>;
}

export const LocationService: ILocationService;

export interface ILocationServer extends grpc.UntypedServiceImplementation {
    getLocation: grpc.handleUnaryCall<location_service_pb.IpAddress, location_service_pb.Point>;
}

export interface ILocationClient {
    getLocation(request: location_service_pb.IpAddress, callback: (error: grpc.ServiceError | null, response: location_service_pb.Point) => void): grpc.ClientUnaryCall;
    getLocation(request: location_service_pb.IpAddress, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: location_service_pb.Point) => void): grpc.ClientUnaryCall;
    getLocation(request: location_service_pb.IpAddress, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: location_service_pb.Point) => void): grpc.ClientUnaryCall;
}

export class LocationClient extends grpc.Client implements ILocationClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getLocation(request: location_service_pb.IpAddress, callback: (error: grpc.ServiceError | null, response: location_service_pb.Point) => void): grpc.ClientUnaryCall;
    public getLocation(request: location_service_pb.IpAddress, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: location_service_pb.Point) => void): grpc.ClientUnaryCall;
    public getLocation(request: location_service_pb.IpAddress, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: location_service_pb.Point) => void): grpc.ClientUnaryCall;
}
