import {
  Button,
  Form,
  Input,
  Image,
  Typography,
  Row,
  Col,
  InputNumber,
  Radio,
  Checkbox,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../../shared/utils/firebase';
import SignUp from '#/assets/images/new-sign-up.jpg';
import HappyChild from '#/assets/images/new-logo.jpg';
import { DatePicker } from '#/shared/components/DatePicker';

export default function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [colSpan , setColSpan] = useState(12);
  const [heightImage , setHeightImage] = useState(1000);

  useEffect(()=>{
    if(window.innerWidth < 1280 ){
      setColSpan(24);
      setHeightImage(400);
    }
  },[])

  const onSubmit = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        async userCredential => {
          await updateProfile(userCredential.user, {
            displayName: fullName,
          });

          navigate('/');
        },
      );
    } catch (error) {
      console.log(error);

      navigate('/sign-up');
    }
  };

  return (
    <Form className="flex items-center" onFinish={onSubmit} layout="vertical">
      <Row className="w-full rounded-xl shadow-2xl" align="middle">
        <Col span={colSpan} className="flex">
          <Image
            src={SignUp}
            height={heightImage}
            width={
              window.innerWidth < 1280 ? `${(colSpan / 24) * 100}%` : undefined
            }
            className="w-full object-cover lg:rounded-l-xl"
            preview={false}
          />
        </Col>
        <Col
          span={colSpan}
          className="mb-8 flex items-center px-8 lg:-mt-40 lg:mb-0"
        >
          <Row justify="center" gutter={[16, 16]}>
            <Col span={24} className="flex justify-center">
              {/* <Image
                src={HappyChild}
                height={150}
                className="rounded-l-xl object-cover"
                preview={false}
              /> */}
            </Col>
            <Col span={24}>
              <Typography className="flex justify-center text-3xl font-bold text-primary-color">
                Sign up
              </Typography>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">
                <span style={{ color: 'red' }} className="mr-1">
                  *
                </span>
                Full Name:
              </Typography>
              <Form.Item
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: 'Enter your name',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <Input
                  placeholder="Enter your name"
                  onChange={e => {
                    setFullName(e.target.value);
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">
                <span style={{ color: 'red' }} className="mr-1">
                  *
                </span>
                Email:
              </Typography>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Enter your email',
                  },
                  {
                    type: 'email',
                    message: 'Invalid email',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <Input
                  placeholder="Enter your email"
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">
                <span style={{ color: 'red' }} className="mr-1">
                  *
                </span>
                Password
              </Typography>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Enter your password',
                  },
                  {
                    min: 8,
                    message: 'Password must be at least 8 characters',
                  },
                  {
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/,
                    message:
                      'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, or special character',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <Input.Password
                  placeholder="Enter password"
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col justify-start gap-2">
              <Typography className="text-base">
                <span style={{ color: 'red' }} className="mr-1">
                  *
                </span>
                Gender:
              </Typography>
              <Form.Item
                name="gender"
                rules={[
                  {
                    required: true,
                    message: 'Please choose your gender',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <Radio.Group>
                  <Row align="middle" gutter={[16, 16]}>
                    <Col>
                      <Radio value="male">Male</Radio>
                    </Col>
                    <Col>
                      <Radio value="female">Female</Radio>
                    </Col>
                    <Col>
                      <Radio value="other">Other</Radio>
                    </Col>
                  </Row>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Row gutter={[16, 16]}>
                <Col span={16}>
                  <Typography className="text-base">Address:</Typography>
                  <Form.Item noStyle>
                    <Input placeholder="Enter your address" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Row gutter={[16, 16]}>
                <Col span={colSpan}>
                  <Typography className="text-base">
                    <span style={{ color: 'red' }} className="mr-1">
                      *
                    </span>
                    Phone Number:
                  </Typography>
                  <Form.Item
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: 'Enter your phone number',
                      },
                      {
                        pattern: /^0[0-9]{9,10}$/,
                        message: 'Invalid Phone Number',
                      },
                    ]}
                    style={{ marginBottom: 0 }}
                  >
                    <Input placeholder="Enter your phone number" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Typography className="text-base">
                    <span style={{ color: 'red' }} className="mr-1">
                      *
                    </span>
                    Identity Card:
                  </Typography>
                  <Form.Item
                    name="citizenId"
                    rules={[
                      {
                        required: true,
                        message: 'Enter your Identity Card',
                      },
                      {
                        pattern: /^[0-9]{9,12}$/,
                        message: 'Invalid Identity Card',
                      },
                    ]}
                    style={{ marginBottom: 0 }}
                  >
                    <InputNumber
                      className="w-full"
                      placeholder="Enter your Identity Card"
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">
                <span style={{ color: 'red' }} className="mr-1">
                  *
                </span>
                Date of Birth:
              </Typography>
              <Form.Item
                name="birthday"
                rules={[
                  {
                    required: true,
                    message: 'Select date of birth',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <DatePicker
                  className="w-full"
                  placeholder="Select date of birth"
                />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col justify-start gap-2">
              <Typography className="text-base">
                How did you hear about{' '}
                <span className="text-primary-color">HappyChild</span>:
              </Typography>
              <Form.Item noStyle>
                <Checkbox.Group>
                  <Row align="middle" gutter={[16, 16]}>
                    <Col>
                      <Checkbox value="social">Social Media</Checkbox>
                    </Col>
                    <Col>
                      <Checkbox value="news">Press, News</Checkbox>
                    </Col>
                    <Col>
                      <Checkbox value="advertisement">Advertising</Checkbox>
                    </Col>
                    <Col>
                      <Checkbox value="relationship">Relatives</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Button type="primary" block htmlType="submit">
                Create an acount
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}
