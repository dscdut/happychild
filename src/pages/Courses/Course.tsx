import {
  CalendarOutlined,
  FieldTimeOutlined,
  LeftOutlined,
  RightOutlined,
  UserOutlined,
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
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseStyledCard } from './styles';
import Children from '#/assets/images/children.jpg';

const { Paragraph, Title } = Typography;

function Course() {
  const carouselRef = useRef<CarouselRef | null>(null);

  const navigate = useNavigate();
  return (
    <Row gutter={[24, 24]}>
      <Input placeholder="Tìm kiếm khoá học" />
      <Col span={24} className="mb-2">
        <Row gutter={[24, 24]}>
          <Col span={24} className="relative">
            <div className="">
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
              <Carousel
                ref={carouselRef}
                className="px-6 py-6"
                infinite={false}
                draggable
              >
                {[...Array.from({ length: 15 }, (_, i) => i)].map(i => (
                  <Col span={24} key={i}>
                    <CourseStyledCard className="relative shadow-xl">
                      <img
                        src={Children}
                        className="rounded-t-xl object-contain"
                        height={300}
                      />
                      <div className="absolute top-[230px] ml-4 flex items-end gap-4">
                        <Avatar size={100} icon={<UserOutlined />} />
                        <div className="flex flex-col">
                          <Typography className="text-lg font-bold">
                            Nguyen Chau Quang Minh
                          </Typography>
                          <Typography>mnhngn20@gmail.com</Typography>
                        </div>
                      </div>
                      <Row className="mt-12 p-4" gutter={[16, 16]}>
                        <Col
                          span={24}
                          className="flex items-center justify-between"
                        >
                          <Typography className="text-base">
                            <CalendarOutlined className="mr-2" /> 22/2/2022
                          </Typography>
                          <Rate allowHalf disabled defaultValue={2.5} />
                        </Col>
                        <Col span={24}>
                          <Typography className="text-base">
                            <FieldTimeOutlined className="mr-2" /> 30 giờ
                          </Typography>
                        </Col>
                        <Col span={24}>
                          <Paragraph
                            ellipsis={{
                              rows: 4,
                              expandable: false,
                              symbol: 'label.etc',
                            }}
                            className="mb-2 text-base "
                          >
                            Autism spectrum disorder (ASD) is a developmental
                            disability caused by differences in the brain.
                            People with ASD often have problems with social
                            communication and interaction, and restricted or
                            repetitive behaviors or interests. Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Eveniet, nam
                            repudiandae? Ducimus fugiat corporis, officiis quos
                            possimus quia unde accusamus. Sint temporibus quam
                            dicta! Omnis excepturi corporis consequatur
                            suscipit? Exercitationem. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Magnam, architecto
                            porro blanditiis harum dignissimos modi, voluptatum
                            veritatis nostrum quas eligendi officiis. Optio
                            debitis cumque sunt illo in, voluptatibus soluta
                            voluptates!
                          </Paragraph>
                        </Col>
                        <Col span={24} className="flex justify-end">
                          <Button
                            onClick={() => navigate(`/courses/${i}`)}
                            type="primary"
                          >
                            Chi tiết khóa học
                          </Button>
                        </Col>
                      </Row>
                    </CourseStyledCard>
                  </Col>
                ))}
                <Button htmlType="submit">Hoàn thành</Button>
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
