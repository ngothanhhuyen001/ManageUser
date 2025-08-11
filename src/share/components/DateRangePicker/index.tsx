import { DatePicker as AntdDatePicker } from 'antd';
import * as React from 'react';

const { RangePicker } = AntdDatePicker;

interface DateRangePickerProps {
  className: string
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ className }) => {
  return (
    <div className={className}>
      <span>Date Range</span>
      <div>
        <RangePicker />
      </div>
    </div>
  )
}

export default DateRangePicker

