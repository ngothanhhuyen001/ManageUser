import { DatePicker as AntdDatePicker } from 'antd';
import * as React from 'react';

const { RangePicker } = AntdDatePicker;

interface DateRangePickerProps {
  className: string;
  title: string
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ className, title }) => {
  return (
    <div className={className}>
      <span>{title}</span>
      <div>
        <RangePicker />
      </div>
    </div>
  )
}

export default DateRangePicker

