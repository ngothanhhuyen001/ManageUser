import { Select as AntdSelect } from 'antd';
import * as React from 'react';
import './style.scss'

interface SelectProps {
  className: string
  title: string
}

const SelectBase: React.FC<SelectProps> = ({ className, title }) => {
  return (
    <div className={className}>
      <div>{title}</div>
        <AntdSelect className='ant-select'/>
    </div>)
}
export default SelectBase