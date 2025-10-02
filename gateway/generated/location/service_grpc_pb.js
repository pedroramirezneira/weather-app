// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var location_service_pb = require('../location/service_pb.js');

function serialize_location_IpAddress(arg) {
  if (!(arg instanceof location_service_pb.IpAddress)) {
    throw new Error('Expected argument of type location.IpAddress');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_location_IpAddress(buffer_arg) {
  return location_service_pb.IpAddress.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_location_Point(arg) {
  if (!(arg instanceof location_service_pb.Point)) {
    throw new Error('Expected argument of type location.Point');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_location_Point(buffer_arg) {
  return location_service_pb.Point.deserializeBinary(new Uint8Array(buffer_arg));
}


var LocationService = exports.LocationService = {
  getLocation: {
    path: '/location.Location/GetLocation',
    requestStream: false,
    responseStream: false,
    requestType: location_service_pb.IpAddress,
    responseType: location_service_pb.Point,
    requestSerialize: serialize_location_IpAddress,
    requestDeserialize: deserialize_location_IpAddress,
    responseSerialize: serialize_location_Point,
    responseDeserialize: deserialize_location_Point,
  },
};

exports.LocationClient = grpc.makeGenericClientConstructor(LocationService, 'Location');
