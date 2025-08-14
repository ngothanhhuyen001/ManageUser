
import * as React from "react";
import './style.scss'

interface ActionItem {
  label: string;
  onClick?: () => void;
}

interface RecommendedCardProps {
  title: string;
  content: string; 
  actions: ActionItem[];
  colorBorder: string;
  colorBackground: string;
}


const RecommendedCard: React.FC<RecommendedCardProps> = ({ title, content, actions, colorBorder, colorBackground }) => {
  return (
    <div className="recommended-card" style={{ borderLeftColor: colorBorder, background: colorBackground }}>
      <div className="title-card">
        {title}
      </div>

      <div className="content-card">
        {content}
      </div>

      <div className="action-card">
        {actions.map((act, index) => (
          <a
            key={index}
            onClick={act.onClick}
          >
            {act.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default RecommendedCard