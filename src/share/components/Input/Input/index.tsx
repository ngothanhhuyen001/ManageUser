import { Input } from "antd";
import { useField } from "formik";
import "../style.scss"

const InputBase = (props: { value?: string; label?: string; name: string; placeholder: string; type?: string; onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; }) => {
  const { label, name, type, placeholder, onChange, value } = props;
  const [field, meta] = useField(name);

  return (<div className="input-wrapper">
    {label && <span className="input-label">{label}</span>}
    <div className="input">
      <Input {...field} placeholder={placeholder} type={type} onChange={onChange} value={value} />
      {meta.touched && meta.error && (<div className="input-error">{meta.error}</div>)}
    </div>
  </div>
  );
};
export default InputBase;