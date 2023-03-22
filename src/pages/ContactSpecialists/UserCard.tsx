import { Avatar, Button, Card, Row, Typography } from 'antd';
import { EyeFilled } from '@ant-design/icons';
import User from '#/assets/images/user.png';

export default function UserCard() {
  return (
    <Card className="shadow-xl transition-all hover:scale-[105%]">
      <Row align="middle" className="flex items-center gap-4">
        <div className="absolute z-50 h-[50px] w-[50px]">
          <div className="absolute right-0 bottom-0 h-3 w-3 rounded-full bg-success-color"></div>
        </div>
        <Avatar src={User} size={50} />
        <div className="flex flex-col justify-center">
          <Typography className="text-base font-bold text-primary-color">
            Nguyen Chau Quang Minh
          </Typography>
          <Typography>mnhngn20@gmail.com</Typography>
        </div>
        <div className="absolute right-0 bottom-0 m-4">
          <Button shape="round" size="small" type="primary">
            View Profile
            <EyeFilled />
          </Button>
        </div>
      </Row>
    </Card>
  );
}
