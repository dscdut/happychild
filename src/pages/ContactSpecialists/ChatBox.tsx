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
import { useEffect, useState } from 'react';

export default function ChatBox() {
  const [colSpan,setColSpan] = useState(24);
  useEffect(()=>{
    if(window.innerWidth < 760 ) setColSpan(12)
  },[])

  return (
    <Card
      className="sm:h-[550px] shadow-xl"
      title={
        <div className="relative flex items-center flex-col sm:flex-row justify-between">
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
        <Col span={colSpan} className="flex sm:justify-end break-words w-10">
          <RightMessageBox content="I would like to inquire further about how to guide children" />
        </Col>
        <Col span={24}>
          <LeftMessageBox content="Could you please provide me with more information?" />
        </Col>
        <Col span={colSpan} className="flex sm:justify-end">
          <RightMessageBox content="His name is Vo Dinh Nam, 5 years old, he is having indications of communication apprehension" />
        </Col>
      </Row>
      <div className="sm:absolute left-0 bottom-0 w-full mt-3">
        <Input.TextArea className="w-full rounded-xl shadow-xl" rows={5} />
        <div className="sm:absolute right-0 top-[75px] m-3 flex items-center justify-end gap-2">
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
