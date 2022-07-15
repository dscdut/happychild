import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Divider, Rate, Row, Typography } from 'antd';
import Navbar from '../Navbar';
import { StyledCard } from '../styles';
import CourseHeader from './CourseHeader';

export const { Paragraph, Title, Text } = Typography;

function CoursesDetail() {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24} className="mb-2">
        <Row gutter={[24, 0]}>
          <Col
            span={24}
            className="relative h-[30rem] w-full"
            style={{
              background: `linear-gradient(90deg, rgb(19, 41, 75), rgb(19, 41, 75))`,
            }}
          >
            <CourseHeader />
          </Col>
          <Col span={24}>
            <Title level={1} className="text-center">
              Course
            </Title>
            <Divider />

            <Row gutter={[24, 24]}>
              <Col span={20}>
                <StyledCard className="border-color-accent-sky">
                  <div className="h-56 w-full bg-primary-color" />
                  <div className="flex items-center justify-between px-5">
                    <div className="text-center">
                      <Avatar
                        size={100}
                        className="my-3"
                        icon={<UserOutlined />}
                      />
                      <Paragraph className="">{'Date: 22/2/2222'}</Paragraph>
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
                    Autism spectrum disorder (ASD) is a developmental disability
                    caused by differences in the brain. People with ASD often
                    have problems with social communication and interaction, and
                    restricted or repetitive behaviors or interests. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Eveniet, nam
                    repudiandae? Ducimus fugiat corporis, officiis quos possimus
                    quia unde accusamus. Sint temporibus quam dicta! Omnis
                    excepturi corporis consequatur suscipit? Exercitationem.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, architecto porro blanditiis harum dignissimos modi,
                    voluptatum veritatis nostrum quas eligendi officiis. Optio
                    debitis cumque sunt illo in, voluptatibus soluta voluptates!
                  </Paragraph>
                  <Button danger className="float-right">
                    Click Me
                  </Button>
                </StyledCard>
              </Col>
              <Col span={4}>
                <Navbar />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default CoursesDetail;
