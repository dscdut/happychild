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
import { useState } from 'react';
import { auth } from '../../shared/utils/firebase';
import SignUp from '#/assets/images/signup.jpg';
import { DatePicker } from '#/shared/components/DatePicker';

export default function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

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
        <Col span={12} className="flex">
          <Image
            src={SignUp}
            height={1000}
            className="rounded-l-xl object-cover"
            preview={false}
          />
        </Col>
        <Col span={12} className="mt-4 flex items-center px-8">
          <Row justify="center" gutter={[16, 16]}>
            <Col span={24}>
              <Typography className="flex justify-center text-3xl font-bold text-primary-color">
                ĐĂNG KÝ
              </Typography>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">
                <span style={{ color: 'red' }} className="mr-1">
                  *
                </span>
                Họ và Tên:
              </Typography>
              <Form.Item
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập họ và tên của bạn',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <Input
                  placeholder="Nhập tên của bạn"
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
                    message: 'Vui lòng nhập email của bạn',
                  },
                  {
                    type: 'email',
                    message: 'Email không hợp lệ',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <Input
                  placeholder="Nhập email của bạn"
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
                Mật khẩu
              </Typography>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập mật khẩu của bạn',
                  },
                  {
                    min: 8,
                    message: 'Mật khẩu phải có ít nhất 8 ký tự',
                  },
                  {
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    message:
                      'Mật khẩu phải có ít nhất 1 chữ hoa, 1 chữ thường và 1 số',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <Input.Password
                  placeholder="Nhập mật khẩu"
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
                Giới tính:
              </Typography>
              <Form.Item
                name="gender"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn giới tính của bạn',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <Radio.Group>
                  <Row align="middle" gutter={[16, 16]}>
                    <Col>
                      <Radio value="male">Nam</Radio>
                    </Col>
                    <Col>
                      <Radio value="female">Nữ</Radio>
                    </Col>
                    <Col>
                      <Radio value="other">Khác</Radio>
                    </Col>
                  </Row>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Row gutter={[16, 16]}>
                <Col span={16}>
                  <Typography className="text-base">Địa chỉ:</Typography>
                  <Form.Item noStyle>
                    <Input placeholder="Nhập địa chỉ" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Typography className="text-base">
                    <span style={{ color: 'red' }} className="mr-1">
                      *
                    </span>
                    Số điện thoại:
                  </Typography>
                  <Form.Item
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập số điện thoại của bạn',
                      },
                      {
                        pattern: /^0[0-9]{9,10}$/,
                        message: 'Số điện thoại không hợp lệ',
                      },
                    ]}
                    style={{ marginBottom: 0 }}
                  >
                    <Input placeholder="Nhập số điện thoại" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Typography className="text-base">
                    <span style={{ color: 'red' }} className="mr-1">
                      *
                    </span>
                    CMND / CCCD:
                  </Typography>
                  <Form.Item
                    name="citizenId"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập số CMND / CCCD của bạn',
                      },
                      {
                        pattern: /^[0-9]{9,12}$/,
                        message: 'Số CMND / CCCD không hợp lệ',
                      },
                    ]}
                    style={{ marginBottom: 0 }}
                  >
                    <InputNumber
                      className="w-full"
                      placeholder="Nhập CCCD / CMND"
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
                Ngày sinh:
              </Typography>
              <Form.Item
                name="birthday"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn ngày sinh của bạn',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <DatePicker className="w-full" placeholder="Chọn ngày sinh" />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col justify-start gap-2">
              <Typography className="text-base">
                Lý do bạn biết đến{' '}
                <span className="text-primary-color">HappyChild</span>:
              </Typography>
              <Form.Item noStyle>
                <Checkbox.Group>
                  <Row align="middle" gutter={[16, 16]}>
                    <Col>
                      <Checkbox value="social">Mạng xã hội</Checkbox>
                    </Col>
                    <Col>
                      <Checkbox value="news">Báo chí, tin tức</Checkbox>
                    </Col>
                    <Col>
                      <Checkbox value="advertisement">Quảng cáo</Checkbox>
                    </Col>
                    <Col>
                      <Checkbox value="relationship">Người thân</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Button type="primary" block htmlType="submit">
                Tạo tài khoản
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}
