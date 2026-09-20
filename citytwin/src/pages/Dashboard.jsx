import { useEffect, useState } from "react";

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
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/dashboard/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }

        return response.json();
      })
      .then((data) => {
        setDashboard(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Dashboard API error:", error);
        setError("Unable to load dashboard data.");
        setLoading(false);
      });
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="page-heading">
        <div>
          <h1>Loading dashboard...</h1>
          <p>Please wait while we get the latest city data.</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="page-heading">
        <div>
          <h1>Dashboard</h1>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* PAGE HEADER */}
      <div className="page-heading">
        <div>
          <h1>Good evening 👋</h1>

          <p>
            Here's what's happening in your community today.
          </p>
        </div>

        <div className="date-badge">
          September 20, 2026
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="stats-grid">

        {/* TRAFFIC */}
        <StatCard
          title="Traffic"
          value={dashboard?.traffic?.status || "Unknown"}
          status={
            dashboard?.traffic?.score
              ? `Traffic score: ${dashboard.traffic.score}`
              : "No data available"
          }
          type="success"
          icon={<Car size={19} />}
        />

        {/* AIR QUALITY */}
        <StatCard
          title="Air Quality"
          value={dashboard?.air_quality?.status || "Unknown"}
          status={
            dashboard?.air_quality?.score
              ? `Air quality score: ${dashboard.air_quality.score}`
              : "No data available"
          }
          type="warning"
          icon={<Droplets size={19} />}
        />

        {/* ROAD CONDITION */}
        <StatCard
          title="Road Condition"
          value={
            dashboard?.roads?.score
              ? `${dashboard.roads.score}%`
              : "Unknown"
          }
          status={
            dashboard?.roads?.total
              ? `${dashboard.roads.total} roads monitored`
              : "No data available"
          }
          type="success"
          icon={<Wrench size={19} />}
        />

        {/* OPEN ISSUES */}
        <StatCard
          title="Open Issues"
          value={dashboard?.issues?.total ?? 0}
          status="Issues detected"
          type="info"
          icon={<FileWarning size={19} />}
        />
      </div>

      {/* MAP + ALERTS */}
      <div className="dashboard-grid">

        {/* MAP */}
        <section className="content-card map-card">
          <div className="card-heading">

            <div>
              <h2>Community Map</h2>

              <p>
                Current view of your community
              </p>
            </div>

            <a href="/map">
              View full map <ArrowRight size={15} />
            </a>

          </div>

          <MapBox height="380px" />
        </section>

        {/* RECENT ALERTS */}
        <section className="content-card">

          <div className="card-heading">

            <div>
              <h2>Recent Alerts</h2>

              <p>
                Things that need attention
              </p>
            </div>

            <a href="/ai-insights">
              View all <ArrowRight size={15} />
            </a>

          </div>

          <div className="alerts-list">

            <AlertCard
              type="warning"
              title="Traffic monitoring"
              description={
                dashboard?.traffic?.status
                  ? `Traffic condition is currently ${dashboard.traffic.status.toLowerCase()}.`
                  : "Traffic information is unavailable."
              }
              time="Current"
            />

            <AlertCard
              type="warning"
              title="Air quality"
              description={
                dashboard?.air_quality?.status
                  ? `Air quality is currently ${dashboard.air_quality.status.toLowerCase()}.`
                  : "Air quality information is unavailable."
              }
              time="Current"
            />

            <AlertCard
              type="success"
              title="Road monitoring"
              description={
                dashboard?.roads?.total
                  ? `${dashboard.roads.total} roads are currently being monitored.`
                  : "Road monitoring information is unavailable."
              }
              time="Current"
            />

          </div>
        </section>
      </div>

      {/* TRAFFIC + QUICK ACTIONS */}
      <div className="dashboard-grid bottom-grid">

        {/* TRAFFIC CHART */}
        <section className="content-card">

          <div className="card-heading">

            <div>
              <h2>Traffic Activity</h2>

              <p>
                Today's traffic level
              </p>
            </div>

            <Activity size={20} />

          </div>

          <div className="chart-container">

            <ResponsiveContainer
              width="100%"
              height={250}
            >

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

        {/* QUICK ACTIONS */}
        <section className="content-card quick-actions">

          <div className="card-heading">

            <div>
              <h2>Quick Actions</h2>

              <p>
                Common tasks
              </p>
            </div>

          </div>

          <a
            href="/reports"
            className="quick-action"
          >

            <div className="quick-icon">
              📋
            </div>

            <div>
              <strong>
                View Reports
              </strong>

              <span>
                Check citizen complaints
              </span>
            </div>

            <ArrowRight size={17} />

          </a>

          <a
            href="/simulation"
            className="quick-action"
          >

            <div className="quick-icon">
              🔄
            </div>

            <div>
              <strong>
                Run Simulation
              </strong>

              <span>
                Test a possible change
              </span>
            </div>

            <ArrowRight size={17} />

          </a>

          <a
            href="/ai-insights"
            className="quick-action"
          >

            <div className="quick-icon">
              🤖
            </div>

            <div>
              <strong>
                AI Insights
              </strong>

              <span>
                See predicted problems
              </span>
            </div>

            <ArrowRight size={17} />

          </a>

        </section>

      </div>
    </div>
  );
}