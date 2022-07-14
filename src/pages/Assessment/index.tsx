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
} from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Assessment() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Card className="w-[50rem] shadow-md">
        <Form>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Typography className="text-3xl font-bold text-primary-color">
                Fill in you child information
              </Typography>
            </Col>
            <Col span={24} className="mt-4 flex flex-col gap-2">
              <Typography className="text-base">Your child name:</Typography>
              <Form.Item noStyle>
                <Input placeholder="Enter your email" />
              </Form.Item>
            </Col>
            <Col span={24} className="mb-4 flex flex-col gap-2">
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Typography className="text-base">Age:</Typography>
                  <Form.Item noStyle>
                    <InputNumber
                      className="w-full"
                      placeholder="Enter your age"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Typography className="text-base">Age:</Typography>
                  <Form.Item noStyle>
                    <Input placeholder="Enter your phone number" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={24} className="flex items-center justify-end">
              <Button
                type="primary"
                onClick={() => navigate('/assessment/start')}
              >
                Start Assessment <RightOutlined />
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
}
