import * as React from "react";
import "./style.scss"

interface Item {
  status: 'High' | 'Low' | 'none';
  value: string;
}


interface ExceptionsCardProps {
  title: string
  list: Item[]
}

const ExceptionsCard: React.FC<ExceptionsCardProps> = ({ title, list }) => {
  return (
    <div className="exception-card">
      <div className="title-exception-card">{title}</div>
      <div className="item-list">
        {list.map((item, index) => (
          <div key={index} className={`item-status-${item.status.toLocaleLowerCase()}`}>
            <span className="status">{item.status}</span> {item.value}
          </div>
        ))}
      </div>
    </div>
  )
}
export default ExceptionsCard