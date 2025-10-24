import React from 'react';
import { MapPin } from 'lucide-react';
import styles from '../styles/styles';

const LocationCard = ({ city, country }) => {
  return (
    <div style={styles.locationButton} className="p-2">
      <MapPin size={20} style={{ color: '#60a5fa', marginRight: '8px' }} />
      <span style={styles.locationButtonText}>
        {city && country ? `${city}, ${country}` : 'Set Location'}
      </span>
    </div>
  );
};

export default LocationCard;