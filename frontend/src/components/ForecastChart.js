import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from '../styles/styles';
import { getWeatherIconUrl } from '../services/weatherService';

const ForecastChart = ({ forecast }) => {
  const chartData = forecast.map(day => ({
    name: day.day.substring(0, 3),
    temp: day.avg_temp,
    max: day.max_temp,
    min: day.min_temp
  }));

  return (
    <div style={styles.card} className="p-3">
      <h3 style={styles.heading}>5-Day Temperature Forecast</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9ca3af" style={{ fontSize: '12px' }} />
          <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1f2937', 
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#e5e7eb',
              fontSize: '12px'
            }}
          />
          <Bar dataKey="max" fill="#ef4444" name="Max" />
          <Bar dataKey="avg" fill="#60a5fa" name="Avg" />
          <Bar dataKey="min" fill="#3b82f6" name="Min" />
        </BarChart>
      </ResponsiveContainer>

      {/* Forecast Cards */}
      <div className="row mt-3 g-2">
        {forecast.map((day, index) => (
          <div key={day.date} className="col">
            <div style={styles.forecastCard} className="text-center p-2">
              <div style={styles.forecastDay}>
                {index === 0 ? 'Today' : day.day.substring(0, 3)}
              </div>
              <div style={styles.forecastDate}>{day.formatted_date}</div>
              <img 
                src={getWeatherIconUrl(day.icon)}
                alt={day.description}
                style={{ width: '50px', height: '50px' }}
              />
              <div style={styles.forecastTemp}>
                {Math.round(day.max_temp)}° / {Math.round(day.min_temp)}°
              </div>
              <div style={styles.forecastDesc}>{day.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastChart;