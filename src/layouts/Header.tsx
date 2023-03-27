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
import HappyChild from '#/assets/images/logo-transparent.png';

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
    // {
    //   title: 'Community',
    //   to: '/community',
    //   icon: <UsergroupAddOutlined className="mr-2 text-4xl lg:text-xl" />,
    // },
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
          <div
            className="ml-auto mr-5 flex items-center gap-4"
            style={{
              fontSize: '1.2rem',
            }}
          >
            <div className="border-b-primary-color transition-all hover:border-b-4">
              <Link to="/sign-up" className="flex items-center">
                <Typography>Sign up</Typography>
              </Link>
            </div>
            <Button
              type="primary"
              onClick={() => navigate('/sign-in')}
              style={{
                fontSize: '1rem',
              }}
            >
              Sign in
            </Button>
          </div>
        ),
    },
  ];

  return (
    <>
      <div
        className="grid w-full grid-cols-6 "
        style={{ height: '5rem', backgroundColor: '#FFFFFF' }}
      >
        <div>
          <Image
            src={HappyChild}
            preview={false}
            width={80}
            height={50}
            className="mt-3 cursor-pointer object-contain"
            onClick={() => navigate('/')}
          />
        </div>
        <div
          className="col-span-5 flex items-center justify-start gap-6"
          // style={{ marginLeft: '0' }}
        >
          {MENU_ITEMS?.map(item =>
            item?.render && item?.title != '' ? (
              item?.render()
            ) : (
              <div
                className={`cursor-pointer transition-all hover:border-b-4 hover:border-b-primary-color ${
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
                  style={{ fontSize: '0.8rem', fontWeight: '100' }}
                >
                  {item?.icon}
                  {item?.title}
                </Link>
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
}
