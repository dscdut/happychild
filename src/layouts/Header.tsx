import {
  HomeOutlined,
  ScheduleOutlined,
  UserOutlined,
  FormOutlined,
  InfoCircleOutlined,
  StockOutlined,
  MenuOutlined
} from '@ant-design/icons';
import { Button, Typography, Image } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UserInfo from './UserInfo';
import HappyChild from '#/assets/images/logo-transparent.png';

import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../shared/utils/firebase';

const Header = () => {
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
    if(window.innerWidth >= 768){setNavbarOpen(true)}
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
          <div key={"LoggedIn"} className="ml-auto mr-5 ">
            <UserInfo />
          </div>
        ) : (
          <div
            key={"unLoggedIn"}
            className="sm:ml-auto sm:mr-5 flex sm:flex-row flex-col items-center gap-4"
            style={{
              fontSize: '0.9rem',
            }}
          >
            {window.innerWidth >= 768 ? <>
            <Button className='hover:border-b-4 '>
              <Link to="/sign-up" className="flex items-center">
                <Typography
                   style={{
                    fontSize: '0.9rem',
                  }}
                >Sign up</Typography>
              </Link>
            </Button>
            <Button
            className='hover:border-b-4 border-b-primary-color transition-all'
              type="primary"
              onClick={() => navigate('/sign-in')}
              style={{
                fontSize: '0.9rem',
              }}
            >
              Sign in
            </Button>
            </> : <>
            <div>
              <Link to="/sign-up" className="items-center text-[0.9rem]">
                Sign up
              </Link>
            </div>
            <div
              className='transition-all text-secondary-color -mt-[1rem] cursor-pointer'
              //type="primary"
              onClick={() => navigate('/sign-in')}
              style={{
                fontSize: '0.95rem',
              }}
            >
              Sign in
            </div>
            

            </>}
            
            
          </div>
        ),
    },
  ];

  return (
    <>
      <div
        className="ml-7 grid w-full grid-cols-6 "
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
          className={`col-span-5 flex flex-col ml-auto mt-[5.5rem] px-8 sm:px-0 sm:mt-0 bg-[#fff] mr-2 sm:mr-0 sm:bg-transparent sm:flex-row items-center justify-start sm:gap-6 sm:ml-[4rem] 
            ${navbarOpen && window.innerWidth < 768 ? 'border-[1px] border-[#ccc] shadow-xl':''}`}>
          {navbarOpen!=false && MENU_ITEMS?.map(item =>
            item?.render && item?.title != '' ? (
              item?.render()
            ) : (
              <div
                key={item?.title}
                onClick={() => {if(window.innerWidth < 768 )setNavbarOpen(!navbarOpen)}}
                className={`cursor-pointer transition-all hover:border-b-4 hover:border-b-primary-color ${
                  (item?.to !== '/' && pathname?.includes(item?.to)) ||
                  (item?.to === '/' && pathname === item?.to)
                    ? 'border-b-4 border-b-primary-color'
                    : 'border-b-4 border-transparent'
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
                  style={{ fontWeight: '100' }}
                >
                  <span className="text-[0.7rem] hidden sm:inline-block">
                    {item?.icon}
                  </span>
                  <span className=''>{item?.title}</span>
                </Link>
              </div>
            ),
          )}
          <div onClick={() => setNavbarOpen(!navbarOpen)} className='sm:hidden absolute top-7 right-3'>
            <MenuOutlined className="w-5 scale-150"/>
          </div>
        </div>      
      </div>
      
    </>
  );
}


export default Header