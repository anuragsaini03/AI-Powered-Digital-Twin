export default function StatCard({
  title,
  value,
  status,
  icon,
  type = "normal",
}) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <span>{title}</span>

        <div className={`stat-icon ${type}`}>
          {icon}
        </div>
      </div>

      <div className="stat-value">{value}</div>

      {status && (
        <div className={`stat-status ${type}`}>
          <span className="status-dot"></span>
          {status}
        </div>
      )}
    </div>
  );
}
