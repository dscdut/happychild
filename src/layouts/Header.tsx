import { HomeFilled, HomeOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const { pathname } = useLocation();

  const MENU_ITEMS = [
    {
      title: 'Blogs',
      to: '/blogs',
      icon: <HomeFilled />,
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
      render: () => (
        <div className="flex items-center gap-4">
          <div className="border-b-primary-color transition-all hover:border-b-4">
            <Link to="/">
              <Typography>Sign Up</Typography>
            </Link>
          </div>
          <Button type="primary">Sign In</Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div>LOGO</div>
      <div className="flex items-center justify-center gap-10">
        {MENU_ITEMS?.map(item =>
          item?.render ? (
            item?.render()
          ) : (
            <div
              className={`transition-all hover:border-b-4 hover:border-b-primary-color ${
                pathname === item?.to
                  ? 'border-b-4 border-b-primary-color text-primary-color'
                  : ''
              }`}
            >
              <Link to={item?.to}>
                {item?.icon ? <HomeOutlined /> : item?.title}
              </Link>
            </div>
          ),
        )}
      </div>
    </>
  );
}
