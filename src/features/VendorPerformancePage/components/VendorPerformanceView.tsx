import { Col, Row, Table, Tag, type TableProps } from "antd"
import CardBase from "../../../components/Card/BasicCard"
import PerformanceCard from "../../../components/Card/PerformanceCard"
import type { vendor } from "../../../types/vendor.type"
import { dataVendor } from "../../../utility/dataTableVendor"
import '../style.scss'
import { RiseOutlined } from "@ant-design/icons"

type Props =
  {
    setDetailView: () => void
  }

const VendorPerformancePage: React.FC<Props> = ({ setDetailView }) => {


  const colums: TableProps<vendor>['columns'] = [
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
      render: (value) => {
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
      render: (note) => note || '-'
    },
    {
      title: 'Action',
      dataIndex: '',
      key: '8',
      width: '12%',
      render: () => <a onClick={setDetailView}>View Detail</a>,
    },
  ]

  return <div className="vendor-performannce-container">
    <div>
      <h2>Vendor Performance Dashboard</h2>
      <Row gutter={[32, 32]}>
        <Col span={8} >
          <CardBase label={"Total Vendors"} content="250" color="#0958d9" />
        </Col>
        <Col span={8} >
          <CardBase label={"High-Risk Vendors"} content="12" color="#ff4d4f" />
        </Col>
        <Col span={8} >
          <CardBase label={"Quarterly Rish Trend"} content="8%" color="#4096ff" />
        </Col>
      </Row>
    </div>
    <div>
      <h2>
        Vendor Performance Matrix
      </h2>
      <Row gutter={[32, 32]}>
        <Col span={6}>
          <PerformanceCard title="URGENT INTERVENTION" value="2" nameVendor="ALPHA CORP BETA INC" color="#f5222d"></PerformanceCard>
        </Col>
        <Col span={6}>
          <PerformanceCard title="POTENTIAL RISK" value="2" nameVendor="TECH SOLUTIONS" color="#ffec3d"></PerformanceCard>
        </Col>
        <Col span={6}>
          <PerformanceCard title="NEEDS IMPROVEMENT" value="2" nameVendor="GLOBAL SUPPLIES" color="#fa8c16"></PerformanceCard>
        </Col>
        <Col span={6}>
          <PerformanceCard title="RELIABLE" value="2" nameVendor="ACME INC FASTENERS CO" color="#7cb305"></PerformanceCard>
        </Col>
      </Row>
    </div>
    <div>
      <h2>Top 5 Vendors with Increasing Risk</h2>
      <Table<vendor>
        className="custom-table"
        dataSource={dataVendor}
        columns={colums}
        pagination={false}
        scroll={{ x: 'max-content', y: 65 * 5 }} />
    </div>
  </div>
}
export default VendorPerformancePage