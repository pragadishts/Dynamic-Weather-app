const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0f172a',
    color: '#e5e7eb',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    overflow: 'hidden'
  },
  mainTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#e5e7eb',
    margin: 0
  },
  locationButton: {
    backgroundColor: '#1e293b',
    borderRadius: '10px',
    border: '1px solid #334155',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  locationButtonText: {
    fontSize: '14px',
    color: '#e5e7eb',
    fontWeight: '500'
  },
  searchBarContainer: {
    alignItems: 'center'
  },
  searchInput: {
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    color: '#e5e7eb',
    fontSize: '14px',
    padding: '6px 12px'
  },
  searchButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    minWidth: '40px'
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    border: '1px solid #334155',
    height: '100%'
  },
  tallCard: {
    minHeight: '240px'
  },
  heading: {
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '12px',
    color: '#e5e7eb',
    textAlign: 'left'
  },
  text: {
    fontSize: '13px',
    color: '#9ca3af',
    marginTop: '6px'
  },
  dateText: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#60a5fa',
    marginTop: '15px',
    textAlign: 'left'
  },
  dayText: {
    fontSize: '22px',
    fontWeight: '500',
    color: '#e5e7eb',
    marginTop: '8px',
    textAlign: 'left'
  },
  locationText: {
    fontSize: '14px',
    color: '#9ca3af',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left'
  },
  label: {
    fontSize: '14px',
    color: '#9ca3af',
    marginBottom: '10px',
    textAlign: 'center'
  },
  moonPhase: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#e5e7eb',
    textAlign: 'center'
  },
  tempLarge: {
    fontSize: '48px',
    fontWeight: '700',
    color: '#e5e7eb',
    textAlign: 'center'
  },
  weatherDesc: {
    fontSize: '18px',
    fontWeight: '500',
    color: '#e5e7eb',
    textTransform: 'capitalize',
    marginTop: '8px',
    textAlign: 'center'
  },
  tempRange: {
    fontSize: '15px',
    color: '#9ca3af',
    marginTop: '8px',
    textAlign: 'center'
  },
  feelsLike: {
    fontSize: '14px',
    color: '#9ca3af',
    marginTop: '4px',
    textAlign: 'center'
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    gap: '10px'
  },
  statIcon: {
    width: '35px',
    height: '35px',
    backgroundColor: '#0f172a',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#60a5fa'
  },
  statLabel: {
    fontSize: '11px',
    color: '#9ca3af'
  },
  statValue: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#e5e7eb'
  },
  forecastCard: {
    backgroundColor: '#0f172a',
    borderRadius: '10px',
    border: '1px solid #334155'
  },
  forecastDay: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#e5e7eb'
  },
  forecastDate: {
    fontSize: '11px',
    color: '#9ca3af',
    marginBottom: '6px'
  },
  forecastTemp: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#e5e7eb',
    marginTop: '6px'
  },
  forecastDesc: {
    fontSize: '11px',
    color: '#9ca3af',
    marginTop: '3px',
    textTransform: 'capitalize'
  }
};

export default styles;