import { useState } from "react";
import {
  Plus,
  MapPin,
  Clock,
  X,
} from "lucide-react";

const initialReports = [
  {
    id: 1,
    title: "Pothole on Main Road",
    type: "Road",
    location: "Main Road, Ward 12",
    status: "Under Review",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Water Leakage",
    type: "Water",
    location: "Sector 4, Ward 12",
    status: "Assigned",
    time: "Yesterday",
  },
  {
    id: 3,
    title: "Broken Street Light",
    type: "Infrastructure",
    location: "Park Street",
    status: "Resolved",
    time: "2 days ago",
  },
];

export default function Reports() {
  const [reports, setReports] = useState(initialReports);
  const [showModal, setShowModal] = useState(false);

  const addReport = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);

    const newReport = {
      id: Date.now(),
      title: form.get("title"),
      type: form.get("type"),
      location: form.get("location"),
      status: "Under Review",
      time: "Just now",
    };

    setReports([newReport, ...reports]);
    setShowModal(false);
  };

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Citizen Reports</h1>
          <p>
            Issues reported by people in the community.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowModal(true)}
        >
          <Plus size={17} />
          New Report
        </button>
      </div>

      <div className="report-summary">
        <div>
          <span>Total Reports</span>
          <strong>{reports.length}</strong>
        </div>

        <div>
          <span>Under Review</span>
          <strong>
            {reports.filter(
              (r) => r.status === "Under Review"
            ).length}
          </strong>
        </div>

        <div>
          <span>Resolved</span>
          <strong>
            {reports.filter(
              (r) => r.status === "Resolved"
            ).length}
          </strong>
        </div>
      </div>

      <div className="reports-list">
        {reports.map((report) => (
          <div className="report-card" key={report.id}>
            <div className="report-type-icon">
              {report.type === "Road"
                ? "🕳️"
                : report.type === "Water"
                ? "💧"
                : "💡"}
            </div>

            <div className="report-main">
              <div className="report-title-row">
                <h3>{report.title}</h3>

                <span
                  className={`status-badge ${report.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {report.status}
                </span>
              </div>

              <div className="report-meta">
                <span>
                  <MapPin size={14} />
                  {report.location}
                </span>

                <span>
                  <Clock size={14} />
                  {report.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <div>
                <h2>Report an Issue</h2>
                <p>Add a new community issue.</p>
              </div>

              <button
                className="close-button"
                onClick={() => setShowModal(false)}
              >
                <X size={19} />
              </button>
            </div>

            <form onSubmit={addReport}>
              <label>
                Issue title
                <input
                  name="title"
                  placeholder="Example: Pothole near school"
                  required
                />
              </label>

              <label>
                Issue type
                <select name="type">
                  <option>Road</option>
                  <option>Water</option>
                  <option>Infrastructure</option>
                </select>
              </label>

              <label>
                Location
                <input
                  name="location"
                  placeholder="Enter location"
                  required
                />
              </label>

              <label>
                Description
                <textarea
                  placeholder="Describe the problem..."
                  rows="4"
                ></textarea>
              </label>

              <button className="primary-button full-width">
                Submit Report
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
