import React from 'react';
import './MedicineList.css';

const MedicineList = ({ medicines }) => {
  if (!medicines || medicines.length === 0) {
    return (
      <div className="section">
        <h2 className="section-title">💊 Medicines</h2>
        <p className="no-data">No medicines found</p>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'critical':
        return '#e57373';
      case 'low':
        return '#ffb74d';
      default:
        return '#81c784';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'critical':
        return '🔴';
      case 'low':
        return '🟡';
      default:
        return '🟢';
    }
  };

  return (
    <div className="section">
      <h2 className="section-title">💊 Medicines ({medicines.length})</h2>
      <div className="medicines-grid">
        {medicines.map((medicine) => {
          const stockPercentage = (medicine.stock / medicine.required) * 100;
          const statusColor = getStatusColor(medicine.status);

          return (
            <div key={medicine.id} className="medicine-card">
              <div className="medicine-header">
                <h3>{medicine.name}</h3>
                <span className={`status-badge ${medicine.status}`}>
                  {getStatusIcon(medicine.status)} {medicine.status.toUpperCase()}
                </span>
              </div>
              
              <div className="medicine-details">
                <div className="detail-item">
                  <span className="detail-label">Current Stock</span>
                  <div className="detail-value">
                    <span style={{ color: statusColor }}>
                      {medicine.stock}
                    </span>
                    <span className="detail-total">units</span>
                  </div>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Required Stock</span>
                  <div className="detail-value">
                    <span style={{ color: '#b0bec5' }}>
                      {medicine.required}
                    </span>
                    <span className="detail-total">units</span>
                  </div>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Stock Level</span>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: `${Math.min(stockPercentage, 100)}%`,
                        backgroundColor: statusColor
                      }}
                    />
                  </div>
                  <span className="stock-percentage" style={{ color: statusColor }}>
                    {stockPercentage.toFixed(1)}%
                  </span>
                </div>

                <div className="city-info">
                  <span className="city-label">📍 {medicine.city}</span>
                  {medicine.source === 'OpenFDA' && (
                    <span className="fda-badge" title="Data from OpenFDA Drug API">
                      🔗 OpenFDA
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MedicineList;

