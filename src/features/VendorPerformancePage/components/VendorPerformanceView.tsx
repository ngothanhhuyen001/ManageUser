import { Col, Row, Table } from "antd"
import type { Vendor } from "../../../share/types/vendor.type"
import '../style.scss'
import { BasicCard, PerformanceCard } from "../../../share/components"
import { columsVendor, dataVendor } from "../utils"

type Props = { setDetailView: () => void }

const VendorPerformancePage: React.FC<Props> = ({ setDetailView }) => {

  return <div className="vendor-performannce-container">
    <div>
      <h2>Vendor Performance Dashboard</h2>
      <Row gutter={[32, 32]}>
        <Col span={8} >
          <BasicCard label={"Total Vendors"} content="250" color="#0958d9" />
        </Col>
        <Col span={8} >
          <BasicCard label={"High-Risk Vendors"} content="12" color="#ff4d4f" />
        </Col>
        <Col span={8} >
          <BasicCard label={"Quarterly Rish Trend"} content="8%" color="#4096ff" />
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
      <Table<Vendor>
        className="custom-table"
        dataSource={dataVendor}
        columns={columsVendor({ setDetailView })}
        pagination={false}
        scroll={{ x: 'max-content', y: 65 * 5 }} />
    </div>
  </div>
}
export default VendorPerformancePage