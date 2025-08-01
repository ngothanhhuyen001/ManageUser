import { Formik } from "formik";
import InputBase from "../../components/Input";
import '../LoginPage/style.scss'
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import * as Yup from "yup";

const LoginPage = () => {
  const navigate = useNavigate();

  const validation = Yup.object({
    email: Yup.string().required("Email is required").email("Invalid Email"),
    password: Yup.string().required("Password is not empty")
  });

  const handleSubmit = (values: { email: string, password: string }) => {
    if (values.email !== '' && values.password !== '')
      localStorage.setItem("token", "1234567890")
    const token = localStorage.getItem("token")
    if (token)
      navigate('/')
  }

  return <div className="login-page">
    <div>
      <Formik initialValues={{ email: '', password: '' }} validationSchema={validation} onSubmit={(values) => {
        handleSubmit(values)
      }}>
        {({ handleChange, values }) => (
          <form className="login-form">
            <h2>Login</h2>
            <InputBase onChange={handleChange} name='email' placeholder="" label="Email:"/>
            <InputBase name="password" onChange={handleChange} placeholder="" label="Password:" type="password" />
            <Button type='primary' onClick={(e: { preventDefault: () => void; }) => {
              e.preventDefault();
              handleSubmit(values);
            }}>Login</Button>
          </form>
        )}
      </Formik>
    </div>
  </div>
}
export default LoginPage;