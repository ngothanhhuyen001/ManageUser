import { UserOutlined } from "@ant-design/icons";
import { Menu, type MenuProps } from "antd"
import { Outlet } from "react-router-dom";
import './style.scss'
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const HomePage = () => {
  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      key: 'SubMenu',
      icon: <UserOutlined />,
      children: [
        { label: 'User profile', key: 'userprofile' },
        { label: 'Log out', key: 'logout' },
      ],
    },
  ]

  const handleClick: MenuProps['onClick'] = ({ key }) => {
    if (key === "logout") {
      localStorage.removeItem('token');
      navigate('/login');
    }

  };
  return (
    <div>
      <Menu mode="horizontal" items={items} onClick={handleClick} ></Menu>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
export default HomePage