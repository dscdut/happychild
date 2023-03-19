import { Col, Input, Row } from 'antd';
import Course from './Course';
import Navbar from './Navbar';

export const AuthorList = [
  {
    id: 1,
    avatar:
      'https://ugc.futurelearn.com/uploads/images/d5/0f/profile_image_d50f4ab9-01cb-4a5b-89e9-d01e5f829457.jpg',
    name: 'Louis Camilleri',
    work: 'Educator & Child Psychologist',
    des: 'Khóa học sẽ bắt đầu bằng cách khám phá hiểu biết của bạn về chứng tự kỷ, bao gồm các dấu hiệu, triệu chứng, chẩn đoán và nguyên nhân tiềm ẩn. Bạn sẽ khám phá các nhu cầu giáo dục The course will begin by exploring your understanding of autism, including its signs, symptoms, diagnosis, and potential causes. You will explore how special educational needs and disabilities can affect a childs ability to learn.đặc biệt và khuyết tật có thể ảnh hưởng đến khả năng học tập của một đứa trẻ như thế nào.',
    rate: 5,
  },
  {
    id: 2,
    avatar:
      'https://ugc.futurelearn.com/uploads/images/b8/0b/profile_image_b80b3104-b2a3-4236-a992-e274a7401257.jpg',
    name: 'Ervin Howell',
    work: 'Educator & Child Psychologist',
    des: 'You will also learn about a variety of learning modalities for students with autism, including general special schools, autism-specific special schools, autism units in schools and study in a formal classroom.',
    rate: 5,
  },
  {
    id: 3,
    avatar:
      'https://ugc.futurelearn.com/uploads/images/a7/61/profile_image_a761dfcf-62c3-474f-8d9f-0121677efaed.jpg',
    name: 'Clementine Bauch',
    work: 'Educator & Child Psychologist',
    des: 'Very good content, I learned things I did not know about Autism and the autism community. There are many resources to explore.',
    rate: 5,
  },
  {
    id: 4,
    avatar:
      'https://ugc.futurelearn.com/uploads/images/57/27/profile_image_5727ecd1-9e78-4633-9ac2-1161d8c058e7.jpg',
    name: 'Patricia Lebsack',
    work: 'Educator & Child Psychologist',
    des: 'The main target audience is people who work with children with autism in schools, such as teachers and teaching assistants. However, all practitioners can benefit (e.g. speech and language therapists). The target age is compulsory education (4-18 years old). The course will also benefit parents interested in autistic children, as well as the autistic community itself.',
  },
];

export const ReviewList = [
  {
    id: 1,
    avatar:
      'https://images.pexels.com/photos/1648396/pexels-photo-1648396.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Chelsey Dietrich',
    work: 'Parents',
    des: 'Identifying the educational requirements of children on the autism spectrum with and without intellectual (academic) difficulties',
    rate: 5,
  },
  {
    id: 2,
    avatar:
      'https://images.pexels.com/photos/1096141/pexels-photo-1096141.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Mrs. Dennis Schulist',
    work: 'Parents',
    des: 'Reflect on what constitutes good practice for autism in an educational setting',
    rate: 5,
  },
  {
    id: 3,
    avatar:
      'https://images.pexels.com/photos/1157395/pexels-photo-1157395.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Kurtis Weissnat',
    work: 'Parents',
    des: 'Very good content, I learned things I did not know about Autism and the autism community. There are many resources to explore.',
    rate: 5,
  },
  {
    id: 4,
    avatar:
      'https://images.pexels.com/photos/3760279/pexels-photo-3760279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Nicholas Runolfsdottir ',
    work: 'Parents',
    des: 'The main target audience is people who work with children with autism in schools, such as teachers and teaching assistants. However, all practitioners can benefit (e.g. speech and language therapists). The target age is compulsory education (4-18 years old). The course will also benefit parents interested in autistic children, as well as the autistic community itself.',
    rate: 5,
  },
];

export const myData = [
  { label: 'Children 0 - 7 years old', input: <Input placeholder="Search" /> },
  {
    label: 'Children  8 - 10 years oldi',
    input: <Input placeholder="Search" />,
  },
  {
    label: 'Children  10 - 14 years old',
    input: <Input placeholder="Search" />,
  },
  {
    label: 'Children  14 years old and up',
    input: <Input placeholder="Search" />,
  },
];

export const treeData = [
  {
    title: 'Education',
    key: 'Education',
    children: [
      {
        title: 'Document',
        key: 'Document',
      },
      {
        title: 'Take care of',
        key: 'Take care of',
      },
      {
        title: 'Feed, take care',
        key: 'Feed, take care',
      },
    ],
  },
  {
    title: 'Sport',
    key: 'Sport',
    children: [
      {
        title: 'Football',
        key: 'Football',
      },
      {
        title: 'Badmiton',
        key: 'Badmiton',
      },
      {
        title: 'Swimming',
        key: 'Swimming',
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
