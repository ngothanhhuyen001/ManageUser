import { Input } from "antd";
import { useField } from "formik";
import "./style.scss"

const InputBase = (props: { label?: string; name: string; placeholder: string; type?: string; onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; }) => {
  const { label, name, type, placeholder, onChange } = props;
  const [field, meta] = useField(name);

  return (
    <div className="input-wrapper">
      {label && <span className="input-label">{label}</span>}
      <Input {...field} placeholder={placeholder} type={type} onChange={onChange} />
      {meta.touched && meta.error && (
        <div style={{ color: "red", marginTop: 4 }}>{meta.error}</div>
      )}
    </div>
  );
};
export default InputBase;