import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div className="mobile-brand">
        <strong>CityTwin</strong>
      </div>

      <div className="search-box">
        <Search size={18} />
        <input placeholder="Search community..." />
      </div>

      <div className="header-right">
        <button className="icon-button">
          <Bell size={19} />
          <span className="notification-dot"></span>
        </button>

        <div className="header-user">
          <div className="avatar">AS</div>

          <div className="header-user-info">
            <strong>Anurag</strong>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
}
