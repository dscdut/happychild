import { LeftOutlined, RightOutlined, UserOutlined } from '@ant-design/icons';
import {
  Avatar,
  Button,
  Col,
  Divider,
  Input,
  Rate,
  Row,
  Tree,
  Typography,
} from 'antd';
import Carousel, { CarouselRef } from 'antd/lib/carousel';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledCard } from './styles';

const { Paragraph, Title } = Typography;

const myData = [
  { title: 'Category', input: <Input placeholder="search" /> },
  { title: 'Position', input: <Input placeholder="search" /> },
  { title: 'Levels' },
  { title: 'Types' },
];

const treeData = [
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
  const carouselRef = useRef<CarouselRef | null>(null);
  const navigate = useNavigate();

  return (
    <Row gutter={[24, 24]}>
      <Col span={4}>
        <StyledCard className="rounded-md shadow-2xl">
          {myData.map((item, i) => (
            <>
              <Title level={5}>{item.title}</Title>
              {item.input}
              <Tree className="my-5" key={i} checkable treeData={treeData} />
              <Divider />
            </>
          ))}
        </StyledCard>
      </Col>
      <Col span={20}>
        <Row gutter={[24, 24]}>
          <Input placeholder="search program" />
          <Col span={24} className="mb-2">
            <Row gutter={[24, 24]}>
              <Col span={24} className="relative ">
                <div className="bg-slate-100 max-h-[40rem] min-h-[30rem]">
                  <div className="absolute left-0 z-30 ml-1 flex h-full items-center">
                    <LeftOutlined
                      className="cursor-pointer text-xl"
                      onClick={() => carouselRef?.current?.prev()}
                    />
                  </div>
                  <div className="absolute right-0 z-30 mr-1 flex h-full items-center">
                    <RightOutlined
                      className="cursor-pointer text-xl"
                      onClick={() => {
                        carouselRef?.current?.next();
                      }}
                    />
                  </div>
                  <Title level={1} className="text-center">
                    Course
                  </Title>
                  <Carousel
                    ref={carouselRef}
                    className="bg-slate-100 px-6 py-12"
                    infinite={false}
                    draggable
                  >
                    {[...Array.from({ length: 15 }, (_, i) => i)].map(i => (
                      <Col span={24} key={i}>
                        <StyledCard className="border-color-accent-sky">
                          <div className="h-56 w-full bg-primary-color" />
                          <div className="flex items-center justify-between px-10">
                            <Avatar
                              size={100}
                              className="my-3"
                              icon={<UserOutlined />}
                            />
                            <Rate allowHalf defaultValue={2.5} />
                          </div>
                          <Paragraph>{'1/4/2022'}</Paragraph>
                          <Paragraph
                            ellipsis={{
                              rows: 4,
                              expandable: false,
                              symbol: 'label.etc',
                            }}
                            className="mb-2"
                          >
                            Autism spectrum disorder (ASD) is a developmental
                            disability caused by differences in the brain.
                            People with ASD often have problems with social
                            communication and interaction, and restricted or
                            repetitive behaviors or interests.
                          </Paragraph>
                          <Button
                            onClick={() => navigate('/courses/123')}
                            danger
                            className="float-right"
                          >
                            Click Me
                          </Button>
                        </StyledCard>
                      </Col>
                    ))}
                    <Button htmlType="submit">Finish</Button>
                  </Carousel>
                </div>
              </Col>
              {/* */}
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Courses;
