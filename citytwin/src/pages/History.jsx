import {
  TrendingDown,
  FileCheck,
  AlertCircle,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", issues: 24 },
  { month: "Feb", issues: 21 },
  { month: "Mar", issues: 18 },
  { month: "Apr", issues: 16 },
  { month: "May", issues: 14 },
  { month: "Jun", issues: 11 },
  { month: "Jul", issues: 9 },
];

export default function History() {
  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>History</h1>
          <p>
            Track how the community has changed over time.
          </p>
        </div>
      </div>

      <div className="stats-grid three">
        <div className="stat-card">
          <div className="stat-top">
            <span>Total Issues</span>
            <div className="stat-icon info">
              <AlertCircle size={19} />
            </div>
          </div>

          <div className="stat-value">113</div>

          <div className="stat-status success">
            <TrendingDown size={14} />
            Decreasing
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span>Resolved</span>
            <div className="stat-icon success">
              <FileCheck size={19} />
            </div>
          </div>

          <div className="stat-value">87</div>

          <div className="stat-status success">
            77% resolved
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span>Avg. Response</span>
            <div className="stat-icon warning">
              <TrendingDown size={19} />
            </div>
          </div>

          <div className="stat-value">2.4h</div>

          <div className="stat-status success">
            Improving
          </div>
        </div>
      </div>

      <section className="content-card history-chart">
        <div className="card-heading">
          <div>
            <h2>Community Issues</h2>
            <p>Number of reported issues each month</p>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="issues"
              stroke="#3157d5"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>

      <section className="content-card">
        <div className="card-heading">
          <div>
            <h2>Recent Activity</h2>
            <p>Latest changes in the system</p>
          </div>
        </div>

        <div className="activity-list">
          <div>
            <span className="activity-dot"></span>
            <div>
              <strong>Water issue resolved</strong>
              <p>Ward 12</p>
            </div>
            <small>Today</small>
          </div>

          <div>
            <span className="activity-dot"></span>
            <div>
              <strong>New road report</strong>
              <p>Main Road</p>
            </div>
            <small>Yesterday</small>
          </div>

          <div>
            <span className="activity-dot"></span>
            <div>
              <strong>Simulation completed</strong>
              <p>Road expansion scenario</p>
            </div>
            <small>2 days ago</small>
          </div>
        </div>
      </section>
    </div>
  );
}
