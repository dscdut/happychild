import { Col, Input, Row } from 'antd';
import Course from './Course';
import Navbar from './Navbar';

export const AuthorList = [
  {
    id: 1,
    avatar:
      'https://www.openaccessgovernment.org/wp-content/uploads/2022/05/dreamstime_m_8685934-scaled.jpg',
    name: 'John Doe',
    work: 'Department of Psychology',
    des: 'Khóa học dành cho bố mẹ của trẻ nghi ngờ hoặc có tự kỷ, chậm phát triển, chậm nói, v.v. được xây dựng từ các phương pháp can thiệp có nhiều bằng chứng và từ kinh nghiệm hướng dẫn can thiệp trên hơn 400 gia đình tại các tỉnh thành Việt Nam',
  },
  {
    id: 2,
    avatar:
      'https://www.openaccessgovernment.org/wp-content/uploads/2022/05/dreamstime_m_8685934-scaled.jpg',
    name: 'John Doe',
    work: 'Department of Psychology',
    des: 'Khóa học dành cho bố mẹ của trẻ nghi ngờ hoặc có tự kỷ, chậm phát triển, chậm nói, v.v. được xây dựng từ các phương pháp can thiệp có nhiều bằng chứng và từ kinh nghiệm hướng dẫn can thiệp trên hơn 400 gia đình tại các tỉnh thành Việt Nam',
  },
  {
    id: 3,
    avatar:
      'https://www.openaccessgovernment.org/wp-content/uploads/2022/05/dreamstime_m_8685934-scaled.jpg',
    name: 'John Doe',
    work: 'Department of Psychology',
    des: 'Khóa học dành cho bố mẹ của trẻ nghi ngờ hoặc có tự kỷ, chậm phát triển, chậm nói, v.v. được xây dựng từ các phương pháp can thiệp có nhiều bằng chứng và từ kinh nghiệm hướng dẫn can thiệp trên hơn 400 gia đình tại các tỉnh thành Việt Nam',
  },
  {
    id: 4,
    avatar:
      'https://www.openaccessgovernment.org/wp-content/uploads/2022/05/dreamstime_m_8685934-scaled.jpg',
    name: 'John Doe',
    work: 'Department of Psychology',
    des: 'Khóa học dành cho bố mẹ của trẻ nghi ngờ hoặc có tự kỷ, chậm phát triển, chậm nói, v.v. được xây dựng từ các phương pháp can thiệp có nhiều bằng chứng và từ kinh nghiệm hướng dẫn can thiệp trên hơn 400 gia đình tại các tỉnh thành Việt Nam',
  },
];

export const myData = [
  { title: 'Danh mục', input: <Input placeholder="Tìm kiếm" /> },
  { title: 'Vị trí', input: <Input placeholder="Tìm kiếm" /> },
  { title: 'Khả năng' },
  { title: 'Thể loại' },
];

export const treeData = [
  {
    title: 'Trẻ Sơ Sinh',
    key: 'Trẻ Sơ Sinh',
    children: [
      {
        title: 'Sách',
        key: 'Sách',
      },
      {
        title: 'Chăm Sóc',
        key: 'Chăm Sóc',
      },
      {
        title: 'Quan Tâm ',
        key: 'Quan Tâm ',
      },
    ],
  },
  {
    title: 'Trẻ Từ 6 - 10 Tuổi',
    key: 'Trẻ Từ 6 - 10 Tuổi',
    children: [
      {
        title: 'Sách Dạy',
        key: 'Sách Dạy',
      },
      {
        title: 'Chăm Sóc1',
        key: 'Chăm Sóc1',
      },
      {
        title: 'Tâm Sự',
        key: 'Tâm Sự ',
      },
    ],
  },
  {
    title: 'Trẻ Vị Thanh Niên',
    key: 'Trẻ Vị Thanh Niên',
    children: [
      {
        title: 'Trò Chơi',
        key: 'Trò Chơi',
      },
      {
        title: 'Chăm Sóc2',
        key: 'Chăm Sóc2',
      },
      {
        title: 'Chia Sẽ ',
        key: 'Chia Sẽ ',
      },
    ],
  },
];

function Courses() {
  return (
    <Row gutter={[24, 24]}>
      <Col span={6}>
        <Navbar />
      </Col>
      <Col span={18}>
        <Course />
      </Col>
    </Row>
  );
}

export default Courses;
