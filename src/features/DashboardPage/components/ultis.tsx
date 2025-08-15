import { Tag } from "antd";
import type { PO, POExpanded } from "../../../share/types";
import { SelectBase } from "../../../share/components";
import type { ColumnsType } from "antd/es/table";

export const columnsPO = (): ColumnsType<PO> => [
  {
    title: 'Po Number',
    dataIndex: 'poNumber',
    key: '1',
    width: '16%',
  },
  {
    title: 'Vendor',
    dataIndex: 'vendor',
    key: '2',
    width: '16%',
  },
  {
    title: 'Buyer',
    dataIndex: 'buyer',
    key: '3',
    width: '16%',
  },
  {
    title: 'Total Lines',
    dataIndex: 'totalLines',
    key: '4',
    width: '16%',
    align: "right"
  },
  {
    title: 'Total Quantity',
    dataIndex: 'totalQuantity',
    key: '5',
    width: '16%',
    align: "right"
  },
  {
    title: 'Severity',
    dataIndex: 'severity',
    key: '6',
    width: '16%',
    render: (status: string | null) => {
      let color = '';
      if (status === 'High') {
        color = 'red';
        return <Tag color={color}>{status}</Tag>;
      }
      return "-"
    },
  },
]

export const dataPO: PO[] = [
  {
    key: "1",
    poNumber: "PO001",
    vendor: "	Alpha Corp",
    buyer: "Alice Johnson",
    totalLines: 3,
    totalQuantity: 225,
    severity: "High",

  },
  {
    key: "2",
    poNumber: "PO002",
    vendor: "	Beta Inc",
    buyer: "Alice Johnson",
    totalLines: 3,
    totalQuantity: 225,
    severity: "High",

  },
  {
    key: "3",
    poNumber: "PO003",
    vendor: "Gamma Ltd",
    buyer: "Alice Johnson",
    totalLines: 3,
    totalQuantity: 225,
    severity: "High",

  },
  {
    key: "4",
    poNumber: "PO004",
    vendor: "Delta Co",
    buyer: "Alice Johnson",
    totalLines: 3,
    totalQuantity: 225,
    severity: "-",

  },
  {
    key: "5",
    poNumber: "PO005",
    vendor: "Zeta Corp",
    buyer: "Alice Johnson",
    totalLines: 3,
    totalQuantity: 225,
    severity: "High",
  },
  {
    key: "6",
    poNumber: "PO006",
    vendor: "Zeta Corp",
    buyer: "Alice Johnson",
    totalLines: 3,
    totalQuantity: 225,
    severity: "",
  },
  {
    key: "7",
    poNumber: "PO007",
    vendor: "Zeta Corp",
    buyer: "Alice Johnson",
    totalLines: 3,
    totalQuantity: 225,
    severity: "",
  },
  {
    key: "8",
    poNumber: "PO008",
    vendor: "Zeta Corp",
    buyer: "Alice Johnson",
    totalLines: 3,
    totalQuantity: 225,
    severity: "High",
  },
];

export const columnsExpandedPO = (onOpenModal: () => void): ColumnsType<POExpanded> => [
  {
    title: 'Line No.',
    dataIndex: 'lineNo',
    key: '1',
    width: "20px"
  },
  {
    title: 'Item',
    dataIndex: 'item',
    key: '2',
  },
  {
    title: 'Sku',
    dataIndex: 'sku',
    key: '3',
  },
  {
    title: 'Auantity',
    dataIndex: 'quantity',
    key: '4',
    align: 'right',
    render: (record: { original: number; confirmed: number }) => {
      return (
        <div>
          <div>Original: {record.original}</div>
          <div className="confirmed">Confirmed: {record.confirmed}</div>
        </div>
      );
    }
  },
  {
    title: 'Uom',
    dataIndex: 'uom',
    key: '5',
    render: (record: { original: string; confirmed: string; }) => {
      return (
        <div>
          <div>Original: {record.original}</div>
          <div className="confirmed">Confirmed: {record.confirmed}</div>
        </div>
      );
    }
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: '6',
    align: 'right',
    render: (record: { original: number; confirmed: number }) => {
      return (
        <div>
          <div>Original: {record.original}</div>
          <div className="confirmed">Confirmed: {record.confirmed}</div>
        </div>
      );
    }
  },
  {
    title: 'Vendor Cat No.',
    dataIndex: 'vendorCatNo',
    key: '7',
    render: (record: { original: string; confirmed: string; }) => {
      return (
        <div>
          <div>Original: {record.original}</div>
          <div className="confirmed">Confirmed: {record.confirmed}</div>
        </div>
      );
    }
  },
  {
    title: 'Mfg Cat No.',
    dataIndex: 'mfrCatNo',
    key: '8',
    render: (record: { original: string; confirmed: string; }) => {
      return (
        <div>
          <div>Original: {record.original}</div>
          <div className="confirmed">Confirmed: {record.confirmed}</div>
        </div>
      );
    }
  },
  {
    title: 'Expected Date',
    dataIndex: 'expectedDate',
    key: '9',
  },
  {
    title: 'Exception Type(s)',
    dataIndex: 'exceptionType',
    key: '10',
    width: 300,
    render: (status: string | null) => {
      let color = '';
      if (status !== 'Vendor Catalog Number Mismatch') {
        color = 'red';
      }
      return <Tag color={color}>{status}</Tag>;
    },
  },
  {
    title: 'Impact Score',
    dataIndex: 'impactScope',
    key: '11',
    align: 'right',
    render: (value: number) => {
      let color = '';
      if (value)
        color = 'red';
      return <span color={color}>{value} </span>
    }
  },
  {
    title: 'Assignee',
    dataIndex: 'assignee',
    key: '12',
    width: 150,
    render: () => <SelectBase className="" title="" />
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: '13',
    render: () => <a onClick={onOpenModal}>View & Resolve</a>,
  },
]


export const dataExpandedPO: POExpanded[] = [
  {
    key: "1",
    lineNo: 1,
    item: "Widget A",
    sku: "WA-001",
    quantity: { original: 100, confirmed: 120 },
    uom: { original: 'EA', confirmed: 'EA' },
    price: { original: 100, confirmed: 120 },
    vendorCatNo: { original: 'VCAT-001', confirmed: 'VCAT-001-NEW' },
    mfrCatNo: { original: 'MCAT-001', confirmed: 'MCAT-001-NEW' },
    expectedDate: '2025-07-06',
    exceptionType: 'Unacknowledged',
    impactScope: 95,
    assignee: "Diana Prince",
  },
  {
    key: "2",
    lineNo: 2,
    item: "Widget A",
    sku: "WA-001",
    quantity: { original: 100, confirmed: 120 },
    uom: { original: 'EA', confirmed: 'EA' },
    price: { original: 100, confirmed: 120 },
    vendorCatNo: { original: 'VCAT-001', confirmed: 'VCAT-001-NEW' },
    mfrCatNo: { original: 'MCAT-001', confirmed: 'MCAT-001-NEW' },
    expectedDate: '2025-07-06',
    exceptionType: 'Vendor Catalog Number Mismatch',
    impactScope: 95,
    assignee: "Alice Johnson",
  },
  {
    key: "3",
    lineNo: 3,
    item: "Widget A",
    sku: "WA-001",
    quantity: { original: 100, confirmed: 120 },
    uom: { original: 'EA', confirmed: 'EA' },
    price: { original: 100, confirmed: 120 },
    vendorCatNo: { original: 'VCAT-001', confirmed: 'VCAT-001-NEW' },
    mfrCatNo: { original: 'MCAT-001', confirmed: 'MCAT-001-NEW' },
    expectedDate: '2025-07-06',
    exceptionType: 'Price Mismatch',
    impactScope: 95,
    assignee: "Alice Johnson",
  },
  {
    key: "4",
    lineNo: 4,
    item: "Widget A",
    sku: "WA-001",
    quantity: { original: 100, confirmed: 120 },
    uom: { original: 'EA', confirmed: 'EA' },
    price: { original: 100, confirmed: 120 },
    vendorCatNo: { original: 'VCAT-001', confirmed: 'VCAT-001-NEW' },
    mfrCatNo: { original: 'MCAT-001', confirmed: 'MCAT-001-NEW' },
    expectedDate: '2025-07-06',
    exceptionType: 'Quantity Mismatch',
    impactScope: 95,
    assignee: "Alice Johnson",
  },
  {
    key: "5",
    lineNo: 5,
    item: "Widget A",
    sku: "WA-001",
    quantity: { original: 100, confirmed: 120 },
    uom: { original: 'EA', confirmed: 'EA' },
    price: { original: 100, confirmed: 120 },
    vendorCatNo: { original: 'VCAT-001', confirmed: 'VCAT-001-NEW' },
    mfrCatNo: { original: 'MCAT-001', confirmed: 'MCAT-001-NEW' },
    expectedDate: '2025-07-06',
    exceptionType: 'Unacknowledged',
    impactScope: 95,
    assignee: "Alice Johnson",
  },
  {
    key: "6",
    lineNo: 6,
    item: "Widget A",
    sku: "WA-001",
    quantity: { original: 100, confirmed: 120 },
    uom: { original: 'EA', confirmed: 'EA' },
    price: { original: 100, confirmed: 120 },
    vendorCatNo: { original: 'VCAT-001', confirmed: 'VCAT-001-NEW' },
    mfrCatNo: { original: 'MCAT-001', confirmed: 'MCAT-001-NEW' },
    expectedDate: '2025-07-06',
    exceptionType: 'UOM Mismatch',
    impactScope: 95,
    assignee: "Alice Johnson",
  },
  {
    key: "7",
    lineNo: 7,
    item: "Widget A",
    sku: "WA-001",
    quantity: { original: 100, confirmed: 120 },
    uom: { original: 'EA', confirmed: 'EA' },
    price: { original: 100, confirmed: 120 },
    vendorCatNo: { original: 'VCAT-001', confirmed: 'VCAT-001-NEW' },
    mfrCatNo: { original: 'MCAT-001', confirmed: 'MCAT-001-NEW' },
    expectedDate: '2025-07-06',
    exceptionType: 'Unacknowledged',
    impactScope: 95,
    assignee: "Alice Johnson",
  },
  {
    key: "8",
    lineNo: 8,
    item: "Widget A",
    sku: "WA-001",
    quantity: { original: 100, confirmed: 120 },
    uom: { original: 'EA', confirmed: 'EA' },
    price: { original: 100, confirmed: 120 },
    vendorCatNo: { original: 'VCAT-001', confirmed: 'VCAT-001-NEW' },
    mfrCatNo: { original: 'MCAT-001', confirmed: 'MCAT-001-NEW' },
    expectedDate: '2025-07-06',
    exceptionType: 'Unacknowledged',
    impactScope: 95,
    assignee: "Alice Johnson",
  },
  {
    key: "9",
    lineNo: 9,
    item: "Widget A",
    sku: "WA-001",
    quantity: { original: 100, confirmed: 120 },
    uom: { original: 'EA', confirmed: 'EA' },
    price: { original: 100, confirmed: 120 },
    vendorCatNo: { original: 'VCAT-001', confirmed: 'VCAT-001-NEW' },
    mfrCatNo: { original: 'MCAT-001', confirmed: 'MCAT-001-NEW' },
    expectedDate: '2025-07-06',
    exceptionType: 'Quantity Mismatch',
    impactScope: 95,
    assignee: "Alice Johnson",
  },
  {
    key: "10",
    lineNo: 10,
    item: "Widget A",
    sku: "WA-001",
    quantity: { original: 100, confirmed: 120 },
    uom: { original: 'EA', confirmed: 'EA' },
    price: { original: 100, confirmed: 120 },
    vendorCatNo: { original: 'VCAT-001', confirmed: 'VCAT-001-NEW' },
    mfrCatNo: { original: 'MCAT-001', confirmed: 'MCAT-001-NEW' },
    expectedDate: '2025-07-06',
    exceptionType: 'Unacknowledged',
    impactScope: 95,
    assignee: "Alice Johnson",
  },
]


export const poInfoRows = [
  [
    { label: "Vendor", value: "Alpha Corp" },
    { label: "Item", value: "Widget A" },
    { label: "Expected Date", value: "25-07-06" },
  ],
  [
    { label: "Original Quantity", value: "Alpha Corp" },
    { label: "Confirmed Quantity", value: "Widget A" },
    { label: "Original Price", value: "25-07-06" },
  ],
  [
    { label: "Confirmed Price", value: "Alpha Corp" },
    { label: "Buyer", value: "Widget A" },
    { label: "Current Assignee", value: "Widget A" },
  ],
  [
    { label: "Vendor Catalog No.", value: "Alpha Corp" },
    { label: "Manufacturer Catalog No.", value: "Widget A" },
  ],
];