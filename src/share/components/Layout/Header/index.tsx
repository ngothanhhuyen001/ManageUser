import { Dropdown, type MenuProps } from "antd"
import { Outlet } from "react-router-dom";
import './style.scss'
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AppstoreOutlined, SunOutlined, TikTokOutlined } from "@ant-design/icons";
import { UserContext } from "../../../context/userContext";

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
          <div className="logo-menu-header">
            <TikTokOutlined />
            <span>Meperia Price Management</span>
          </div>
          <div className="tap-menu-header" >
            <div onClick={() => navigate('/dashboard')}>
              <AppstoreOutlined />
              Home
            </div>
            <div onClick={() => navigate('/vendor')}>
              <SunOutlined />
              Vendor Performance
            </div>

          </div>
          <div className="user-menu-header">
            <Dropdown menu={{ items, onClick }} >
              <span>{state.name}</span>
            </Dropdown>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}
export default HomePage