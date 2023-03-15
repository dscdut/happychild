import {
  ContactsOutlined,
  HomeOutlined,
  ProfileOutlined,
  ReadOutlined,
  ScheduleOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  QuestionOutlined,
} from '@ant-design/icons';
import { Button, Typography, Image } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UserInfo from './UserInfo';
import HappyChild from '#/assets/images/happychild.jpg';
import { useState } from 'react';

export function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const MENU_ITEMS = [
    {
      title: 'Trang chủ',
      key:'home',
      to: '/',
      icon: <HomeOutlined className="mr-2 text-4xl lg:text-xl" />,
    },
    {
      title: 'Đánh giá',
      key:'assessment',
      to: '/assessment',
      icon: <ScheduleOutlined className="mr-2 text-4xl lg:text-xl" />,
    },
    {
      title: 'Bài viết',
      to: '/blogs',
      icon: <ProfileOutlined className="mr-2 text-4xl lg:text-xl" />,
    },
    {
      title: 'Bài test',
      to: '/test',
      icon: <QuestionOutlined className="mr-2 text-4xl lg:text-xl" />,
    },
    {
      title: 'Khoá học',
      to: '/courses',
      icon: <ReadOutlined className="mr-2 text-4xl lg:text-xl" />,
    },
    {
      title: 'Liên hệ chuyên gia',
      to: '/contact-specialists',
      icon: <UserOutlined className="mr-2 text-4xl lg:text-xl" />,
    },
    {
      title: 'Cộng Đồng',
      to: '/community',
      icon: <UsergroupAddOutlined className="mr-2 text-4xl lg:text-xl" />,
    },
    {
      title: 'Về chúng tôi',
      to: '/about-us',
      icon: <ContactsOutlined className="mr-2 text-4xl lg:text-xl" />,
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
          className="cursor-pointer object-contain"
          onClick={() => navigate('/')}
        />
      </div>
      <div className="flex items-center justify-center gap-10">
        {MENU_ITEMS?.map(item =>
          item?.render ? (
            item?.render()
          ) : (
            <div
              className={`transition-all hover:border-b-4 hover:border-b-primary-color ${
                (item?.to !== '/' && pathname?.includes(item?.to)) ||
                (item?.to === '/' && pathname === item?.to)
                  ? 'border-b-4 border-b-primary-color'
                  : ''
              }`}
            >
              <Link
                to={item?.to}
                className={
                  (item?.to !== '/' && pathname?.includes(item?.to)) ||
                  (item?.to === '/' && pathname === item?.to)
                    ? 'text-primary-color'
                    : 'text-[black]'
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
