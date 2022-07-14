import {
  Button,
  Form,
  Input,
  Image,
  Typography,
  Row,
  Col,
  Checkbox,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { FacebookFilled, GoogleOutlined } from '@ant-design/icons';
import LoginImage from '#/assets/images/login.png';

export default function SignInPage() {
  const navigate = useNavigate();

  const onSubmit = () => {
    localStorage?.setItem('unihack-access-token', 'granted');
    navigate('/');
  };

  return (
    <Form className="flex items-center" onFinish={onSubmit} layout="vertical">
      <Row
        className="w-full rounded-lg border-2 border-secondary-color"
        align="middle"
      >
        <Col
          span={14}
          className="flex items-center justify-center bg-secondary-color p-8"
        >
          <Image src={LoginImage} width={600} preview={false} />
        </Col>
        <Col span={10} className="flex items-center px-8">
          <Row justify="center" gutter={[16, 16]}>
            <Col span={24}>
              <Typography className="flex justify-center text-3xl font-bold text-primary-color">
                SIGN IN
              </Typography>
            </Col>
            <Col span={24} className="mt-4 flex flex-col gap-2">
              <Typography className="text-base">Your email:</Typography>
              <Form.Item noStyle>
                <Input placeholder="Enter your email" />
              </Form.Item>
            </Col>
            <Col span={24} className="mb-4 flex flex-col gap-2">
              <Typography className="text-base">Your password:</Typography>
              <Form.Item noStyle>
                <Input.Password placeholder="Enter your password" />
              </Form.Item>
            </Col>
            <Col span={24} className="flex items-center justify-between">
              <Typography className="flex gap-2 border-surface-white">
                Forgot your password?
                <span className="cursor-pointer text-primary-color">
                  Get it back!
                </span>
              </Typography>
              <div className="flex items-center gap-2">
                <Checkbox />
                Remember me
              </div>
            </Col>
            <Col span={24}>
              <Button type="primary" block htmlType="submit">
                Sign In
              </Button>
            </Col>
            <Col span={24}>
              <Button
                type="primary"
                block
                className="border-none bg-color-accent-blue"
              >
                Login with Facebook <FacebookFilled />
              </Button>
            </Col>
            <Col span={24}>
              <Button block className="bg-[white] text-[black]">
                Login with Google
                <GoogleOutlined className="text-error-color" />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}
