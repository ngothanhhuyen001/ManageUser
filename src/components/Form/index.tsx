import { useRef, useState } from "react";
import { Button, Modal } from "antd";
import { Formik, } from 'formik';
import type { FormikProps } from 'formik';
import * as Yup from "yup";
import FormInput from "../Input/index";
import type { User } from "../../types/user.type";
import './style.scss'

interface Props {
  visible: boolean;
  user: User | null;
  onCancel: () => void;
  onSubmit: (user: User, isEdit: boolean) => void;
  initialValues: User;
  title: string
  nameButton : string;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  age: Yup.string().required("Age is required"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  address: Yup.string()
});

const Formbase: React.FC<Props> = ({ title, visible, user, onCancel, onSubmit, initialValues, nameButton }) => {
  const formRef = useRef<FormikProps<User>>(null);
  const [keyForm, setKeyForm] = useState(0);
  return (
    <Modal className="model-form" title={title} open={visible} onCancel={() => {
      setKeyForm(keyForm + 1)
      // formRef.current?.handleReset();
      onCancel();

    }} footer={null} centered >
      <Formik
        key={keyForm}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmit(values, !!user)}
        enableReinitialize
        innerRef={formRef}
      >
        {({ handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <FormInput name="name" placeholder="Name" onChange={handleChange} />
            <FormInput name="age" placeholder="Age" onChange={event => {
              const regex = /^[0-9]*$/;
              const { value } = event.target;
              if (regex.test(value) && Number(value) <=100) {
                handleChange?.(event);
              }
            }} />
            <FormInput name="email" placeholder="Email" onChange={handleChange} />
            <FormInput name="address" placeholder="Address" onChange={handleChange} />
            <div className="button-form">
              <Button htmlType="submit" type="primary">{nameButton}</Button>
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default Formbase;