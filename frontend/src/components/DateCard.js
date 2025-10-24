import React from 'react';
import { MapPin } from 'lucide-react';
import styles from '../styles/styles';

const DateCard = ({ weatherData }) => {
  return (
    <div style={{ ...styles.card, ...styles.tallCard }} className="p-4">
      <h2 style={styles.heading}>Today</h2>
      <div style={styles.dateText}>{weatherData.today.formatted_date}</div>
      <div style={styles.dayText}>{weatherData.today.day}</div>
      <div style={styles.locationText} className="mt-3">
        <MapPin size={18} style={{ marginRight: '8px', flexShrink: 0 }} />
        {weatherData.city}, {weatherData.country}
      </div>
    </div>
  );
};

export default DateCard;