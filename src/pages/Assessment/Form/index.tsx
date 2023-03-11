import { RightOutlined } from '@ant-design/icons';
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
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Store } from 'antd/lib/form/interface';
import { ref, push, onValue } from 'firebase/database';
import { useEffect } from 'react';
import { realTimeDatabase, auth } from '../../../shared/utils/firebase';
import Children from '#/assets/images/children.jpg';
import { DatePicker } from '#/shared/components/DatePicker';

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 0;
  }
`;

export default function Assessment() {
  const navigate = useNavigate();

  // check if user has already filled the form before
  useEffect(() => {
    const childrenRef = ref(
      realTimeDatabase,
      `children/${auth.currentUser?.uid}`,
    );
    onValue(childrenRef, snapshot => {
      if (snapshot.exists()) {
        navigate('/assessment/start');
      }
    });
  }, []);

  const onSubmit = (values: Store) => {
    const birthday = values.birthday.format('YYYY-MM-DD');
    const { kindergartenName } = values;
    if (kindergartenName === undefined) {
      values.kindergartenName = '';
    }
    const data = {
      info: {
        ...values,
        birthday,
      },
    };

    push(ref(realTimeDatabase, `children/${auth.currentUser?.uid}`), data);

    navigate('/assessment/start');
  };

  const calculateAgeInMonths = (birthday: string) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const ageInMonths = today.getFullYear() - birthDate.getFullYear();

    return ageInMonths * 12 + monthDiff;
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
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập tên của trẻ',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <Input placeholder="Nhập họ và tên của trẻ" />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Typography className="text-base">
                    Ngày sinh của bé (
                    <span className="text-error-color">*</span>):
                  </Typography>
                  <Form.Item
                    name="birthday"
                    validateFirst={true}
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng chọn ngày sinh của trẻ',
                      },
                      {
                        validator: (_, value) => {
                          const ageInMonths = calculateAgeInMonths(
                            value.format('YYYY-MM-DD'),
                          );

                          // check if age is between 0 and 72 months
                          if (ageInMonths < 0 || ageInMonths > 72) {
                            return Promise.reject(
                              'Tuổi của trẻ phải nằm trong khoảng từ 0 đến 72 tháng',
                            );
                          }

                          return Promise.resolve();
                        },
                      },
                    ]}
                    style={{ marginBottom: 0 }}
                  >
                    <DatePicker
                      className="w-full"
                      placeholder="Chọn ngày sinh của trẻ"
                    />
                  </Form.Item>
                </Col>
                <Col span={12} className="flex flex-col justify-start gap-2">
                  <Typography className="text-base">
                    Giới tính (<span className="text-error-color">*</span>):
                  </Typography>
                  <Form.Item
                    name="gender"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng chọn giới tính của trẻ',
                      },
                    ]}
                    style={{ marginBottom: 0 }}
                  >
                    <Radio.Group>
                      <Row align="middle" gutter={[16, 16]}>
                        <Col>
                          <Radio value={true}>Nam</Radio>
                        </Col>
                        <Col>
                          <Radio value={false}>Nữ</Radio>
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
              <Form.Item
                name="addressOfParents"
                rules={[
                  {
                    required: true,
                    message:
                      'Vui lòng nhập địa chỉ thường trú của phụ huynh / nguời bảo hộ',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <Input placeholder="Nhập địa chỉ thường trú" />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">
                Số điện thoại phụ huynh / người bảo hộ (
                <span className="text-error-color">*</span>):
              </Typography>
              <Form.Item
                name="phoneNumberOfParents"
                rules={[
                  {
                    required: true,
                    message:
                      'Vui lòng nhập số điện thoại của phụ huynh / nguời bảo hộ',
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
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">
                Bé được sinh vào tuần thứ mấy của thai kỳ? (
                <span className="text-error-color">*</span>)
              </Typography>
              <Form.Item
                name="weekOfPregnancy"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập tuần thai kỳ của trẻ',
                  },
                  {
                    pattern: /^[0-9]{1,2}$/,
                    message: 'Tuần thai kỳ không hợp lệ',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <InputNumber className="w-full" placeholder="Nhập số tuần" />
              </Form.Item>
            </Col>
            <Col span={24} className="flex flex-col gap-2">
              <Typography className="text-base">
                Hiện bé có đang theo học trường mầm non nào không? (
                <span className="text-error-color">*</span>)
              </Typography>
              <Form.Item
                name="isGoingToKindergarten"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn có hoặc không',
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
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
              <Form.Item noStyle name="kindergartenName">
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
