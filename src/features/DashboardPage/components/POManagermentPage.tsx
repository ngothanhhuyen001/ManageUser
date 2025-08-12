import Search from "antd/es/input/Search"
import ButtonBase from "../../../share/components/Button"
import { DateRangePicker, SelectBase } from "../../../share/components"
import { Table } from "antd"
import type { PO, PODetail } from "../../../share/types"
import { columnsExpandedPO, columnsPO, dataExpandedPO, dataPO } from "./ultis"

const POManagementPage = () => {
  const expandedRowRender = () => (
    <div>
      <Table<PODetail>
        columns={columnsExpandedPO()}
        dataSource={dataExpandedPO}
        pagination={false}
        className="expanded-table-po"
      >Line Items for PO:</Table>
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
        pagination={false} />
    </div>
  </div>
}
export default POManagementPage