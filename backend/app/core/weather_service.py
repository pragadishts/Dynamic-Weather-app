from datetime import datetime
from collections import defaultdict
import httpx
from app.config import settings

async def fetch_additional_data(lat: float, lon: float):
    """
    Fetch current weather data using the weather endpoint (free tier).
    Note: OneCall 2.5 is deprecated. Using current weather instead.
    """
    url = f"{settings.openweather_base_url}/weather"
    params = {
        "lat": lat,
        "lon": lon,
        "appid": settings.openweather_api_key,
        "units": "metric"
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)

    if response.status_code != 200:
        return None

    data = response.json()
    
    # Calculate moon phase based on current date
    # Note: For accurate moon phase, you'd need OneCall 3.0 (paid) or a separate API
    moon_phase = calculate_moon_phase(datetime.now())

    return {
        "moon_phase": moon_phase,
        "humidity": data.get("main", {}).get("humidity"),
        "wind_speed": data.get("wind", {}).get("speed"),
        "pressure": data.get("main", {}).get("pressure"),
        "feels_like": data.get("main", {}).get("feels_like"),
        "visibility": data.get("visibility", 0) / 1000  # Convert to km
    }


def calculate_moon_phase(date):
    """
    Approximate moon phase calculation.
    For production, consider using a dedicated astronomy API or OneCall 3.0.
    """
    # Known new moon date
    known_new_moon = datetime(2000, 1, 6, 18, 14)
    lunar_cycle = 29.53058867  # days
    
    diff = (date - known_new_moon).days
    phase = (diff % lunar_cycle) / lunar_cycle
    
    return interpret_moon_phase(phase)


def interpret_moon_phase(value: float) -> str:
    """Translate moon phase value (0–1) into readable text."""
    if value == 0 or value >= 0.97:
        return "New Moon"
    elif 0 < value < 0.25:
        return "Waxing Crescent"
    elif 0.22 <= value <= 0.28:
        return "First Quarter"
    elif 0.25 < value < 0.5:
        return "Waxing Gibbous"
    elif 0.47 <= value <= 0.53:
        return "Full Moon"
    elif 0.5 < value < 0.75:
        return "Waning Gibbous"
    elif 0.72 <= value <= 0.78:
        return "Last Quarter"
    else:
        return "Waning Crescent"


def get_moon_phase_icon(phase: str) -> str:
    """
    Returns weather-icons class name for moon phase.
    Documentation: https://erikflowers.github.io/weather-icons/
    """
    moon_icons = {
        "New Moon": "wi-moon-new",
        "Waxing Crescent": "wi-moon-waxing-crescent-4",
        "First Quarter": "wi-moon-first-quarter",
        "Waxing Gibbous": "wi-moon-waxing-gibbous-4",
        "Full Moon": "wi-moon-full",
        "Waning Gibbous": "wi-moon-waning-gibbous-4",
        "Last Quarter": "wi-moon-third-quarter",
        "Waning Crescent": "wi-moon-waning-crescent-4"
    }
    return moon_icons.get(phase, "wi-moon-alt")


def format_weather_data(data, extra_data=None):
    """
    Process OpenWeather 5-day forecast data into a cleaner structure.
    """
    city_info = data.get("city", {})
    city = city_info.get("name", "Unknown")
    country = city_info.get("country", "")
    coord = city_info.get("coord", {})

    # Group forecasts by date
    daily_data = defaultdict(list)
    for entry in data.get("list", []):
        date_str = entry["dt_txt"].split(" ")[0]
        daily_data[date_str].append(entry)

    formatted_forecast = []
    for date, entries in sorted(daily_data.items())[:5]:
        avg_temp = sum(e["main"]["temp"] for e in entries) / len(entries)
        max_temp = max(e["main"]["temp_max"] for e in entries)
        min_temp = min(e["main"]["temp_min"] for e in entries)
        
        weather_desc = entries[len(entries)//2]["weather"][0]["description"].capitalize()
        icon = entries[len(entries)//2]["weather"][0]["icon"]
        
        date_obj = datetime.strptime(date, "%Y-%m-%d")
        day_name = date_obj.strftime("%A")
        formatted_date = date_obj.strftime("%b %d")

        formatted_forecast.append({
            "date": date,
            "formatted_date": formatted_date,
            "day": day_name,
            "avg_temp": round(avg_temp, 1),
            "max_temp": round(max_temp, 1),
            "min_temp": round(min_temp, 1),
            "description": weather_desc,
            "icon": icon
        })

    today = formatted_forecast[0] if formatted_forecast else None

    # Add moon phase icon to extra_data
    if extra_data and "moon_phase" in extra_data:
        extra_data["moon_phase_icon"] = get_moon_phase_icon(extra_data["moon_phase"])

    response = {
        "city": city,
        "country": country,
        "coordinates": coord,
        "today": {
            **(today or {}),
            **(extra_data or {})
        },
        "forecast": formatted_forecast
    }

    return response