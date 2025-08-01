import { Formik } from "formik";
import InputBase from "../../components/Input";
import { Button, message } from "antd";
import * as Yup from "yup";
import './style.scss'
import { useReducer, useState } from "react";
import Modal from "../../components/Modal";
import { accountReducer, initialState } from "../HomePage/reducers/accountReducers";

const AccountPage = () => {

  const [openModal, setOpenModal] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [state, dispatch] = useReducer(accountReducer, initialState)

  const onSuccess = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };

  const handleUpdateAccount =(values:object) =>{
    console.log(values)
    dispatch({ type: "set_account", payload: values })
  }
  const account = JSON.parse(localStorage.getItem('account') || "")
  const validation = Yup.object({
    name: Yup.string().required("Name is required"),
    age: Yup.string().required("Age is required"),
    email: Yup.string().required("Email is required").email("Invalid Email"),
    address: Yup.string()
  });

  return <div className="account-page">
    {contextHolder}
    <Formik initialValues={{ ...account }} enableReinitialize validationSchema={validation} onSubmit={(values) => {
      onSuccess()
      handleUpdateAccount(values)
    }}>
      {({ values, handleChange, handleSubmit }) => (
        <form className="account-form">
          <InputBase name="name" placeholder={''} label="Name" value={values.name} onChange={handleChange} />
          <InputBase name="age" placeholder='' label="Age" value={values.age} onChange={handleChange} />
          <InputBase name="email" placeholder='' label="Email" value={values.email} onChange={handleChange} />
          <InputBase name="address" placeholder='' label="Address" value={values.address} onChange={handleChange} />
          <Button onClick={() => setOpenModal(true)}>Change Password</Button>
          <Button type='primary' onClick={(e: { preventDefault: () => void; }) => {
            e.preventDefault();
            handleSubmit();
          }}>Save</Button>
        </form>
      )}
    </Formik>
    <Modal
      visible={openModal}
      onCancel={() => setOpenModal(false)}
      onConfirm={() => { }}
      title="Change Password"
      children={undefined}>
    </Modal>
  </div>
}
export default AccountPage;