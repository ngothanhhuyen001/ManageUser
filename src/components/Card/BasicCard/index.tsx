import * as React from "react";
import "./style.scss"

interface CardProps {
  label: string
  content: string
  color?: string
}

const CardBase: React.FC<CardProps> = ({ label, content, color }) => {
  return (
    <div className="card-wrapper">
      <div className="label-card">{label}</div>
      <div className="content-card" style={{ color: color || "" }}>
        {content}
      </div>
    </div>
  )
}
export default CardBase