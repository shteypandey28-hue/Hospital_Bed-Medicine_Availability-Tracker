import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import HospitalList from './components/HospitalList';
import MedicineList from './components/MedicineList';
import AlertPanel from './components/AlertPanel';
import TrendingChart from './components/TrendingChart';
import SearchBar from './components/SearchBar';

const API_BASE_URL = 'http://localhost:5001/api';

function App() {
  const [hospitals, setHospitals] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [stats, setStats] = useState(null);
  const [trendingData, setTrendingData] = useState(null);
  const [selectedCity, setSelectedCity] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllData();
    const interval = setInterval(fetchAllData, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, [selectedCity]);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const [hospitalsRes, medicinesRes, alertsRes, statsRes, trendingRes] = await Promise.all([
        fetch(`${API_BASE_URL}/hospitals${selectedCity !== 'all' ? `?city=${selectedCity}` : ''}`),
        fetch(`${API_BASE_URL}/medicines${selectedCity !== 'all' ? `?city=${selectedCity}` : ''}`),
        fetch(`${API_BASE_URL}/alerts`),
        fetch(`${API_BASE_URL}/stats`),
        fetch(`${API_BASE_URL}/trending`)
      ]);

      setHospitals(await hospitalsRes.json());
      setMedicines(await medicinesRes.json());
      setAlerts(await alertsRes.json());
      setStats(await statsRes.json());
      setTrendingData(await trendingRes.json());
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    if (!query) {
      fetchAllData();
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/search?q=${query}`);
      const data = await response.json();
      setHospitals(data.hospitals);
      setMedicines(data.medicines);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const cities = ['all', 'Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Chennai', 'Hyderabad'];

  return (
    <div className="App">
      <Header />
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        
        <div className="city-filter">
          <label>Filter by City:</label>
          <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
            {cities.map(city => (
              <option key={city} value={city}>
                {city === 'all' ? 'All Cities' : city}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            <AlertPanel alerts={alerts} />
            <Dashboard stats={stats} />
            <TrendingChart data={trendingData} />
            <HospitalList hospitals={hospitals} />
            <MedicineList medicines={medicines} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;

