import {
  Car,
  Droplets,
  Wrench,
  FileWarning,
  ArrowRight,
  Activity,
} from "lucide-react";

import StatCard from "../components/StatCard";
import AlertCard from "../components/AlertCard";
import MapBox from "../components/MapBox";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const trafficData = [
  { day: "8 AM", value: 35 },
  { day: "10 AM", value: 42 },
  { day: "12 PM", value: 50 },
  { day: "2 PM", value: 47 },
  { day: "4 PM", value: 65 },
  { day: "6 PM", value: 78 },
  { day: "8 PM", value: 58 },
];

export default function Dashboard() {
  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Good evening 👋</h1>
          <p>
            Here's what's happening in your community today.
          </p>
        </div>

        <div className="date-badge">
          September 19, 2026
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Traffic"
          value="Normal"
          status="Running smoothly"
          type="success"
          icon={<Car size={19} />}
        />

        <StatCard
          title="Water"
          value="Warning"
          status="1 issue detected"
          type="warning"
          icon={<Droplets size={19} />}
        />

        <StatCard
          title="Infrastructure"
          value="Good"
          status="No major issues"
          type="success"
          icon={<Wrench size={19} />}
        />

        <StatCard
          title="Open Reports"
          value="8"
          status="3 new today"
          type="info"
          icon={<FileWarning size={19} />}
        />
      </div>

      <div className="dashboard-grid">
        <section className="content-card map-card">
          <div className="card-heading">
            <div>
              <h2>Community Map</h2>
              <p>Current view of your community</p>
            </div>

            <a href="/map">
              View full map <ArrowRight size={15} />
            </a>
          </div>

          <MapBox height="380px" />
        </section>

        <section className="content-card">
          <div className="card-heading">
            <div>
              <h2>Recent Alerts</h2>
              <p>Things that need attention</p>
            </div>

            <a href="/ai-insights">
              View all <ArrowRight size={15} />
            </a>
          </div>

          <div className="alerts-list">
            <AlertCard
              type="warning"
              title="Water pressure is low"
              description="Possible issue detected in Ward 12."
              time="20 minutes ago"
            />

            <AlertCard
              type="warning"
              title="Traffic increasing"
              description="Main Road may become busy soon."
              time="45 minutes ago"
            />

            <AlertCard
              type="success"
              title="Infrastructure stable"
              description="No major issues detected."
              time="1 hour ago"
            />
          </div>
        </section>
      </div>

      <div className="dashboard-grid bottom-grid">
        <section className="content-card">
          <div className="card-heading">
            <div>
              <h2>Traffic Activity</h2>
              <p>Today's traffic level</p>
            </div>

            <Activity size={20} />
          </div>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={trafficData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis dataKey="day" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3157d5"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="content-card quick-actions">
          <div className="card-heading">
            <div>
              <h2>Quick Actions</h2>
              <p>Common tasks</p>
            </div>
          </div>

          <a href="/reports" className="quick-action">
            <div className="quick-icon">📋</div>
            <div>
              <strong>View Reports</strong>
              <span>Check citizen complaints</span>
            </div>
            <ArrowRight size={17} />
          </a>

          <a href="/simulation" className="quick-action">
            <div className="quick-icon">🔄</div>
            <div>
              <strong>Run Simulation</strong>
              <span>Test a possible change</span>
            </div>
            <ArrowRight size={17} />
          </a>

          <a href="/ai-insights" className="quick-action">
            <div className="quick-icon">🤖</div>
            <div>
              <strong>AI Insights</strong>
              <span>See predicted problems</span>
            </div>
            <ArrowRight size={17} />
          </a>
        </section>
      </div>
    </div>
  );
}