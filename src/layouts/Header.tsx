import { HomeFilled, HomeOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UserInfo from './UserInfo';

export function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const MENU_ITEMS = [
    {
      title: 'Trang chủ',
      to: '/',
      icon: <HomeFilled />,
    },
    {
      title: 'Bài viết',
      to: '/blogs',
    },
    {
      title: 'Khoá học',
      to: '/courses',
    },
    {
      title: 'Liên hệ chuyên gia',
      to: '/contact-specialists',
    },
    {
      title: 'Về chúng tôi',
      to: '/about-us',
    },
    {
      render: () =>
        localStorage?.getItem('unihack-access-token') ? (
          <UserInfo />
        ) : (
          <div className="flex items-center gap-4">
            <div className="mr-4 border-b-primary-color transition-all hover:border-b-4">
              <Link to="/sign-up">
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
      <div>LOGO</div>
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
