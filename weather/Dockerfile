FROM python:3.12-slim

WORKDIR /app
COPY . /app

RUN pip install --no-cache-dir grpcio grpcio-tools requests

RUN python -m grpc_tools.protoc -I ./weather \
    --python_out=./weather \
    --pyi_out=./weather \
    --grpc_python_out=./weather \
    ./weather/weather.proto

EXPOSE 50051

CMD ["python", "weather/weather_server.py"]
