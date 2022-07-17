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
      className="h-[800px] shadow-xl"
      title={
        <div className="relative flex items-center justify-between">
          <Avatar src={User} size={50} />
          <Typography className="font-bold">
            Giáo sư Tiến sĩ Nguyễn Công Nhật Thiên
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
          <LeftMessageBox content="Xin chào, tôi có thể giúp gì được?" />
        </Col>
        <Col span={24} className="flex justify-end">
          <RightMessageBox
            content="Tôi muốn hỏi thêm về cách hướng dẫn cho trẻ để trẻ có thể chủ động giao
        tiếp với người lớn khi gặp khó khăn"
          />
        </Col>
        <Col span={24}>
          <LeftMessageBox content="Anh/ Chị có thể cho tôi xin thêm thông tin về cháu được không ạ?" />
        </Col>
        <Col span={24} className="flex justify-end">
          <RightMessageBox content="Cháu tên Trần Văn Kiệm, 4 tuổi, hiện đang có dấu hiệu ngại giao tiếp" />
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
