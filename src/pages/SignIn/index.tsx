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
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useState } from 'react';
import { auth, googleProvider } from '../../shared/utils/firebase';
import LoginImage from '#/assets/images/login.jpg';

export default function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  onAuthStateChanged(auth, currUser => {
    if (currUser) {
      navigate('/');
    }
  });

  const loginWithEmailAndPassword = async () => {
    try {
      if (!auth.currentUser) {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/');
      }
    } catch (error) {
      navigate('/sign-in');
    }
  };

  const loginWithGoogleAccount = async () => {
    try {
      if (!auth.currentUser) {
        await signInWithPopup(auth, googleProvider);
        navigate('/');
      }
      navigate('/');
    } catch (error) {
      navigate('/sign-in');
    }
  };

  return (
    <Form className="flex items-center" layout="vertical">
      <Row className="w-full rounded-xl shadow-2xl" align="middle">
        <Col span={14} className="flex items-center justify-center">
          <Image
            src={LoginImage}
            width={1000}
            preview={false}
            className="rounded-l-xl"
          />
        </Col>
        <Col span={10} className="flex items-center px-8">
          <Row justify="center" gutter={[16, 16]}>
            <Col span={24}>
              <Typography className="flex justify-center text-3xl font-bold text-primary-color">
                ĐĂNG NHẬP
              </Typography>
            </Col>
            <Col span={24} className="mt-2 flex flex-col gap-2">
              <Typography className="text-base">Email:</Typography>
              <Form.Item noStyle>
                <Input
                  placeholder="Nhập email"
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={24} className="mb-4 flex flex-col gap-2">
              <Typography className="text-base">Mật khẩu:</Typography>
              <Form.Item noStyle>
                <Input.Password
                  placeholder="Nhập mật khẩu"
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={24} className="flex items-center justify-between">
              <Typography className="flex cursor-pointer gap-2 border-surface-white text-primary-color">
                Quên mật khẩu?
              </Typography>
              <div className="flex items-center gap-2">
                <Checkbox />
                Lưu mật khẩu
              </div>
            </Col>
            <Col span={24}>
              <Button
                type="primary"
                block
                htmlType="button"
                onClick={loginWithEmailAndPassword}
              >
                Đăng nhập
              </Button>
            </Col>
            <Col span={24}>
              <Button
                type="primary"
                block
                className="border-none bg-color-accent-blue"
              >
                Đăng nhập với Facebook <FacebookFilled />
              </Button>
            </Col>
            <Col span={24}>
              <Button
                block
                className="bg-[white] text-[black]"
                onClick={loginWithGoogleAccount}
              >
                Đăng nhập với Google
                <GoogleOutlined className="text-error-color" />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}
