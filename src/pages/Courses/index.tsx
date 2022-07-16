import { Col, Input, Row, Typography } from 'antd';
import Course from './Course';
import Navbar from './Navbar';

export const { Paragraph, Title } = Typography;

export const myData = [
  { title: 'Category', input: <Input placeholder="search" /> },
  { title: 'Position', input: <Input placeholder="search" /> },
  { title: 'Levels' },
  { title: 'Types' },
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
      <Col span={4}>
        <Navbar />
      </Col>
      <Col span={20}>
        <Course />
      </Col>
    </Row>
  );
}

export default Courses;
