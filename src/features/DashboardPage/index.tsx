import { Col, Row } from "antd"
import CardBase from "../../components/Card/BasicCard"
import DateRangePicker from "../../components/DateRangePicker"
import SelectBase from "../../components/Select"
import CardList from "../../components/Card/CardList"
import ExceptionsCard from "../../components/Card/ExceptionsCard"
import './style.scss'

const DashboardPage = () => {
  return <div className="dashboard-container">
    <div className="filter">
      <DateRangePicker className="date-range-picker"></DateRangePicker>
      <SelectBase className="select-buyer" title="Buyer"></SelectBase>
      <SelectBase className="select-vendor" title="Vendor"></SelectBase>
    </div>
    <div>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <CardBase label={"Total PO Processed"} content={"1"} color="#2f54eb"></CardBase>
        </Col>
        <Col span={6}>
          <CardBase label={"Unacknowledged POs"} content={"2"} color="#ffc53d"></CardBase>
        </Col>
        <Col span={6}>
          <CardBase label={"POs with Exception"} content={"3"} color="#ffec3d"></CardBase>
        </Col>
        <Col span={6}>
          <CardBase label={"Perfect Order Rate"} content={"4"} color="#a0d911"></CardBase>
        </Col>
      </Row>
    </div>
    <div>
      <h1>Exceptions Overview</h1>
      <Row gutter={[32, 32]}>
        <Col span={8}>
          <ExceptionsCard
            title={"Unacknowledgment"}
            list={[
              { status: "High", value: "1" },
              { status: "Low", value: "2" }
            ]} >
          </ExceptionsCard>
        </Col>
        <Col span={8}>
          <ExceptionsCard
            title={"Price Mismatch"}
            list={[
              { status: "High", value: "1" },
              { status: "Low", value: "2" }
            ]} >
          </ExceptionsCard>
        </Col>
        <Col span={8}>
          <ExceptionsCard
            title={"Backorder"}
            list={[
              { status: "High", value: "1" },
              { status: "Low", value: "2" }
            ]} >
          </ExceptionsCard>
        </Col>
        <Col span={8}>
          <ExceptionsCard
            title={"UOM Mismatch"}
            list={[
              { status: "High", value: "1" },
              { status: "Low", value: "2" }
            ]} >
          </ExceptionsCard>
        </Col>
        <Col span={8}>
          <ExceptionsCard
            title={"Vendor Catalog Number Mismatch"}
            list={[
              { status: "High", value: "1" },
              { status: "Low", value: "2" }
            ]} >
          </ExceptionsCard>
        </Col>
        <Col span={8}>
          <ExceptionsCard
            title={"Manufacturer Number Mismatch"}
            list={[
              { status: "High", value: "1" },
              { status: "Low", value: "2" }
            ]} >
          </ExceptionsCard>
        </Col>
      </Row>
    </div>
    <div>
      <h1>PO Status Distribution</h1>
      <CardList list={[
        { title: "Unconfirmed", value: "1" },
        { title: "Acknowledged", value: "1" },
        { title: "Exceptions", value: "1" },
        { title: "Parked", value: "1" },
        { title: "Cleared", value: "1" }
      ]}></CardList>
    </div>
  </div>
}
export default DashboardPage