import {
  HomeOutlined,
  ScheduleOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  FormOutlined,
  InfoCircleOutlined,
  StockOutlined,
} from '@ant-design/icons';
import { Button, Typography, Image } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UserInfo from './UserInfo';
import HappyChild from '#/assets/images/happychild.jpg';

import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../shared/utils/firebase';

export function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const setAuth = () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setLoggedIn(true);
      }
    });
  };

  useEffect(() => {
    setAuth();
  }, []);

  const MENU_ITEMS = [
    {
      title: 'Homepage',
      to: '/',
      icon: <HomeOutlined className="mr-2 text-4xl lg:text-xl" />,
    },
    {
      title: 'Assessment',
      to: '/assessment',
      icon: <ScheduleOutlined className="mr-2 text-4xl lg:text-xl" />,
    },
    // {
    //   title: 'Blogs',
    //   to: '/blogs',
    //   icon: <ProfileOutlined className="mr-2" />,
    // },
    // {
    //   title: 'Courses',
    //   to: '/courses',
    //   icon: <ReadOutlined className="mr-2" />,
    // },
    {
      title: 'Intervention guide',
      to: '/intervention-guide',
      icon: <StockOutlined className="mr-2 text-4xl lg:text-xl" />,
    },
    {
      title: 'Tracking progress',
      to: '/tracking-progress',
      icon: <FormOutlined className="mr-2 text-4xl lg:text-xl" />,
    },
    {
      title: 'Contact specialists',
      to: '/contact-specialists',
      icon: <UserOutlined className="mr-2 text-4xl lg:text-xl" />,
    },
    {
      title: 'Community',
      to: '/community',
      icon: <UsergroupAddOutlined className="mr-2 text-4xl lg:text-xl" />,
    },
    {
      title: 'About us',
      to: '/about-us',
      icon: <InfoCircleOutlined className="mr-2 text-4xl lg:text-xl" />,
    },
    {
      render: () =>
        loggedIn && auth.currentUser ? (
          <UserInfo />
        ) : (
          <div className="flex items-center gap-4">
            <div className="mr-4 border-b-primary-color transition-all hover:border-b-4">
              <Link to="/sign-up" className="flex items-center">
                <Typography>Sign up</Typography>
              </Link>
            </div>
            <Button type="primary" onClick={() => navigate('/sign-in')}>
              Sign in
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
