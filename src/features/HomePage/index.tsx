import { Dropdown, type MenuProps } from "antd"
import { Outlet } from "react-router-dom";
import './style.scss'
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

type MenuItem = Required<MenuProps>['items'][number];

const HomePage = () => {

  const navigate = useNavigate();

  const { state } = useContext(UserContext);

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