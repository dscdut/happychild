import {
  Button,
  Form,
  Input,
  Image,
  Typography,
  Row,
  Col,
  Select,
  InputNumber,
  Avatar,
  Radio,
  Checkbox,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import SignUp from '#/assets/images/signup.jpg';
import UserImage from '#/assets/images/avatar.png';
import { DatePicker } from '#/shared/components/DatePicker';

export default function SignUpPage() {
  const navigate = useNavigate();

  const onSubmit = () => {
    localStorage?.setItem('unihack-access-token', 'granted');
    navigate('/');
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
            <Col
              span={24}
              className="flex flex-col items-center justify-center"
            >
              <Avatar size={90} src={UserImage} />
              <Typography>Chọn ảnh đại diện</Typography>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">Họ và Tên:</Typography>
              <Form.Item noStyle>
                <Input placeholder="Nhập tên của bạn" />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">Mật khẩu</Typography>
              <Form.Item noStyle>
                <Input.Password placeholder="Nhập mật khẩu" />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">Email:</Typography>
              <Form.Item noStyle>
                <Input placeholder="Nhập email của bạn" />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col justify-start gap-2">
              <Typography className="text-base">Giới tính:</Typography>
              <Form.Item noStyle>
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
                <Col span={8}>
                  <Typography className="text-base">Quốc gia:</Typography>
                  <Form.Item noStyle>
                    <Select placeholder="Chọn quốc gia" className="w-full" />
                  </Form.Item>
                </Col>
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
                  <Typography className="text-base">Số điện thoại:</Typography>
                  <Form.Item noStyle>
                    <Input placeholder="Nhập số điện thoại" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Typography className="text-base">CMND / CCCD:</Typography>
                  <Form.Item noStyle>
                    <InputNumber
                      className="w-full"
                      placeholder="Nhập CCCD / CMND"
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">Ngày sinh:</Typography>
              <Form.Item noStyle>
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
                      <Checkbox value="male">Mạng xã hội</Checkbox>
                    </Col>
                    <Col>
                      <Checkbox value="female">Báo chí, tin tức</Checkbox>
                    </Col>
                    <Col>
                      <Checkbox value="female">Quảng cáo</Checkbox>
                    </Col>
                    <Col>
                      <Checkbox value="other">Người thân</Checkbox>
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
