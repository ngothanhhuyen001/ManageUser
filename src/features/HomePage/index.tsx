import { Dropdown, type MenuProps } from "antd"
import { Outlet } from "react-router-dom";
import './style.scss'
import { useNavigate } from 'react-router-dom';
import { useReducer, useEffect } from "react";
import { accountReducer, initialState } from "./reducers/accountReducers";

type MenuItem = Required<MenuProps>['items'][number];

const HomePage = () => {

  const navigate = useNavigate();
  const account = JSON.parse(localStorage.getItem('account') || "");
  const [state, dispatch] = useReducer(accountReducer, initialState)
  console.log(state);
  console.log("render")

  useEffect(() => {
    dispatch({ type: "set_account", payload: account })
  }, [])


  const items: MenuItem[] = [
    {
      key: '1',
      label: "User profile",
    },
    {
      key: "2",
      label: "Log out",
    }
  ]

  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key === "1") {
      navigate('/account');
    }
    if (key === "2") {
      localStorage.removeItem('token');
      navigate('/login');
    }
  };
  return (
    <>
      <div>
        <div className="menu-header">
          <Dropdown menu={{ items, onClick }} >
            <span>{state.name}</span>
          </Dropdown>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}
export default HomePage