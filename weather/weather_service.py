import requests

def get_weather(lat: float, lon: float):
    weather_url = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": lat,
        "longitude": lon,
        "current_weather": True
    }
    resp = requests.get(weather_url, params=params).json()

    current = resp.get("current_weather", {})
    return {
        "temperature": current.get("temperature", 0.0),
        "description": f"Wind {current.get('windspeed', 0)} km/h"
    }
