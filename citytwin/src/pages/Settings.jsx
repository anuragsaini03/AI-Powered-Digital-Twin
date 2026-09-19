import { useState } from "react";

export default function Settings() {
  const [alerts, setAlerts] = useState(true);
  const [email, setEmail] = useState(false);

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Settings</h1>
          <p>Manage your CityTwin preferences.</p>
        </div>
      </div>

      <div className="settings-grid">
        <section className="content-card">
          <h2>Profile</h2>
          <p className="section-description">
            Basic account information.
          </p>

          <div className="form-group">
            <label>Name</label>
            <input defaultValue="Anurag Saini" />
          </div>

          <div className="form-group">
            <label>Role</label>
            <input
              defaultValue="Municipal Administrator"
              disabled
            />
          </div>

          <div className="form-group">
            <label>Community</label>
            <input defaultValue="Ward 12" />
          </div>

          <button className="primary-button">
            Save Changes
          </button>
        </section>

        <section className="content-card">
          <h2>Notifications</h2>
          <p className="section-description">
            Choose what notifications you want to receive.
          </p>

          <label className="setting-toggle">
            <div>
              <strong>AI Alerts</strong>
              <span>Receive important AI predictions.</span>
            </div>

            <input
              type="checkbox"
              checked={alerts}
              onChange={(e) => setAlerts(e.target.checked)}
            />
          </label>

          <label className="setting-toggle">
            <div>
              <strong>Email Updates</strong>
              <span>Receive weekly community reports.</span>
            </div>

            <input
              type="checkbox"
              checked={email}
              onChange={(e) => setEmail(e.target.checked)}
            />
          </label>
        </section>
      </div>
    </div>
  );
}
