import { useState } from "react";
import {
  Layers,
  Navigation,
  Info,
} from "lucide-react";

import MapBox from "../components/MapBox";

export default function DigitalMap() {
  const [layer, setLayer] = useState("normal");

  const information = {
    normal: {
      title: "Community Overview",
      traffic: "Normal",
      water: "Good",
      infrastructure: "Good",
    },
    traffic: {
      title: "Traffic View",
      traffic: "High",
      water: "Good",
      infrastructure: "Good",
    },
    water: {
      title: "Water View",
      traffic: "Normal",
      water: "Warning",
      infrastructure: "Good",
    },
    infrastructure: {
      title: "Infrastructure View",
      traffic: "Normal",
      water: "Good",
      infrastructure: "2 issues",
    },
  };

  const selected = information[layer];

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Digital Twin</h1>
          <p>
            Explore a simple digital view of your community.
          </p>
        </div>

        <button className="primary-button">
          <Navigation size={17} />
          My Location
        </button>
      </div>

      <div className="map-page-grid">
        <section className="content-card large-map-card">
          <div className="map-filters">
            <button
              className={layer === "normal" ? "selected" : ""}
              onClick={() => setLayer("normal")}
            >
              Overview
            </button>

            <button
              className={layer === "traffic" ? "selected" : ""}
              onClick={() => setLayer("traffic")}
            >
              Traffic
            </button>

            <button
              className={layer === "water" ? "selected" : ""}
              onClick={() => setLayer("water")}
            >
              Water
            </button>

            <button
              className={
                layer === "infrastructure" ? "selected" : ""
              }
              onClick={() => setLayer("infrastructure")}
            >
              Infrastructure
            </button>
          </div>

          <MapBox height="600px" />
        </section>

        <aside>
          <div className="content-card">
            <div className="card-heading">
              <div>
                <h2>{selected.title}</h2>
                <p>Ward 12</p>
              </div>

              <Info size={19} />
            </div>

            <div className="info-list">
              <div className="info-row">
                <span>Traffic</span>
                <strong>{selected.traffic}</strong>
              </div>

              <div className="info-row">
                <span>Water</span>
                <strong>{selected.water}</strong>
              </div>

              <div className="info-row">
                <span>Infrastructure</span>
                <strong>{selected.infrastructure}</strong>
              </div>
            </div>
          </div>

          <div className="content-card map-legend">
            <h2>Map Legend</h2>

            <div>
              <span className="legend-dot normal"></span>
              Normal
            </div>

            <div>
              <span className="legend-dot warning"></span>
              Needs Attention
            </div>

            <div>
              <span className="legend-dot danger"></span>
              High Risk
            </div>
          </div>

          <div className="content-card">
            <div className="small-card-title">
              <Layers size={18} />
              Data Layers
            </div>

            <label className="checkbox-row">
              <input type="checkbox" defaultChecked />
              Roads
            </label>

            <label className="checkbox-row">
              <input type="checkbox" defaultChecked />
              Buildings
            </label>

            <label className="checkbox-row">
              <input type="checkbox" />
              Water Network
            </label>

            <label className="checkbox-row">
              <input type="checkbox" />
              Citizen Reports
            </label>
          </div>
        </aside>
      </div>
    </div>
  );
}
