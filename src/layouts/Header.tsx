import { HomeFilled, HomeOutlined } from '@ant-design/icons';
import { Button, Typography, Image } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UserInfo from './UserInfo';
import HappyChild from '#/assets/images/happychild.jpg';

export function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const MENU_ITEMS = [
    {
      title: 'Home',
      to: '/',
      icon: <HomeFilled />,
    },
    {
      title: 'Blogs',
      to: '/blogs',
    },
    {
      title: 'Courses',
      to: '/courses',
    },
    {
      title: 'Contact Specialists',
      to: '/contact-specialists',
    },
    {
      title: 'About Us',
      to: '/about-us',
    },
    {
      render: () =>
        localStorage?.getItem('unihack-access-token') ? (
          <UserInfo />
        ) : (
          <div className="flex items-center gap-4">
            <div className="border-b-primary-color transition-all hover:border-b-4">
              <Link to="/sign-up">
                <Typography>Sign Up</Typography>
              </Link>
            </div>
            <Button type="primary" onClick={() => navigate('/sign-in')}>
              Sign In
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
                {item?.icon ? <HomeOutlined /> : item?.title}
              </Link>
            </div>
          ),
        )}
      </div>
    </>
  );
}
