import {
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Typography,
  Image,
  Radio,
} from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Store } from 'antd/lib/form/interface';
import Children from '#/assets/images/children.jpg';
import { DatePicker } from '#/shared/components/DatePicker';

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 0;
  }
`;

export default function Assessment() {
  const navigate = useNavigate();

  const onSubmit = (values: Store) => {
    localStorage?.setItem('childInformation', JSON.stringify(values));
    navigate('/assessment/start');
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <StyledCard className="w-[50rem] shadow-md">
        <Form onFinish={onSubmit}>
          <Col span={24}>
            <Image src={Children} className="rounded-t-2xl" preview={false} />
          </Col>
          <Row gutter={[16, 16]} className="p-4">
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-2xl font-bold text-primary-color">
                Vui lòng điền chính xác thông tin trẻ nhỏ để hệ thống tiến hành
                đánh giá
              </Typography>
              <Typography className="text-xs font-bold italic text-error-color">
                * Lưu ý những thông tin được điền vào ở đây không dùng cho mục
                đích thương mại, hệ thống sẽ ghi nhận thông tin để thu thập thêm
                dữ liệu cho việc cải tiến hệ thống đánh giá
              </Typography>
            </Col>
            <Col span={24} className="mt-4 flex flex-col gap-2">
              <Typography className="text-base">
                Tên bé (<span className="text-error-color">*</span>):
              </Typography>
              <Form.Item name="name" noStyle>
                <Input placeholder="Nhập họ và tên của bé" />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Typography className="text-base">
                    Ngày sinh của bé (
                    <span className="text-error-color">*</span>):
                  </Typography>
                  <Form.Item noStyle>
                    <DatePicker
                      className="w-full"
                      placeholder="Chọn ngày sinh của bé"
                    />
                  </Form.Item>
                </Col>
                <Col span={12} className="flex flex-col justify-start gap-2">
                  <Typography className="text-base">
                    Giới tính (<span className="text-error-color">*</span>):
                  </Typography>
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
              </Row>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">
                Địa chỉ thường trú của phụ huynh / người bảo hộ (
                <span className="text-error-color">*</span>):
              </Typography>
              <Form.Item noStyle name="address">
                <Input placeholder="Nhập địa chỉ thường trú" />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">
                Số điện thoại phụ huynh / người bảo hộ (
                <span className="text-error-color">*</span>):
              </Typography>
              <Form.Item noStyle name="phoneNumber">
                <Input placeholder="Nhập số điện thoại" />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">
                Bé được sinh vào tuần thứ mấy của thai kỳ? (
                <span className="text-error-color">*</span>)
              </Typography>
              <Form.Item noStyle className="birthWeek">
                <InputNumber className="w-full" placeholder="Nhập số tuần" />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">
                Hiện bé có đang theo học trường mầm non nào không? (
                <span className="text-error-color">*</span>)
              </Typography>
              <Form.Item noStyle name="isTìm hiểu thêming">
                <Radio.Group>
                  <Row align="middle" gutter={[16, 16]}>
                    <Col>
                      <Radio value={true}>Có</Radio>
                    </Col>
                    <Col>
                      <Radio value={false}>Không</Radio>
                    </Col>
                  </Row>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">
                Nếu có, vui lòng điền tên trường bé đang theo học:
              </Typography>
              <Form.Item noStyle name="schoolName">
                <Input placeholder="Nhập trường bé đang theo học" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Typography className="text-sm italic">
                * Nếu có thông tin nào cần giải đáp, vui lòng liên hệ qua
                hotline: 0935573483
              </Typography>
            </Col>
            <Col span={24} className="flex items-center justify-end">
              <Button type="primary" htmlType="submit">
                Bắt đầu bài đánh giá <RightOutlined />
              </Button>
            </Col>
          </Row>
        </Form>
      </StyledCard>
    </div>
  );
}
