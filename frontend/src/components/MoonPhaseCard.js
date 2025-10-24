import React from 'react';
import { Moon } from 'lucide-react';
import styles from '../styles/styles';

const MoonPhaseCard = ({ moonPhase }) => {
  return (
    <div style={{ ...styles.card, ...styles.tallCard }} className="p-4 d-flex flex-column align-items-center justify-content-center">
      <div style={styles.heading}>Moon Phase</div>
      <Moon size={100} style={{ color: '#fbbf24', margin: '20px 0' }} />
      <div style={styles.moonPhase}>{moonPhase}</div>
    </div>
  );
};

export default MoonPhaseCard;