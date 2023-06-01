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
import { GoogleOutlined } from '@ant-design/icons';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth, googleProvider } from '../../shared/utils/firebase';
import LoginImage from '#/assets/images/login.jpg';

export default function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [colSpan , setColSpan ] = useState(12)


  useEffect(()=>{
    if(window.innerWidth < 768 ){
      setColSpan(24);
    }
  },[])

  onAuthStateChanged(auth, currUser => {
    if (currUser) {
      navigate('/');
    }
  });

  const loginWithEmailAndPassword = async () => {
    try {
      if (!auth.currentUser) {
        await signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            navigate('/');
          })
          .catch(() => {
            setErrorMessage('Email or password is incorrect');
          });
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

  const redirectToSignUp = () => {
    navigate('/sign-up');
  };

  return (
    <Form className="flex items-center" layout="vertical">
      <Row className="w-full rounded-xl shadow-2xl" align="middle">
        <Col span={colSpan} className="flex items-center justify-center">
          <Image
            src={LoginImage}
            width={1000}
            preview={false}
            className="sm:rounded-l-xl"
          />
        </Col>
        <Col span={colSpan} className="flex items-center px-8 mb-8 sm:m-0 mt-8 sm">
          <Row justify="center" gutter={[16, 16]}>
            <Col span={24}>
              <Typography className="flex justify-center text-3xl font-bold text-primary-color">
                Log in
              </Typography>
              <Typography className="flex justify-center text-base text-secondary-color">
                Don't have an account ?&nbsp;
                <a onClick={redirectToSignUp}>Sign up</a>
              </Typography>
              <Typography.Text type="danger" className="flex justify-center">
                {errorMessage}
              </Typography.Text>
            </Col>
            <Col span={24} className="mt-2 flex flex-col gap-2">
              <Typography className="text-base">Email:</Typography>
              <Form.Item noStyle>
                <Input
                  placeholder="Enter email"
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={24} className="mb-4 flex flex-col gap-2">
              <Typography className="text-base">Password:</Typography>
              <Form.Item noStyle>
                <Input.Password
                  placeholder="Enter Password"
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={24} className="flex items-center justify-between">
              <Typography className="flex cursor-pointer gap-2 border-surface-white text-primary-color">
                Forgot password?
              </Typography>
              <div className="flex items-center gap-2">
                <Checkbox />
                Remeber password
              </div>
            </Col>
            <Col span={24}>
              <Button
                type="primary"
                block
                htmlType="button"
                onClick={loginWithEmailAndPassword}
              >
                Log in
              </Button>
            </Col>
            <Col span={24} className='mb-4'>
              <Button
                block
                className="bg-[white] text-[black]"
                onClick={loginWithGoogleAccount}
              >
                Log in with Google
                <GoogleOutlined className="text-error-color" />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}
