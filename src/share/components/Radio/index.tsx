import { Radio, type RadioChangeEvent } from "antd";
import { useState } from "react";
import './style.scss'

interface RadioProps {
  value: number;
  label: string;
}


const RadioBase: React.FC<RadioProps> = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Radio.Group
      className="radio-group"
      onChange={onChange}
      value={value}
      options={[
        { value: 1, label: 'Price has been adjusted by Vendor' },
        { value: 2, label: 'Accept new price (provide reason)' },
        { value: 3, label: 'Cancel Line Item' },
      ]}
    />
  );
};

export default RadioBase;