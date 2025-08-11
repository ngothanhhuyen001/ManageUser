import { InfoCircleOutlined } from "@ant-design/icons";
import * as React from "react";
import './style.scss'

interface PerformanceCardProps {
  title: string;
  value: string;
  nameVendor: string;
  color: string;
}

const PerformanceCard: React.FC<PerformanceCardProps> = ({ title, value, nameVendor, color }) => {
  return <div className="performance-card" style={{ borderTopColor: color }}>
    <div className="title-card">
      {title.toUpperCase()}
      <span>
        <InfoCircleOutlined className="icon-card" style={{ color: color }} />
      </span>
    </div>
    <div className="value-card">{value}</div>
    <div className="name-vendor">{nameVendor}</div>
  </div>
}
export default PerformanceCard