import { Avatar, Button, Card, Col, Input, Row, Typography } from 'antd';
import {
  FileImageOutlined,
  MoreOutlined,
  PhoneOutlined,
  SendOutlined,
} from '@ant-design/icons';
import LeftMessageBox from './LeftMessageBox';
import RightMessageBox from './RightMessageBox';
import User from '#/assets/images/user.png';

export default function ChatBox() {
  return (
    <Card
      className="h-[650px] shadow-xl"
      title={
        <div className="relative flex items-center justify-between">
          <Avatar src={User} size={50} />
          <Typography className="font-bold">
            Professor Dr. Nguyen Cong Nhat Thien
          </Typography>
          <div className="flex items-center gap-2">
            <Button shape="circle" type="primary">
              <PhoneOutlined />
            </Button>
            <Button shape="circle">
              <MoreOutlined />
            </Button>
          </div>
        </div>
      }
    >
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <LeftMessageBox content="Hello, how can i help you ?" />
        </Col>
        <Col span={24} className="flex justify-end">
          <RightMessageBox content="I would like to inquire further about how to guide children so that they can actively communicate with adults when faced with difficulties" />
        </Col>
        <Col span={24}>
          <LeftMessageBox content="Could you please provide me with more information about your child ?" />
        </Col>
        <Col span={24} className="flex justify-end">
          <RightMessageBox content="His name is Vo Dinh Nam, 5 years old, he is having indications of communication apprehension" />
        </Col>
      </Row>
      <div className="absolute left-0 bottom-0 w-full">
        <Input.TextArea className="w-full rounded-xl shadow-xl" rows={5} />
        <div className="absolute right-0 top-[75px] m-3 flex items-center gap-2">
          <Button shape="circle" type="primary">
            <SendOutlined />
          </Button>
          <Button shape="circle" type="primary">
            <FileImageOutlined />
          </Button>
        </div>
      </div>
    </Card>
  );
}
