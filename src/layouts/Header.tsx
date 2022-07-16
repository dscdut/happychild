import {
  ContactsFilled,
  HomeFilled,
  ProfileFilled,
  ReadFilled,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Typography, Image } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UserInfo from './UserInfo';
import HappyChild from '#/assets/images/happychild.jpg';

export function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const MENU_ITEMS = [
    {
      title: 'Trang chủ',
      to: '/',
      icon: <HomeFilled className="mr-2" />,
    },
    {
      title: 'Bài viết',
      to: '/blogs',
      icon: <ProfileFilled className="mr-2" />,
    },
    {
      title: 'Khoá học',
      to: '/courses',
      icon: <ReadFilled className="mr-2" />,
    },
    {
      title: 'Liên hệ chuyên gia',
      to: '/contact-specialists',
      icon: <UserOutlined className="mr-2" />,
    },
    {
      title: 'Cộng Đồng',
      to: '/community',
      icon: <UsergroupAddOutlined className="mr-2" />,
    },
    {
      title: 'Về chúng tôi',
      to: '/about-us',
      icon: <ContactsFilled className="mr-2" />,
    },
    {
      render: () =>
        localStorage?.getItem('unihack-access-token') ? (
          <UserInfo />
        ) : (
          <div className="flex items-center gap-4">
            <div className="mr-4 border-b-primary-color transition-all hover:border-b-4">
              <Link to="/sign-up" className="flex items-center">
                <Typography>Đăng ký</Typography>
              </Link>
            </div>
            <Button type="primary" onClick={() => navigate('/sign-in')}>
              Đăng nhập
            </Button>
          </div>
        ),
    },
  ];

  return (
    <>
      <div>
        <Image
          src={HappyChild}
          preview={false}
          width={100}
          height={80}
          className="object-contain"
        />
      </div>
      <div className="flex items-center justify-center gap-10">
        {MENU_ITEMS?.map(item =>
          item?.render ? (
            item?.render()
          ) : (
            <div
              className={`transition-all hover:border-b-4 hover:border-b-primary-color ${
                pathname === item?.to ? 'border-b-4 border-b-primary-color' : ''
              }`}
            >
              <Link
                to={item?.to}
                className={
                  pathname === item?.to ? 'text-primary-color' : 'text-[black]'
                }
              >
                {item?.icon}
                {item?.title}
              </Link>
            </div>
          ),
        )}
      </div>
    </>
  );
}
