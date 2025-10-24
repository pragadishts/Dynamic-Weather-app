import React from 'react';
import { Droplets, Wind, Gauge, Eye } from 'lucide-react';
import styles from '../styles/styles';

const StatsCard = ({ stats }) => {
  const statItems = [
    { icon: Droplets, label: 'Humidity', value: `${stats.humidity}%` },
    { icon: Wind, label: 'Wind Speed', value: `${stats.wind_speed} m/s` },
    { icon: Gauge, label: 'Pressure', value: `${stats.pressure} hPa` },
    { icon: Eye, label: 'Visibility', value: `${stats.visibility} km` }
  ];

  return (
    <div style={{ ...styles.card, ...styles.tallCard }} className="p-4">
      <div style={styles.heading}>Statistics</div>
      
      {statItems.map((item, index) => (
        <div key={index} style={styles.statItem}>
          <div style={styles.statIcon}>
            <item.icon size={20} />
          </div>
          <div>
            <div style={styles.statLabel}>{item.label}</div>
            <div style={styles.statValue}>{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;