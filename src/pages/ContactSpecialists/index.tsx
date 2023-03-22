import { SearchOutlined } from '@ant-design/icons';
import { Col, Input, Row } from 'antd';
import ChatBox from './ChatBox';
import UserCard from './UserCard';

export default function ContactSpecialist() {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={8} className="flex flex-col gap-8">
          <Input
            className="rounded-xl shadow-lg"
            placeholder="Tìm kiếm thông tên chuyên gia"
            size="large"
            suffix={<SearchOutlined />}
          />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </Col>
        <Col span={16}>
          <ChatBox />
        </Col>
      </Row>
    </div>
  );
}
