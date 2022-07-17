import { Col, Input, Row } from 'antd';
import Course from './Course';
import Navbar from './Navbar';

export const AuthorList = [
  {
    id: 1,
    avatar:
      'https://ugc.futurelearn.com/uploads/images/d5/0f/profile_image_d50f4ab9-01cb-4a5b-89e9-d01e5f829457.jpg',
    name: 'Louis Camilleri',
    work: 'Nhà giáo dục & Tâm lý trẻ em',
    des: 'Khóa học sẽ bắt đầu bằng cách khám phá hiểu biết của bạn về chứng tự kỷ, bao gồm các dấu hiệu, triệu chứng, chẩn đoán và nguyên nhân tiềm ẩn. Bạn sẽ khám phá các nhu cầu giáo dục đặc biệt và khuyết tật có thể ảnh hưởng đến khả năng học tập của một đứa trẻ như thế nào.',
    rate: 5,
  },
  {
    id: 2,
    avatar:
      'https://ugc.futurelearn.com/uploads/images/b8/0b/profile_image_b80b3104-b2a3-4236-a992-e274a7401257.jpg',
    name: 'Ervin Howell',
    work: 'Nhà giáo dục & Tâm lý trẻ em',
    des: 'Bạn cũng sẽ tìm hiểu về nhiều phương thức học tập cho học sinh mắc chứng tự kỷ, bao gồm các trường đặc biệt nói chung, các trường đặc biệt dành riêng cho chứng tự kỷ, các đơn vị tự kỷ trong các trường phổ thông và học trong một lớp học chính thống.',
    rate: 5,
  },
  {
    id: 3,
    avatar:
      'https://ugc.futurelearn.com/uploads/images/a7/61/profile_image_a761dfcf-62c3-474f-8d9f-0121677efaed.jpg',
    name: 'Clementine Bauch',
    work: 'Nhà giáo dục & Tâm lý trẻ em',
    des: 'Nội dung rất hay, tôi học được những điều tôi chưa biết về Tự kỷ và cộng đồng người tự kỷ. Có rất nhiều tài nguyên để khám phá.',
    rate: 5,
  },
  {
    id: 4,
    avatar:
      'https://ugc.futurelearn.com/uploads/images/57/27/profile_image_5727ecd1-9e78-4633-9ac2-1161d8c058e7.jpg',
    name: 'Patricia Lebsack',
    work: 'Nhà giáo dục & Tâm lý trẻ em',
    des: 'Đối tượng mục tiêu chính là những người làm việc với trẻ tự kỷ trong trường học, chẳng hạn như giáo viên và trợ giảng. Tuy nhiên, tất cả các học viên đều có thể được hưởng lợi (ví dụ như nhà trị liệu ngôn ngữ và ngôn ngữ). Độ tuổi mục tiêu là giáo dục bắt buộc (4-18 tuổi). Khóa học cũng sẽ mang lại lợi ích cho các bậc cha mẹ quan tâm đến trẻ tự kỷ, cũng như bản thân cộng đồng tự kỷ.',
  },
];

export const ReviewList = [
  {
    id: 1,
    avatar:
      'https://images.pexels.com/photos/1648396/pexels-photo-1648396.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Chelsey Dietrich',
    work: 'Phụ Huynh',
    des: 'Xác định các yêu cầu giáo dục của trẻ em trong phổ tự kỷ có và không có khó khăn về trí tuệ (học tập)',
    rate: 5,
  },
  {
    id: 2,
    avatar:
      'https://images.pexels.com/photos/1096141/pexels-photo-1096141.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Mrs. Dennis Schulist',
    work: 'Phụ Huynh',
    des: 'Suy ngẫm về những gì tạo nên thực hành tốt cho chứng tự kỷ trong môi trường giáo dục',
    rate: 5,
  },
  {
    id: 3,
    avatar:
      'https://images.pexels.com/photos/1157395/pexels-photo-1157395.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Kurtis Weissnat',
    work: 'Phụ Huynh',
    des: 'Nội dung rất hay, tôi học được những điều tôi chưa biết về Tự kỷ và cộng đồng người tự kỷ. Có rất nhiều tài nguyên để khám phá.',
    rate: 5,
  },
  {
    id: 4,
    avatar:
      'https://images.pexels.com/photos/3760279/pexels-photo-3760279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Nicholas Runolfsdottir ',
    work: 'Phụ Huynh',
    des: 'Đối tượng mục tiêu chính là những người làm việc với trẻ tự kỷ trong trường học, chẳng hạn như giáo viên và trợ giảng. Tuy nhiên, tất cả các học viên đều có thể được hưởng lợi (ví dụ như nhà trị liệu ngôn ngữ và ngôn ngữ). Độ tuổi mục tiêu là giáo dục bắt buộc (4-18 tuổi). Khóa học cũng sẽ mang lại lợi ích cho các bậc cha mẹ quan tâm đến trẻ tự kỷ, cũng như bản thân cộng đồng tự kỷ.',
    rate: 5,
  },
];

export const myData = [
  { label: 'Trẻ Từ 0 - 7 Tuổi', input: <Input placeholder="Tìm kiếm" /> },
  { label: 'Trẻ Từ 8 - 10 Tuổi', input: <Input placeholder="Tìm kiếm" /> },
  { label: 'Trẻ Từ 10 - 14 Tuổi', input: <Input placeholder="Tìm kiếm" /> },
  { label: 'Trẻ Từ 14 Tuổi Trở Lên', input: <Input placeholder="Tìm kiếm" /> },
];

export const treeData = [
  {
    title: 'Giáo Dục',
    key: 'Giáo Dục',
    children: [
      {
        title: 'Tài Liệu',
        key: 'Tài Liệu',
      },
      {
        title: 'Chăm Sóc',
        key: 'Chăm Sóc',
      },
      {
        title: 'Nuôi Dưỡng',
        key: 'Nuôi Dưỡng',
      },
    ],
  },
  {
    title: 'Thể Thao',
    key: 'Thể Thao',
    children: [
      {
        title: 'Bóng Đá',
        key: 'Bóng Đá',
      },
      {
        title: 'Cầu Lông',
        key: 'Cầu Lông',
      },
      {
        title: 'Bơi Lội',
        key: 'Bơi Lội',
      },
      {
        title: 'Cầu Long',
        key: 'Cầu Long',
      },
      {
        title: 'Bơi Lội',
        key: 'Bơi Lội',
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
