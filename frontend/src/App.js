import React, { useState } from 'react';
import { Cloud } from 'lucide-react';
import LocationCard from './components/LocationCard';
import SearchBar from './components/SearchBar';
import DateCard from './components/DateCard';
import MoonPhaseCard from './components/MoonPhaseCard';
import WeatherCard from './components/WeatherCard';
import StatsCard from './components/StatsCard';
import ForecastChart from './components/ForecastChart';
import { fetchWeatherData } from './services/weatherService';
import styles from './styles/styles';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!city.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      
      <div className="container-fluid py-3" style={{ maxWidth: '1400px'}}>
        {/* Header: Location + Title + Search */}
        <div className="row mb-3 align-items-center">
          <div className="col-3">
            <LocationCard 
              city={weatherData?.city}
              country={weatherData?.country}
            />
          </div>
          <div className="col-6 text-center">
            <h1 style={styles.mainTitle}>Weather Forecast</h1>
          </div>
          <div className="col-3">
            <SearchBar 
              city={city}
              setCity={setCity}
              onSearch={handleSearch}
              loading={loading}
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="alert alert-danger mb-3 py-2" role="alert">
            {error}
          </div>
        )}

        {/* Weather Data */}
        {weatherData ? (
          <>
            {/* Row 2: Date, Moon, Weather, Stats */}
            <div className="row mb-3">
              <div className="col-md-3 mb-3">
                <DateCard weatherData={weatherData} />
              </div>
              <div className="col-md-3 mb-3">
                <MoonPhaseCard moonPhase={weatherData.today.moon_phase} />
              </div>
              <div className="col-md-3 mb-3">
                <WeatherCard today={weatherData.today} />
              </div>
              <div className="col-md-3 mb-3">
                <StatsCard stats={weatherData.today} />
              </div>
            </div>

            {/* Row 3: Forecast Chart */}
            <div className="row">
              <div className="col-12">
                <ForecastChart forecast={weatherData.forecast} />
              </div>
            </div>
          </>
        ) : (
          !loading && !error && (
            <div className="text-center py-5">
              <Cloud size={60} style={{ color: '#4b5563', marginBottom: '15px' }} />
              <h4 style={{ color: '#9ca3af' }}>Search for a city to view weather forecast</h4>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default App;