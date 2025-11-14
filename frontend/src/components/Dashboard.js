import React from 'react';
import './Dashboard.css';

const Dashboard = ({ stats }) => {
  if (!stats) return null;

  const StatCard = ({ title, value, subtitle, color }) => (
    <div className="stat-card" style={{ borderTopColor: color }}>
      <h3>{title}</h3>
      <div className="stat-value" style={{ color }}>{value}</div>
      {subtitle && <p className="stat-subtitle">{subtitle}</p>}
    </div>
  );

  return (
    <div className="dashboard">
      <h2 className="section-title">📊 Dashboard Overview</h2>
      <div className="stats-grid">
        <StatCard
          title="Total Hospitals"
          value={stats.total_hospitals}
          color="#64b5f6"
        />
        <StatCard
          title="Available Beds"
          value={`${stats.available_beds} / ${stats.total_beds}`}
          subtitle={`${(100 - stats.bed_occupancy).toFixed(1)}% Available`}
          color="#81c784"
        />
        <StatCard
          title="Available ICU"
          value={`${stats.available_icu} / ${stats.total_icu}`}
          subtitle={`${(100 - stats.icu_occupancy).toFixed(1)}% Available`}
          color="#ffb74d"
        />
        <StatCard
          title="Critical Medicines"
          value={stats.critical_medicines}
          subtitle={`${stats.low_medicines} Low Stock${stats.fda_medicines ? ` • ${stats.fda_medicines} from OpenFDA` : ''}`}
          color="#e57373"
        />
      </div>
    </div>
  );
};

export default Dashboard;

