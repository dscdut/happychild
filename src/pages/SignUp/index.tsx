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
} from 'antd';
import { useNavigate } from 'react-router-dom';
import LoginImage from '#/assets/images/login.png';

export default function SignUpPage() {
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
                ĐĂNG KÝ
              </Typography>
            </Col>
            <Col span={24} className="mt-4 flex flex-col gap-2">
              <Typography className="text-base">Tên:</Typography>
              <Form.Item noStyle>
                <Input placeholder="Nhập tên của bạn" />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">Email:</Typography>
              <Form.Item noStyle>
                <Input placeholder="Nhập email của bạn" />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">Mật khẩu</Typography>
              <Form.Item noStyle>
                <Input.Password placeholder="Nhập mật khẩu" />
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
                    <Input.Password placeholder="Nhập địa chỉ" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={24} className="mb-4 flex flex-col gap-2">
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Typography className="text-base">Số điện thoại:</Typography>
                  <Form.Item noStyle>
                    <Input placeholder="Nhập số điện thoại" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Typography className="text-base">Tuổi:</Typography>
                  <Form.Item noStyle>
                    <InputNumber className="w-full" placeholder="Nhập tuổi" />
                  </Form.Item>
                </Col>
              </Row>
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
