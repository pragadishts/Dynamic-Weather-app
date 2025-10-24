# main.py file
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.api.routes_weather import router as weather_router

app = FastAPI(title="Weather App Backend")

# Allow React frontend to access this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Backend running successfully!"}

@app.get("/config-test")
def get_config():
    return {
        "api_key_exists": bool(settings.openweather_api_key),
        "base_url": settings.openweather_base_url
    }

# Include weather router
app.include_router(weather_router, prefix="/api")
