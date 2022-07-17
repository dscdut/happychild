import {
  CalendarOutlined,
  FieldTimeOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Button,
  Carousel,
  Col,
  Input,
  Rate,
  Row,
  Typography,
} from 'antd';
import { CarouselRef } from 'antd/lib/carousel';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseStyledCard } from './styles';

const { Paragraph, Title } = Typography;

export interface Course {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
  avatar: string;
  rate: number;
  date: string;
  time: string;
  email: string;
}

function Course() {
  const [courseList, setCourseList] = useState<Course[]>([]);
  const carouselRef = useRef<CarouselRef | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, 'course');
    onValue(starCountRef, snapshot => {
      const data = snapshot.val();
      setCourseList(data);
    });
  }, []);
  return (
    <Row gutter={[24, 24]}>
      <Input placeholder="Tìm kiếm khoá học" className="p-3" />
      <Col span={24} className="mb-2">
        <Row gutter={[24, 24]}>
          <Col span={24} className="relative">
            <div>
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
                Khoá học
              </Title>
              <Carousel ref={carouselRef} className="px-6 py-6" draggable>
                {courseList.map(course => (
                  <Col span={24} key={course.id}>
                    <CourseStyledCard className="relative">
                      <div
                        style={{
                          backgroundImage: `url(${course.image})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                        className="h-64 rounded-t-xl object-contain"
                      />
                      <div className="absolute ml-4 mt-2 flex h-[300px] items-end gap-4">
                        <Avatar size={100} src={course.avatar} />
                        <div className="flex flex-col">
                          <Typography className="text-lg font-bold">
                            {course.title}
                          </Typography>
                          <Typography className="text-base">
                            {course.author}
                          </Typography>
                        </div>
                      </div>
                      <Row className="mt-12 p-4" gutter={[16, 16]}>
                        <Col
                          span={24}
                          className="flex items-center justify-between"
                        >
                          <Typography className="text-lg">
                            <CalendarOutlined className="mr-2 mt-5" />
                            {course.date}
                          </Typography>
                          <Rate allowHalf disabled defaultValue={course.rate} />
                        </Col>
                        <Col span={24}>
                          <Typography className="text-lg">
                            <FieldTimeOutlined className="mr-2" /> {course.time}
                          </Typography>
                        </Col>
                        <Col span={24}>
                          <Paragraph
                            ellipsis={{
                              rows: 3,
                              expandable: false,
                              symbol: 'label.etc',
                            }}
                            className="mb-2 text-lg "
                          >
                            {course.description}
                          </Paragraph>
                        </Col>
                        <Col span={24} className="flex justify-end">
                          <Button
                            onClick={() =>
                              navigate(`/courses/${course.id}`, {
                                state: course.id,
                              })
                            }
                            type="primary"
                          >
                            Chi tiết khóa học
                          </Button>
                        </Col>
                      </Row>
                    </CourseStyledCard>
                  </Col>
                ))}
              </Carousel>
            </div>
          </Col>
          {/* */}
        </Row>
      </Col>
    </Row>
  );
}

export default Course;
