import { Button, Form, Input, Image, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import LoginImage from '#/assets/images/login.png';

export default function SignInPage() {
  const navigate = useNavigate();

  const onSubmit = () => {
    localStorage?.setItem('unihack-access-token', 'granted');
    navigate('/');
  };

  return (
    <Form className="flex items-center" onFinish={onSubmit}>
      <Image src={LoginImage} width={700} preview={false} />
      <div className="flex h-full w-[25rem] flex-col items-center justify-center gap-4 p-10">
        <Typography className="text-2xl font-bold text-primary-color">
          SIGN IN
        </Typography>
        <Form.Item label="Your email">
          <Input placeholder="Enter your email" className="w-[25rem]" />
        </Form.Item>
        <Form.Item label="Your Password">
          <Input placeholder="Enter your password" className="w-[25rem]" />
        </Form.Item>
        <div className="flex items-center gap-2">
          <Button>Back</Button>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </div>
      </div>
    </Form>
  );
}
