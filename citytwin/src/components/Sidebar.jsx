import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Map,
  FileText,
  Brain,
  RefreshCcw,
  BarChart3,
  Settings,
  Building2,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Digital Map",
    path: "/map",
    icon: Map,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: FileText,
  },
  {
    name: "AI Insights",
    path: "/ai-insights",
    icon: Brain,
  },
  {
    name: "Simulation",
    path: "/simulation",
    icon: RefreshCcw,
  },
  {
    name: "History",
    path: "/history",
    icon: BarChart3,
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">
          <Building2 size={21} />
        </div>

        <div>
          <h2>CityTwin</h2>
          <span>Community Platform</span>
        </div>
      </div>

      <div className="menu-label">MAIN MENU</div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `menu-item ${isActive ? "active" : ""}`
              }
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
        >
          <Settings size={19} />
          <span>Settings</span>
        </NavLink>

        <div className="sidebar-profile">
          <div className="avatar">AS</div>

          <div>
            <strong>Admin</strong>
            <small>Municipal Officer</small>
          </div>
        </div>
      </div>
    </aside>
  );
}
