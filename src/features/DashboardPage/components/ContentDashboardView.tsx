import '../style.scss'
import { BasicCard, CardList, DateRangePicker, ExceptionsCard, SelectBase } from "../../../share/components"
import * as React from 'react'
import { Col, Row } from 'antd';

interface Props {
  handleAddTab: (type: string, name: string) => void;
}

const ContentDashboardPage: React.FC<Props> = ({ handleAddTab }) => {
  return <div className="dashboard-container">
    <div className="filter">
      <DateRangePicker className="date-range-picker" title="Date Range" />
      <SelectBase className="select-buyer" title="Buyer"></SelectBase>
      <SelectBase className="select-vendor" title="Vendor"></SelectBase>
    </div>
    <div>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <BasicCard label={"Total PO Processed"} content={"1"} color="#2f54eb"></BasicCard>
        </Col>
        <Col span={6}>
          <BasicCard label={"Unacknowledged POs"} content={"2"} color="#ffc53d"></BasicCard>
        </Col>
        <Col span={6}>
          <BasicCard label={"POs with Exception"} content={"3"} color="#ffec3d"></BasicCard>
        </Col>
        <Col span={6}>
          <BasicCard label={"Perfect Order Rate"} content={"4"} color="#a0d911"></BasicCard>
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
            ]}
            handleNewTab={(status: string) => handleAddTab("pomanagement", `Unacknowledgment (${status}) `)} >
          </ExceptionsCard>
        </Col>
        <Col span={8}>
          <ExceptionsCard
            title={"Price Mismatch"}
            list={[
              { status: "High", value: "1" },
              { status: "Low", value: "2" }
            ]}
            handleNewTab={(status: string) => handleAddTab("pomanagement", `Price Mismatch (${status}) `)} >
          </ExceptionsCard>
        </Col>
        <Col span={8}>
          <ExceptionsCard
            title={"Backorder"}
            list={[
              { status: "High", value: "1" },
            ]}
            handleNewTab={(status: string) => handleAddTab("pomanagement", `Backorder (${status}) `)} >
          </ExceptionsCard>
        </Col>
        <Col span={8}>
          <ExceptionsCard
            title={"UOM Mismatch"}
            list={[
              { status: "High", value: "0" },
              { status: "Low", value: "2" }
            ]}
            handleNewTab={(status: string) => handleAddTab("pomanagement", `UOM Mismatch (${status}) `)} >
          </ExceptionsCard>
        </Col>
        <Col span={8}>
          <ExceptionsCard
            title={"Vendor Catalog Number Mismatch"}
            list={[
              { status: "Low", value: "2" }
            ]}
            handleNewTab={(status: string) => handleAddTab("pomanagement", `Vendor Catalog Number Mismatch (${status}) `)} >
          </ExceptionsCard>
        </Col>
        <Col span={8}>
          <ExceptionsCard
            title={"Manufacturer Number Mismatch"}
            list={[
              { status: "Low", value: "2" }
            ]}
            handleNewTab={(status: string) => handleAddTab("pomanagement", `Manufacturer Number Mismatch (${status}) `)} >
          </ExceptionsCard>
        </Col>
      </Row>
    </div>
    <div>
      <h1>PO Status Distribution</h1>
      <CardList list={[
        { title: "Waiting Vendor Confirmation", value: "1" },
        { title: "Unassigned", value: "1" },
        { title: "Assigned", value: "1" },
        { title: "In Progress", value: "1" },
        { title: "Complete", value: "1" },
        { title: "Ignored", value: "1" }
      ]}></CardList>
    </div>
  </div>
}
export default ContentDashboardPage