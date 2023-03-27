import { Avatar, Dropdown, Menu, Typography } from 'antd';
import {
  BarsOutlined,
  DownCircleFilled,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../shared/utils/firebase';
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
    title: 'Profile',
  },
  {
    key: 'reservations',
    to: '/reservations',
    icon: <ShoppingCartOutlined />,
    title: 'Tracking Logs',
  },
  {
    key: 'activity',
    to: '/activity',
    icon: <BarsOutlined />,
    title: 'Activities',
  },
  {
    key: 'logout',
    icon: <LogoutOutlined />,
    title: 'Log out',
  },
];

export default function UserInfo() {
  const navigate = useNavigate();

  const user = auth.currentUser;

  const logout = async () => {
    await signOut(auth);
    navigate('/sign-in');
  };

  return (
    <div className="flex items-center gap-2">
      <Avatar size={60} src={user?.photoURL || UserImage} />
      <div className="flex flex-row items-center gap-2 mt-6">
        <Typography className="text-sm">
          <span>
            Hello, {user?.displayName || user?.email || 'Guest'}
          </span>
        </Typography>
          <Dropdown
          className='text-xl'
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
