import { LeftOutlined, RightOutlined, UserOutlined } from '@ant-design/icons';
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
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledCard } from './styles';

const { Paragraph, Title } = Typography;

function Course() {
  const carouselRef = useRef<CarouselRef | null>(null);

  const navigate = useNavigate();
  return (
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
                className="bg-slate-100 px-6 py-6"
                infinite={false}
                draggable
              >
                {[...Array.from({ length: 15 }, (_, i) => i)].map(i => (
                  <Col span={24} key={i}>
                    <StyledCard className="border-color-accent-sky">
                      <div className="h-56 w-full bg-primary-color" />
                      <div className="flex items-center justify-between px-5">
                        <div className="text-center">
                          <Avatar
                            size={100}
                            className="my-3"
                            icon={<UserOutlined />}
                          />
                          <Paragraph className="">
                            {'Date: 22/2/2222'}
                          </Paragraph>
                        </div>
                        <Rate allowHalf defaultValue={2.5} />
                      </div>
                      <Paragraph
                        ellipsis={{
                          rows: 4,
                          expandable: false,
                          symbol: 'label.etc',
                        }}
                        className="mb-2 text-base "
                      >
                        Autism spectrum disorder (ASD) is a developmental
                        disability caused by differences in the brain. People
                        with ASD often have problems with social communication
                        and interaction, and restricted or repetitive behaviors
                        or interests. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eveniet, nam repudiandae? Ducimus
                        fugiat corporis, officiis quos possimus quia unde
                        accusamus. Sint temporibus quam dicta! Omnis excepturi
                        corporis consequatur suscipit? Exercitationem. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam, architecto porro blanditiis harum dignissimos
                        modi, voluptatum veritatis nostrum quas eligendi
                        officiis. Optio debitis cumque sunt illo in,
                        voluptatibus soluta voluptates!
                      </Paragraph>
                      <Button
                        onClick={() => navigate(`/courses/${i}`)}
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
  );
}

export default Course;
