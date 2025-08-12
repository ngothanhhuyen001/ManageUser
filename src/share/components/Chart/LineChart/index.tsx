import * as React from "react";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import '../style.scss'

const data = [
  { name: 'Jan', uv: 2500, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 1398, pv: 2400, amt: 2400 },
  { name: 'Mar', uv: 10000, pv: 2400, amt: 2400 },
  { name: 'Apr', uv: 3908, pv: 2400, amt: 2400 },
  { name: 'May', uv: 4800, pv: 2400, amt: 2400 },
  { name: 'Jun', uv: 3800, pv: 2400, amt: 2400 },
  { name: 'Jul', uv: 4300, pv: 2400, amt: 2400 },
  { name: 'Aug', uv: 2400, pv: 2400, amt: 2400 },
  { name: 'Sep', uv: 1398, pv: 2400, amt: 2400 },
  { name: 'Oct', uv: 9800, pv: 2400, amt: 2400 },
  { name: 'Nov', uv: 3908, pv: 2400, amt: 2400 },
  { name: 'Dec', uv: 4800, pv: 2400, amt: 2400 },
];

interface LineChartProps {
  title: string
  color: string
}

const CustomLineChart: React.FC<LineChartProps> = ({ title, color }) => {

  return (
    <div className="custom-chart">
      <div>{title}</div>
      <LineChart width={800} height={300} data={data}>
        <CartesianGrid stroke="#aaa" strokeDasharray="3 3" />
        <Line type="monotone" dataKey="uv" stroke={color} strokeWidth={2} name="profit" />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Legend align="center" />
        <Tooltip />
      </LineChart>
    </div>

  )
}
export default CustomLineChart