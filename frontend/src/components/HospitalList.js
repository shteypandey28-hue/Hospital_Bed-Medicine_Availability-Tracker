import React from 'react';
import './HospitalList.css';

const HospitalList = ({ hospitals }) => {
  if (!hospitals || hospitals.length === 0) {
    return (
      <div className="section">
        <h2 className="section-title">🏥 Hospitals</h2>
        <p className="no-data">No hospitals found</p>
      </div>
    );
  }

  const getAvailabilityColor = (available, total) => {
    const percentage = (available / total) * 100;
    if (percentage < 10) return '#e57373';
    if (percentage < 30) return '#ffb74d';
    return '#81c784';
  };

  return (
    <div className="section">
      <h2 className="section-title">🏥 Hospitals ({hospitals.length})</h2>
      <div className="hospitals-grid">
        {hospitals.map((hospital) => {
          const bedPercentage = (hospital.beds_available / hospital.beds_total) * 100;
          const icuPercentage = hospital.icu_total > 0 
            ? (hospital.icu_available / hospital.icu_total) * 100 
            : 0;

          return (
            <div key={hospital.id} className="hospital-card">
              <div className="hospital-header">
                <h3>{hospital.name}</h3>
                <span className="city-badge">{hospital.city}</span>
              </div>
              
              <div className="hospital-details">
                <div className="detail-item">
                  <span className="detail-label">Beds Available</span>
                  <div className="detail-value">
                    <span style={{ color: getAvailabilityColor(hospital.beds_available, hospital.beds_total) }}>
                      {hospital.beds_available}
                    </span>
                    <span className="detail-total">/ {hospital.beds_total}</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: `${bedPercentage}%`,
                        backgroundColor: getAvailabilityColor(hospital.beds_available, hospital.beds_total)
                      }}
                    />
                  </div>
                </div>

                <div className="detail-item">
                  <span className="detail-label">ICU Available</span>
                  <div className="detail-value">
                    <span style={{ color: getAvailabilityColor(hospital.icu_available, hospital.icu_total) }}>
                      {hospital.icu_available}
                    </span>
                    <span className="detail-total">/ {hospital.icu_total}</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: `${icuPercentage}%`,
                        backgroundColor: getAvailabilityColor(hospital.icu_available, hospital.icu_total)
                      }}
                    />
                  </div>
                </div>

                <div className="oxygen-status">
                  <span className="detail-label">Oxygen</span>
                  <span className={`oxygen-badge ${hospital.oxygen_available ? 'available' : 'unavailable'}`}>
                    {hospital.oxygen_available ? '✅ Available' : '❌ Unavailable'}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HospitalList;

