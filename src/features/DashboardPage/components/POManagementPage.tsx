import Search from "antd/es/input/Search"
import ButtonBase from "../../../share/components/Button"
import { DateRangePicker, ModalBase, RadioBase, RecommendedCard, SelectBase } from "../../../share/components"
import { Col, Row, Table } from "antd"
import { columnsExpandedPO, columnsPO, dataExpandedPO, dataPO, poInfoRows } from "./ultis"
import { useState } from "react"
import { SunOutlined } from "@ant-design/icons"
import type { PO, POExpanded } from "../../../share/types"
import { TextAreaBase } from "../../../share/components/Input"
import "../style.scss"

const POManagementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const expandedRowRender = () => (
    <div>
      Line Items for PO:
      <Table<POExpanded>
        columns={columnsExpandedPO(() => setIsModalOpen(true))}
        dataSource={dataExpandedPO}
        pagination={false}
        className="expanded-table-po"
      />
    </div>
  );

  return <div className="po-container">
    <div className="group-button">
      <ButtonBase className="" nameButton="HeaderView" />
      <ButtonBase className="" nameButton="Line View" />
    </div>
    <div className="filter-po">
      <Search />
      <div className="select-filter">
        <DateRangePicker className="date-range-po" title="Date:" />
        <SelectBase className="select-buyer-po" title="Buyer:" />
        <SelectBase className="select-vendor-po" title="Vendor:" />
        <SelectBase className="select-status-po" title="Status:" />
        <SelectBase className="select-exception-type-po" title="Exception Type:" />
        <SelectBase className="select-severity-po" title="Severity:" />
      </div>
    </div>
    <div>
      <Table<PO> className="table-po" columns={columnsPO()} dataSource={dataPO}
        expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
        pagination={false}
        rowClassName={(record) => {
          return record.severity === 'High' ? 'row-inactive' : '';
        }} />
    </div>
    <ModalBase
      className="modal-detail-po"
      visible={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      onConfirm={() => setIsModalOpen(false)}
      okText="OK"
      cancelText="Cancel"
      title="PO Details"
      closeIcon={true}
      children={
        <div className="content-modal-detail">
          <div className="po-information-detai">
            <>
              {poInfoRows.map((cols, rowIndex) => (
                <Row
                  key={rowIndex}
                  gutter={[32, 32]}
                  className="row-po-infor-detail"
                >
                  {cols.map((col, colIndex) => (
                    <Col key={colIndex} span={8}>
                      {col.label}
                      <div className="po-infor-detai-data">{col.value}</div>
                    </Col>
                  ))}
                </Row>
              ))}
            </>
          </div>
          <div className="po-ai-recomand">
            <h3><SunOutlined /> AI-Powered Resolution Assistant</h3>
            <div>
              <h4>1. Root Cause Analysis (AI-Powered RCA)</h4>
              <span className="value-root-cause">60%</span> Inventory discrepancy at vendor's warehouse.<br />
              <span className="value-root-cause">30%</span> Partial shipment due to stock limitations (backorder).<br />
              <span className="value-root-cause">10% </span> Order entry error by vendor or buyer.
            </div>
            <div>
              <h4>2. Recommended Actions</h4>
              <div className="recomended-action-po">
                <RecommendedCard
                  title="Recommended Action #1 (Success Probability: 88%)"
                  content={`Call vendor to inquire about the quantity discrepancy and potential backorder.
                  Contact: Vendor Logistics Team.
                  Direct calls often yield quicker responses for quantity issues.`}
                  actions={[
                    { label: 'Call Vendor', onClick: () => { } },
                    { label: 'Send Email', onClick: () => { } }
                  ]}
                  colorBorder="#95de64"
                  colorBackground="#f6ffed"
                />
                <RecommendedCard
                  title="Recommended Action #2 (Success Probability: 60%)"
                  content={`Request an updated delivery schedule for the remaining quantity.
                  This process can take 1-2 days depending on vendor's system.`}
                  actions={[
                    { label: 'Request info', onClick: () => { } },
                  ]}
                  colorBorder="#ffc53d"
                  colorBackground="#fffbe6" />
              </div>

            </div>
          </div>
          <div className="po-resolution">
            <h4>3. PO Log Resolution & Learning</h4>
            <RadioBase value={0} label={""} />
            Add comments...
            <TextAreaBase />
          </div>
        </div>}
    />
  </div>
}
export default POManagementPage