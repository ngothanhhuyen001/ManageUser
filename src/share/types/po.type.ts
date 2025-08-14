export interface PO {
  key: string;
  poNumber: string;
  vendor: string;
  buyer: string;
  totalLines: number;
  totalQuantity: number;
  severity: string;
}

export interface POExpanded {
  key: string;
  lineNo: number;
  item: string;
  sku: string;
  quantity: {
    original: number;
    confirmed: number;
  };
  uom: {
    original: string;
    confirmed: string;
  };
  price: {
    original: number;
    confirmed: number;
  };
  vendorCatNo: {
    original: string;
    confirmed: string;
  };
  mfrCatNo: {
    original: string;
    confirmed: string;
  };
  expectedDate: string;
  exceptionType: string;
  impactScope: number;
  assignee: string;
}
