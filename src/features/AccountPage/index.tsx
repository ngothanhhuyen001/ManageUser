import { Formik, type FormikProps } from "formik";
import InputBase from "../../components/Input";
import { Button, message } from "antd";
import * as Yup from "yup";
import './style.scss'
import { useContext, useRef, useState } from "react";
import Modal from "../../components/Modal";
import { UserContext } from "../../context/userContext";
import type { State } from "../../context/accountReducers";

const AccountPage = () => {

  const [openModal, setOpenModal] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { dispatch } = useContext(UserContext);
  const formRef = useRef<FormikProps>(null);

  const account = JSON.parse(localStorage.getItem('account') || "")
  console.log(account)

  const onSuccess = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };
  const onError = () => {
    messageApi.open({
      type: 'error',
      content: 'Confirmation password does not match',
    });
  };

  const handleUpdateAccount = (values: State) => {
    dispatch({ type: "set_account", payload: values })
  }

  const handleChangePassword = () => {
    const newPass = formRef.current?.values.newPassword;
    const confirmPass = formRef.current?.values.confirmNewPass;
    const password = formRef.current?.values.oldPassword;

    if (newPass !== confirmPass || account.password !== password) {
      onError();
    }
    else {
      dispatch({ type: "update_field", payload: { key: 'password', value: newPass } })
      onSuccess()
      setOpenModal(false)
    }
  }

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
          <InputBase name="name" placeholder='' label="Name:" value={values.name} onChange={handleChange} />
          <InputBase name="age" placeholder='' label="Age:" value={values.age} onChange={handleChange} />
          <InputBase name="email" placeholder='' label="Email:" value={values.email} onChange={handleChange} />
          <InputBase name="address" placeholder='' label="Address:" value={values.address} onChange={handleChange} />
          <div className="change-password-btn">
            <a onClick={() => { setOpenModal(true) }}>Change Password?</a>
          </div>
          <Button classname="save-account-btn" type='primary' onClick={(e: { preventDefault: () => void; }) => {
            e.preventDefault();
            handleSubmit();
          }}>Save</Button>
        </form>
      )}
    </Formik>
    <Modal
      visible={openModal}
      onCancel={() => setOpenModal(false)}
      onConfirm={() => { formRef.current?.submitForm() }}
      title="Change Password"
      children={
        <Formik initialValues={{ ...account }} enableReinitialize onSubmit={() => {
          handleChangePassword()
        }}
          innerRef={formRef}>
          {({ values, handleChange, handleSubmit }) => (
            <form className="change-password-form" onSubmit={handleSubmit}>
              <InputBase
                name="oldPassword"
                placeholder=''
                label="Current password:"
                type="password"
                value={values.oldPassword}
                onChange={handleChange} />
              <InputBase
                name="newPassword"
                placeholder=''
                label="New Password:"
                type="password"
                value={values.newPassword}
                onChange={handleChange} />
              <InputBase
                name="confirmNewPass"
                placeholder=''
                label="Confirm New Password:"
                type="password"
                value={values.confirmNewPass}
                onChange={handleChange} />
            </form>
          )}
        </Formik>
      }>
    </Modal>
  </div>
}
export default AccountPage;