import React from "react";

function AIInsights() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>AI Insights</h1>
          <p>AI-generated insights from city data</p>
        </div>
      </div>

      <div className="insight-grid">

        <div className="insight-card">
          <h3>Traffic Condition</h3>
          <div className="score">78%</div>
          <p>Traffic flow is currently normal.</p>
        </div>

        <div className="insight-card">
          <h3>Road Condition</h3>
          <div className="score">82%</div>
          <p>Most monitored roads are in good condition.</p>
        </div>

        <div className="insight-card">
          <h3>Air Quality</h3>
          <div className="score">64%</div>
          <p>Air quality requires monitoring in some areas.</p>
        </div>

      </div>

      <div className="insight-section">
        <h2>AI Recommendations</h2>

        <div className="recommendation">
          <strong>Traffic</strong>
          <p>
            Consider monitoring high-traffic areas during peak hours.
          </p>
        </div>

        <div className="recommendation">
          <strong>Road Maintenance</strong>
          <p>
            Some roads may require inspection and maintenance.
          </p>
        </div>

        <div className="recommendation">
          <strong>City Planning</strong>
          <p>
            Historical data can help identify areas that need attention.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AIInsights;