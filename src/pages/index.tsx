import { LineChartOutlined } from '@ant-design/icons';
import { Button, Card, Col, Divider, Row, Typography } from 'antd';
import { CourseStyledCard, StyledDiv } from './Courses/styles';

export default function Index() {
  return (
    <Row gutter={[24, 24]}>
      <Col
        span={24}
        className="relative h-[70vh]"
        style={{
          backgroundImage: `url(https://a365reportstorage.blob.core.windows.net/public-blobs/72b9c63b6562d38ab3321d7de9fcb12a___slider-1.jpg)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Card className="absolute top-[9.375rem] right-[9.375rem] w-2/6 bg-primary-color-dark p-6 ">
          <Typography.Title level={3}>HAPPYCHILD</Typography.Title>
          <Typography.Paragraph>
            Cung cấp miễn phí công cụ theo dõi và đánh giá sự phát triển của
            trẻ; Đồng hành và hỗ trợ cha mẹ/người chăm sóc trẻ trong việc can
            thiệp tại nhà cho các trẻ tự kỷ và có rối loạn phát triển.
          </Typography.Paragraph>
          <Button type="primary">Xem Thêm</Button>
        </Card>
      </Col>
      <Col span={24}>
        <Typography.Title level={2} className="text-center">
          HAPPYCHILD
        </Typography.Title>
        <Divider />
        <StyledDiv className="flex">
          <CourseStyledCard className="mx-2 h-fit w-1/3 bg-primary-color p-4 text-base shadow-xl">
            <div className="flex items-center justify-between px-6">
              <Typography.Text className="py-4 text-lg font-bold">
                Theo dõi phát triển
              </Typography.Text>
              <LineChartOutlined style={{ fontSize: '35px' }} />
            </div>
            <div className="bg-info-color-light py-4 px-6">
              <Typography.Paragraph className="mb-20">
                Tình trạng chậm phát triển ở trẻ xảy ra khi bé bị tụt lại đằng
                sau so với các bạn đồng trang lứa trong một hoặc nhiều lĩnh vực
                về mặt cảm xúc, thể chất hoặc tinh thần. Nếu trẻ bị chậm phát
                triển, việc điều trị bệnh sớm là cách tốt nhất giúp bé tiến bộ
                và bắt kịp với những đứa trẻ khác.
              </Typography.Paragraph>
              <Button className="w-full bg-error-color  hover:bg-color-accent-sky hover:text-color-gray-10">
                Learn
              </Button>
            </div>
          </CourseStyledCard>
          <CourseStyledCard className="mx-2  h-fit w-1/3 bg-primary-color p-4 text-base shadow-xl">
            <div className="flex items-center justify-between px-6">
              <Typography.Text className="py-4 text-lg font-bold">
                Theo dõi phát triển
              </Typography.Text>
              <LineChartOutlined style={{ fontSize: '35px' }} />
            </div>
            <div className="bg-info-color-light py-4 px-6">
              <Typography.Paragraph className="mb-20">
                Tình trạng chậm phát triển ở trẻ xảy ra khi bé bị tụt lại đằng
                sau so với các bạn đồng trang lứa trong một hoặc nhiều lĩnh vực
                về mặt cảm xúc, thể chất hoặc tinh thần. Nếu trẻ bị chậm phát
                triển, việc điều trị bệnh sớm là cách tốt nhất giúp bé tiến bộ
                và bắt kịp với những đứa trẻ khác.
              </Typography.Paragraph>
              <Button className="w-full bg-error-color  hover:bg-color-accent-sky hover:text-color-gray-10">
                Learn
              </Button>
            </div>
          </CourseStyledCard>
          <CourseStyledCard className="mx-2  h-fit w-1/3 bg-primary-color p-4 text-base shadow-xl">
            <div className="flex items-center justify-between px-6">
              <Typography.Text className="py-4 text-lg font-bold">
                Theo dõi phát triển
              </Typography.Text>
              <LineChartOutlined style={{ fontSize: '35px' }} />
            </div>
            <div className="bg-info-color-light py-4 px-6">
              <Typography.Paragraph className="mb-20">
                Tình trạng chậm phát triển ở trẻ xảy ra khi bé bị tụt lại đằng
                sau so với các bạn đồng trang lứa trong một hoặc nhiều lĩnh vực
                về mặt cảm xúc, thể chất hoặc tinh thần. Nếu trẻ bị chậm phát
                triển, việc điều trị bệnh sớm là cách tốt nhất giúp bé tiến bộ
                và bắt kịp với những đứa trẻ khác.
              </Typography.Paragraph>
              <Button className="w-full bg-error-color  hover:bg-color-accent-sky hover:text-color-gray-10">
                Learn
              </Button>
            </div>
          </CourseStyledCard>
        </StyledDiv>
        <Divider />
        <div className="my-5 flex items-center justify-between">
          <div className="relative ml-5 min-h-fit w-[38.3125rem]">
            <img
              src="https://a365.vn/assets/icons-v2/home/rainbow.png"
              className="absolute right-56 w-56"
            />
            <div className="mb-5 flex items-center">
              <img
                src="https://a365.vn/assets/icons-v2/home/boy.png"
                className="mr-2 w-56"
              />
              <div className="z-10 text-center">
                <Typography.Title>201425+</Typography.Title>
                perferendis accusamus, modi saepe omnis asperiores consequuntur
                harum similique amet, animi commodi quas, cupiditate eveniet
                vero minus. Quaerat, excepturi tempore.
              </div>
            </div>
            <Button className="w-full bg-color-accent-sky  hover:bg-color-accent-sky hover:text-color-gray-10">
              Hướng Dẫn Sử Dụng
            </Button>
          </div>
          <div className="relative ml-5 min-h-fit w-[38.3125rem]">
            <img
              src="https://a365.vn/assets/icons-v2/home/balloon.png"
              className="absolute left-6 w-32"
            />
            <div className="mb-5 flex items-center">
              <div className="z-10 text-center">
                <Typography.Title>201425+</Typography.Title>
                perferendis accusamus, modi saepe omnis asperiores consequuntur
                harum similique amet, animi commodi quas, cupiditate eveniet
                vero minus. Quaerat, excepturi tempore.
              </div>
              <img
                src="https://a365.vn/assets/icons-v2/home/boy.png"
                className="mr-2 w-56"
              />
            </div>
            <Button className="w-full bg-color-accent-sky  hover:bg-color-accent-sky hover:text-color-gray-10">
              Hướng Dẫn Sử Dụng
            </Button>
          </div>
        </div>
      </Col>

      <Col span={24}>
        <div className="bg-error-color p-6 text-center">
          <Typography.Title level={3}>HAPPYCHILD</Typography.Title>
          <Typography.Paragraph className="text-justify text-lg">
            Cung cấp miễn phí công cụ theo dõi và đánh giá sự phát triển của
            trẻ; Đồng hành và hỗ trợ cha mẹ/người chăm sóc trẻ trong việc can
            thiệp tại nhà cho các trẻ tự kỷ và có rối loạn phát triển. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            accusantium distinctio perspiciatis corporis harum labore, sunt,
            laboriosam earum ex veniam quos, deleniti odit maxime atque! Officia
            repellat voluptatem vel nobis?
          </Typography.Paragraph>
          <Button type="primary">Xem Thêm</Button>
        </div>
      </Col>
    </Row>
  );
}
