import { Col, Row } from "antd"
import '../style.scss'
import TextArea from "antd/es/input/TextArea"
import * as React from "react"
import { LineChart, SelectBase } from "../../../share/components"
import { RiseOutlined } from "@ant-design/icons"

interface Props { setVendorView: () => void }

const DetailVendorPage: React.FC<Props> = ({ setVendorView }) => {

  return <div className="detail-vendor-container">
    <div>
      <div>
        <a onClick={setVendorView}>Back</a>
        <span className="vendor-name"></span>
      </div>
      <div>
        <span className="risk-score">{ }/10</span>
        <span className="trend-label">
          <RiseOutlined />
          90-Day Trend:{ }</span>
      </div>
    </div>
    <div className="information-space">
      <div className="title-infor-space">Explanation from AI</div>
      <div className="content-infor-space">
        <span>Key factors contributing to the current risk score:</span>
        <ul>
          <li>Confirmation time increased by 25%</li>
          <li>Price discrepancy frequency increased by 18%</li>
          <li>Backorder rate for the Stent product group is trending upwards</li>
        </ul>
      </div>
    </div>
    <div>
      <h2>Performance Trends & Forecast</h2>
      <div>
        <Row gutter={[32, 32]}>
          <Col span={12}>
            <LineChart title={"Confirmation Time (hours)"} color={"blue"}></LineChart>
          </Col>
          <Col span={12}>
            <LineChart title={"Price Discrepancy Rate (%)"} color={"red"}></LineChart>
          </Col>
          <Col span={12}>
            <LineChart title={"Backorder Rate (%)"} color={"orange"}></LineChart>
          </Col>
          <Col span={12}>
            <LineChart title={"On-Time Delivery (%)"} color={"green"}></LineChart>
          </Col>
        </Row>
      </div>
    </div>
    <div className="action-center">
      <h2>Action Center</h2>
      <div className="content-action-center">
        <div className="area-text-action-center">
          <div>Notes</div>
          <TextArea rows={1} />
        </div>
        <div className="select-action-center">
          <SelectBase className="select-assign-to" title="Assign to" />
          <SelectBase className="select-update-status" title="Update Status" />
        </div>
      </div>

    </div>
  </div>
}
export default DetailVendorPage