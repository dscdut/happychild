import { Avatar, Button, Card, Col, Image, Rate, Row, Typography } from 'antd';
import { AuthorList } from '..';

const { Title, Text } = Typography;

function CourseHeader() {
  return (
    <Col
      span={24}
      className="relative h-[30rem] w-full"
      style={{
        background: `linear-gradient(90deg, #4cadd5, #3c9bf3)`,
      }}
    >
      <div className="flex flex-wrap items-center justify-between px-20 py-12">
        <div className="w-1/2 ">
          <Title level={1} className="m-0 text-color-gray-60">
            Good Practice in Autism Education
          </Title>
          <div className="mb-10 flex items-center">
            <Rate allowHalf disabled defaultValue={2.5} className="mb-1 mr-2" />
            <Text className="m-0 inline-block text-2xl font-bold text-primary-color-light-10">
              4.8
            </Text>
          </div>
          <Row className="flex items-center">
            <Card
              bordered={false}
              className="ml-5 bg-secondary-color shadow-xl"
            >
              <div className="mb-5 flex">
                <Avatar
                  size={100}
                  src={AuthorList[0].avatar}
                  className="mr-2"
                />
                <div className="text-justify">
                  <Title level={4} className=" m-0 text-color-gray-60">
                    {AuthorList[0].name}
                  </Title>
                  <Text className="block text-color-gray-60">
                    {AuthorList[0].work}
                  </Text>
                  <Text className="text-base font-normal text-[white]">
                    {`${'105,291'}`} recent registration
                  </Text>
                </div>
              </div>
              <Button block>Tìm hiểu thêm</Button>
            </Card>
          </Row>
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
