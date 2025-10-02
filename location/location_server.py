from concurrent import futures
import grpc
import service_pb2
import service_pb2_grpc
import requests

class LocationService(service_pb2_grpc.LocationServicer):
    def GetLocation(self, request, context):
        response = requests.get("https://ipwho.is/")
        data = response.json()
        return service_pb2.Point(latitude=data["latitude"], longitude=data["longitude"])

def serve(port: int = 3030):
        server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
        service_pb2_grpc.add_LocationServicer_to_server(LocationService(), server)
        server.add_insecure_port(f"localhost:{port}")
        server.start()
        server.wait_for_termination()

if __name__ == "__main__":
    serve()
