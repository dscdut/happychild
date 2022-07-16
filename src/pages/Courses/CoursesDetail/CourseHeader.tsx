import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Image, Rate, Row, Typography } from 'antd';

const { Paragraph, Title, Text } = Typography;

function CourseHeader() {
  return (
    <Col
      span={24}
      className="relative h-[30rem] w-full"
      style={{
        background: `linear-gradient(90deg, rgb(19, 41, 75), rgb(19, 41, 75))`,
      }}
    >
      <div className="flex flex-wrap items-center justify-between px-20 py-12">
        <div className="w-1/2 ">
          <Title level={1} className="m-0 text-color-gray-60">
            Everyday Parenting: The ABCs of Child Rearing
          </Title>
          <div className="mb-10 flex items-center">
            <Rate allowHalf defaultValue={2.5} className="mb-1 mr-2" />
            <Text className="m-0 inline-block text-2xl font-bold text-primary-color-dark">
              4.8
            </Text>
          </div>
          <Row className="flex items-center">
            <Col span={6} className="flex items-center justify-center">
              <Avatar
                size={100}
                icon={<UserOutlined />}
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/21/d8c5a0671811e789eb49e04ec58dac/Kazdin_headhsot.jpg?auto=format%2Ccompress&dpr=1&w=200&h=200"
              />
            </Col>
            <Col span={18}>
              <Paragraph
                ellipsis={{
                  rows: 2,
                  expandable: false,
                  symbol: 'label.etc',
                }}
                className="m-0 inline-block text-2xl font-bold text-primary-color-dark"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </Paragraph>
            </Col>
          </Row>

          <Button className="my-[2.5rem] ml-4">Enroll for Free</Button>
        </div>

        <div className="w-1/2 text-center">
          <Image
            preview={false}
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/xdp/ualberta.svg?auto=format%2Ccompress&dpr=1&h=70"
          />
        </div>
      </div>
    </Col>
  );
}

export default CourseHeader;
