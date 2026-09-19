import { useState } from "react";
import {
  RefreshCcw,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Simulation() {
  const [scenario, setScenario] = useState("New Road");
  const [location, setLocation] = useState("Main Road");
  const [capacity, setCapacity] = useState(30);
  const [result, setResult] = useState(null);

  const runSimulation = () => {
    const congestion = Math.max(
      20,
      82 - Math.round(capacity * 1.03)
    );

    const travelTime = Math.max(
      12,
      32 - Math.round(capacity * 0.35)
    );

    setResult({
      congestion,
      travelTime,
    });
  };

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>What-If Simulation</h1>
          <p>
            Test a possible change before applying it in the real
            community.
          </p>
        </div>
      </div>

      <div className="simulation-grid">
        <section className="content-card">
          <div className="card-heading">
            <div>
              <h2>Create Scenario</h2>
              <p>Choose what you want to change.</p>
            </div>

            <RefreshCcw size={19} />
          </div>

          <div className="form-group">
            <label>Scenario</label>

            <select
              value={scenario}
              onChange={(e) => setScenario(e.target.value)}
            >
              <option>New Road</option>
              <option>Traffic Diversion</option>
              <option>Road Expansion</option>
              <option>Drainage Improvement</option>
            </select>
          </div>

          <div className="form-group">
            <label>Location</label>

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option>Main Road</option>
              <option>Ward 12</option>
              <option>Sector 4</option>
              <option>Park Street</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              Traffic Capacity
              <strong>{capacity}%</strong>
            </label>

            <input
              type="range"
              min="0"
              max="60"
              value={capacity}
              onChange={(e) =>
                setCapacity(Number(e.target.value))
              }
            />
          </div>

          <button
            className="primary-button full-width"
            onClick={runSimulation}
          >
            <RefreshCcw size={17} />
            Run Simulation
          </button>
        </section>

        <section className="content-card">
          <div className="card-heading">
            <div>
              <h2>Simulation Result</h2>
              <p>
                {result
                  ? `Scenario: ${scenario}`
                  : "Run a simulation to see the result."}
              </p>
            </div>
          </div>

          {!result ? (
            <div className="empty-simulation">
              <div className="empty-icon">🔄</div>
              <h3>No simulation yet</h3>
              <p>
                Choose a scenario and click "Run Simulation".
              </p>
            </div>
          ) : (
            <div>
              <div className="simulation-result">
                <div className="result-column">
                  <span>Current</span>
                  <strong>82%</strong>
                  <small>Congestion</small>
                </div>

                <ArrowRight className="result-arrow" />

                <div className="result-column after">
                  <span>Simulated</span>
                  <strong>{result.congestion}%</strong>
                  <small>Congestion</small>
                </div>
              </div>

              <div className="result-details">
                <div>
                  <span>Current travel time</span>
                  <strong>32 min</strong>
                </div>

                <div>
                  <span>Estimated travel time</span>
                  <strong>{result.travelTime} min</strong>
                </div>

                <div>
                  <span>Capacity added</span>
                  <strong>+{capacity}%</strong>
                </div>
              </div>

              <div className="recommendation">
                <CheckCircle size={19} />

                <div>
                  <strong>Simulation suggests improvement</strong>
                  <p>
                    This scenario may reduce traffic congestion
                    in the selected area.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
