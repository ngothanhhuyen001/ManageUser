import { Formik } from "formik";
import InputBase from "../../components/Input";
import ButtonBase from "../../components/Button";
import '../LoginPage/style.scss'
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
const LoginPage = () => {
 const navigate = useNavigate();

  const handleSubmit = (values: {email: string , password: string }) => {
    // if (values.email !=="" && values.password !=="")
    //   navigate('/')
    
  }
  return <div className="login-page">
    <div>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={(values) => {
        console.log(values)
      }}>
        {({ handleChange, values }) => (
          <form className="login-form">
            <h3>Login</h3>
            <InputBase onChange={handleChange} name='email' placeholder="" label="Email" />
            <InputBase name="password" onChange={handleChange} placeholder="" label="Password"/>
            <Button  onClick={(e: { preventDefault: () => void; }) => {
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