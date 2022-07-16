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
    des: 'Alan E. Kazdin, PhD, ABPP is Sterling Professor of Psychology and Child Psychiatry at Yale University. At Yale, he has been Chairman of the Psychology Department, Director of the Child Study Center at the School of Medicine, and Chair of the Publications Committee of the Yale University Press. His 750+ publications include 49 books that focus on parenting and child rearing, psychosocial interventions, interpersonal violence, and research methodology. His parenting work has been featured on NPR, PBS, BBC, CNN, Good Morning America, 20/20, Dr. Phil, and the Today Show. In 2008, he was President of the American Psychological Association. Quisquam, quidem.',
  },
  {
    id: 2,
    avatar:
      'https://www.openaccessgovernment.org/wp-content/uploads/2022/05/dreamstime_m_8685934-scaled.jpg',
    name: 'John Doe',
    work: 'Department of Psychology',
    des: 'Alan E. Kazdin, PhD, ABPP is Sterling Professor of Psychology and Child Psychiatry at Yale University. At Yale, he has been Chairman of the Psychology Department, Director of the Child Study Center at the School of Medicine, and Chair of the Publications Committee of the Yale University Press. His 750+ publications include 49 books that focus on parenting and child rearing, psychosocial interventions, interpersonal violence, and research methodology. His parenting work has been featured on NPR, PBS, BBC, CNN, Good Morning America, 20/20, Dr. Phil, and the Today Show. In 2008, he was President of the American Psychological Association. Quisquam, quidem.',
  },
  {
    id: 3,
    avatar:
      'https://www.openaccessgovernment.org/wp-content/uploads/2022/05/dreamstime_m_8685934-scaled.jpg',
    name: 'John Doe',
    work: 'Department of Psychology',
    des: 'Alan E. Kazdin, PhD, ABPP is Sterling Professor of Psychology and Child Psychiatry at Yale University. At Yale, he has been Chairman of the Psychology Department, Director of the Child Study Center at the School of Medicine, and Chair of the Publications Committee of the Yale University Press. His 750+ publications include 49 books that focus on parenting and child rearing, psychosocial interventions, interpersonal violence, and research methodology. His parenting work has been featured on NPR, PBS, BBC, CNN, Good Morning America, 20/20, Dr. Phil, and the Today Show. In 2008, he was President of the American Psychological Association. Quisquam, quidem.',
  },
  {
    id: 4,
    avatar:
      'https://www.openaccessgovernment.org/wp-content/uploads/2022/05/dreamstime_m_8685934-scaled.jpg',
    name: 'John Doe',
    work: 'Department of Psychology',
    des: 'Alan E. Kazdin, PhD, ABPP is Sterling Professor of Psychology and Child Psychiatry at Yale University. At Yale, he has been Chairman of the Psychology Department, Director of the Child Study Center at the School of Medicine, and Chair of the Publications Committee of the Yale University Press. His 750+ publications include 49 books that focus on parenting and child rearing, psychosocial interventions, interpersonal violence, and research methodology. His parenting work has been featured on NPR, PBS, BBC, CNN, Good Morning America, 20/20, Dr. Phil, and the Today Show. In 2008, he was President of the American Psychological Association. Quisquam, quidem.',
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
    title: 'Back-end',
    key: 'Back-end',
    children: [
      {
        title: 'Node-js',
        key: 'Node-js',
      },
      {
        title: 'Python',
        key: 'Python',
      },
      {
        title: 'Java',
        key: 'Java',
      },
    ],
  },
  {
    title: 'Back-end1',
    key: 'Back-end1',
    children: [
      {
        title: 'Node-js1',
        key: 'Node-js1',
      },
      {
        title: 'Python1',
        key: 'Python1',
      },
      {
        title: 'Java1',
        key: 'Java1',
      },
    ],
  },
  {
    title: 'Back-end2',
    key: 'Back-end2',
    children: [
      {
        title: 'Node-js2',
        key: 'Node-js2',
      },
      {
        title: 'Python2',
        key: 'Python2',
      },
      {
        title: 'Java2',
        key: 'Java2',
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
