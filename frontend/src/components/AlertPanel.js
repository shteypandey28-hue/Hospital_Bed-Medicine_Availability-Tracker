import React from 'react';
import './AlertPanel.css';

const AlertPanel = ({ alerts }) => {
  if (!alerts || alerts.length === 0) {
    return (
      <div className="alert-panel no-alerts">
        <div className="alert-icon">✅</div>
        <p>No critical alerts at this time</p>
      </div>
    );
  }

  return (
    <div className="alert-panel">
      <h2 className="alert-header">
        <span className="alert-icon-badge">🚨</span>
        Critical Alerts ({alerts.length})
      </h2>
      <div className="alerts-list">
        {alerts.map((alert, index) => (
          <div key={index} className="alert-item critical">
            <div className="alert-content">
              <div className="alert-type">{alert.type.replace('_', ' ').toUpperCase()}</div>
              <div className="alert-message">{alert.message}</div>
              {alert.available !== undefined && (
                <div className="alert-details">
                  Available: {alert.available} / {alert.total}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertPanel;

