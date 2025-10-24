# api/routes_weather.py 
from fastapi import APIRouter, Query, HTTPException
import httpx
from app.config import settings
from app.core.weather_service import format_weather_data, fetch_additional_data

router = APIRouter()

@router.get("/weather")
async def get_weather(city: str = Query(..., description="City name")):
    """
    Fetch 5-day forecast + today's detailed stats + moon phase for a given city.
    """

    url = f"{settings.openweather_base_url}/forecast"
    params = {
        "q": city,
        "appid": settings.openweather_api_key,
        "units": "metric"
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)

    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail="Failed to fetch weather data")

    raw_data = response.json()

    city_info = raw_data.get("city", {}).get("coord", {})
    lat = city_info.get("lat")
    lon = city_info.get("lon")

    extra_data = await fetch_additional_data(lat, lon) if lat and lon else {}
    print(extra_data)
    formatted_data = format_weather_data(raw_data, extra_data)
    return formatted_data
