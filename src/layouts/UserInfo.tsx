import { Avatar, Dropdown, Menu, Typography } from 'antd';
import {
  BarsOutlined,
  DownCircleFilled,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import UserImage from '#/assets/images/user.png';

type MenuType = {
  key: string | number;
  to?: string;
  icon: JSX.Element;
  title: string;
};

const menus: MenuType[] = [
  {
    key: 'profile',
    to: '/profile',
    icon: <UserOutlined />,
    title: 'Thông tin cá nhân',
  },
  {
    key: 'reservations',
    to: '/reservations',
    icon: <ShoppingCartOutlined />,
    title: 'Nhật ký theo dõi',
  },
  {
    key: 'activity',
    to: '/activity',
    icon: <BarsOutlined />,
    title: 'Hoạt động',
  },
  {
    key: 'logout',
    icon: <LogoutOutlined />,
    title: 'Đăng xuất',
  },
];

export default function UserInfo() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage?.removeItem('unihack-access-token');
    navigate('/sign-in');
  };

  return (
    <div className="flex items-center gap-2">
      <Avatar size={60} src={UserImage} />
      <div className="flex flex-col items-end justify-end gap-2">
        <Typography className="text-sm">Xin chào, Minh Nguyen</Typography>
        <Dropdown
          overlay={
            <Menu
              items={menus.map(menu => ({
                key: menu.key,
                label: (
                  <span
                    onClick={menu.to ? () => navigate(`${menu.to}`) : logout}
                    className="flex items-center gap-4"
                  >
                    {menu.icon}
                    {menu.title}
                  </span>
                ),
              }))}
            />
          }
          placement="bottomRight"
        >
          <DownCircleFilled className="text-primary-color" />
        </Dropdown>
      </div>
    </div>
  );
}
