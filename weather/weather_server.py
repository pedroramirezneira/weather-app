import grpc
from concurrent import futures
import weather_pb2
import weather_pb2_grpc
from weather_service import get_weather


class WeatherServiceServicer(weather_pb2_grpc.WeatherServiceServicer):
    def GetWeather(self, request, context):
        data = get_weather(request.location)
        return weather_pb2.WeatherResponse(
            location=request.location,
            temperature=data['temperature'],
            description=data['description']
        )

def serve() :
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    weather_pb2_grpc.add_WeatherServiceServicer_to_server(WeatherServiceServicer(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    server.wait_for_termination()

if __name__ == '__main__':
    serve()
