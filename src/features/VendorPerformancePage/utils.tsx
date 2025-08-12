import { Tag } from "antd";
import type { Vendor } from "../../share/types";
import { RiseOutlined } from "@ant-design/icons";

export const dataVendor: Vendor[] = [
  {
    key: "1",
    date: "2025-07-22",
    vendor: "	Alpha Corp",
    aiRiskScore: 8.2,
    dateTrend: 2.5,
    poweredAnalysis:
      "23% increase in late shipments. High potential for backorders on key items.",
    status: "Monitored",
    note: "",
  },
  {
    key: "2",
    date: "2025-07-23",
    vendor: "	Alpha Corp",
    aiRiskScore: 8.2,
    dateTrend: 2.5,
    poweredAnalysis:
      "23% increase in late shipments. High potential for backorders on key items.",
    status: "Monitored",
    note: "",
  },
  {
    key: "3",
    date: "2025-07-24",
    vendor: "	Alpha Corp",
    aiRiskScore: 8.2,
    dateTrend: 2.5,
    poweredAnalysis:
      "23% increase in late shipments. High potential for backorders on key items.",
    status: "Stable",
    note: "",
  },
  {
    key: "4",
    date: "2025-07-25",
    vendor: "	Alpha Corp",
    aiRiskScore: 8.2,
    dateTrend: 2.5,
    poweredAnalysis:
      "23% increase in late shipments. High potential for backorders on key items.",
    status: "Action Required",
    note: "",
  },
  {
    key: "5",
    date: "2025-07-26",
    vendor: "	Alpha Corp",
    aiRiskScore: 8.2,
    dateTrend: 2.5,
    poweredAnalysis:
      "23% increase in late shipments. High potential for backorders on key items.",
    status: "Monitored",
    note: "",
  },
];

export const columsVendor =(props: {setDetailView: () => void}) => [
    {
      title: 'Date',
      dataIndex: 'date',
      key: '1',
      width: '12%',
    },
    {
      title: 'Vendor',
      dataIndex: 'vendor',
      key: '2',
      width: '12%',
    },
    {
      title: 'AI Risk Score',
      dataIndex: 'aiRiskScore',
      key: '3',
      width: '12%',
    },
    {
      title: '90-Day Trend',
      dataIndex: 'dateTrend',
      key: '4',
      width: '12%',
      render: (value : number) => {
        return <span>
          <RiseOutlined style={{ color: 'red', fontSize: 16 }} />
          {value}
        </span>

      },
    },
    {
      title: 'AI-Powered Analysis',
      dataIndex: 'poweredAnalysis',
      key: '5',
      width: '12%',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: '6',
      width: '12%',
      render: (status: string | null) => {
        let color = '';
        if (status === 'Monitored') {
          color = 'yellow';
        } else if (status === 'Action Required') {
          color = 'red';
        } else if (status === 'Stable') {
          color = 'green';
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: '7',
      width: '12%',
      render: () => '-'
    },
    {
      title: 'Action',
      dataIndex: '',
      key: '8',
      width: '12%',
      render: () => <a onClick={props.setDetailView}>View Detail</a>,
    },
  ]
