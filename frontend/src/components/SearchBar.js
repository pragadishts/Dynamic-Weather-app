import React from 'react';
import { Search } from 'lucide-react';
import styles from '../styles/styles';

const SearchBar = ({ city, setCity, onSearch, loading }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div style={styles.searchBarContainer} className="d-flex">
      <input
        type="text"
        className="form-control form-control-sm"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
        style={styles.searchInput}
      />
      <button 
        className="btn btn-sm ms-2"
        style={styles.searchButton}
        onClick={onSearch}
        disabled={loading}
      >
        {loading ? '...' : <Search size={16} />}
      </button>
    </div>
  );
};

export default SearchBar;