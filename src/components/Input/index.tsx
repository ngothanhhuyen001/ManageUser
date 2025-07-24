import { Input } from "antd";
import { useField } from "formik";

const InputBase = (props: { name: any; placeholder: any; type?: any; onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; }) => {
  const { name, type, placeholder, onChange} = props;
  const [field, meta] = useField(name);

  return (
    <div style={{ marginBottom: 16 }}>
      <Input {...field} placeholder={placeholder} type={type} onChange={onChange} />
      {meta.touched && meta.error && (
        <div style={{ color: "red", marginTop: 4 }}>{meta.error}</div>
      )}
    </div>
  );
};
export default InputBase;