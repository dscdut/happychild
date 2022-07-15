import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Image, Rate, Row, Typography } from 'antd';

export const { Paragraph, Title, Text } = Typography;

function CourseHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between px-20 py-12">
      <div className="w-1/2 ">
        <Title level={1} className="m-0 text-color-gray-60">
          Leading Teams: Developing as a Leader
        </Title>
        <div className="my-2 flex items-center">
          <Rate allowHalf defaultValue={2.5} className="mb-1 mr-2" />
          <Text className="m-0 inline-block text-2xl font-bold text-primary-color-dark">
            4.8
          </Text>
        </div>
        <Row>
          <Col span={4}>
            <Avatar className="text-center" size={64} icon={<UserOutlined />} />
          </Col>
          <Col span={20}>
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
        <Button className="my-[2.5rem]">Enroll for Free</Button>
      </div>

      <div className="w-1/2 text-center">
        <Image
          preview={false}
          src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/xdp/ualberta.svg?auto=format%2Ccompress&dpr=1&h=70"
        />
      </div>
    </div>
  );
}

export default CourseHeader;
