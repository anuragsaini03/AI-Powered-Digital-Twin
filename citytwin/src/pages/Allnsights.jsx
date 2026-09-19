import {
  Brain,
  TrendingUp,
  Droplets,
  Wrench,
  ArrowRight,
} from "lucide-react";

const insights = [
  {
    icon: <TrendingUp size={22} />,
    title: "Traffic may increase",
    area: "Main Road",
    description:
      "The system expects higher traffic during the next hour.",
    level: "Medium",
    action: "View area",
  },
  {
    icon: <Droplets size={22} />,
    title: "Water pressure issue",
    area: "Ward 12",
    description:
      "A possible water pressure problem has been detected.",
    level: "High",
    action: "Check location",
  },
  {
    icon: <Wrench size={22} />,
    title: "Infrastructure stable",
    area: "Ward 8",
    description:
      "No major infrastructure problems were detected.",
    level: "Low",
    action: "View details",
  },
];

export default function AIInsights() {
  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>AI Insights</h1>
          <p>
            Simple predictions and observations from the system.
          </p>
        </div>

        <div className="ai-status">
          <span></span>
          AI System Active
        </div>
      </div>

      <div className="ai-intro">
        <div className="ai-intro-icon">
          <Brain size={25} />
        </div>

        <div>
          <h2>What is AI finding?</h2>
          <p>
            The system looks at community data and highlights
            possible problems that may need attention.
          </p>
        </div>
      </div>

      <div className="insights-grid">
        {insights.map((item, index) => (
          <div className="insight-card" key={index}>
            <div className="insight-top">
              <div className="insight-icon">
                {item.icon}
              </div>

              <span
                className={`risk-badge ${item.level.toLowerCase()}`}
              >
                {item.level} risk
              </span>
            </div>

            <h2>{item.title}</h2>

            <span className="insight-area">
              {item.area}
            </span>

            <p>{item.description}</p>

            <button className="text-button">
              {item.action}
              <ArrowRight size={15} />
            </button>
          </div>
        ))}
      </div>

      <div className="content-card">
        <div className="card-heading">
          <div>
            <h2>Prediction Summary</h2>
            <p>Current AI observations</p>
          </div>
        </div>

        <div className="prediction-table">
          <div className="prediction-header">
            <span>Area</span>
            <span>Category</span>
            <span>Risk</span>
            <span>Confidence</span>
          </div>

          <div className="prediction-row">
            <span>Main Road</span>
            <span>Traffic</span>
            <span>Medium</span>
            <span>84%</span>
          </div>

          <div className="prediction-row">
            <span>Ward 12</span>
            <span>Water</span>
            <span>High</span>
            <span>78%</span>
          </div>

          <div className="prediction-row">
            <span>Park Street</span>
            <span>Infrastructure</span>
            <span>Low</span>
            <span>91%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
