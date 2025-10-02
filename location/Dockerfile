FROM python:3.12-slim

WORKDIR /app
COPY . /app

RUN pip install --no-cache-dir grpcio grpcio-tools requests

RUN python -m grpc_tools.protoc -I ./location \
    --python_out=./location \
    --pyi_out=./location \
    --grpc_python_out=./location \
    ./location/service.proto

EXPOSE 3030

CMD ["python", "location/location_server.py"]
