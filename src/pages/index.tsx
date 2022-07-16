import { LineChartOutlined, PlusCircleFilled } from '@ant-design/icons';
import { Button, Card, Col, Divider, Image, Row, Typography } from 'antd';
import { CourseStyledCard, StyledDiv } from './Courses/styles';
import HappyChild from '#/assets/images/happychild.jpg';

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
        <Card
          className="absolute top-[9.375rem] right-[9.375rem] w-2/6 bg-secondary-color p-6 shadow-xl"
          bordered={false}
        >
          <Typography.Title level={2} className="text-center text-[white]">
            HAPPYCHILD
          </Typography.Title>
          <Typography.Paragraph className="text-[white]">
            Cung cấp miễn phí công cụ theo dõi và đánh giá sự phát triển của
            trẻ; Đồng hành và hỗ trợ cha mẹ/người chăm sóc trẻ trong việc can
            thiệp tại nhà cho các trẻ tự kỷ và có rối loạn phát triển.
          </Typography.Paragraph>
          <Button block>
            Tìm hiểu thêm <PlusCircleFilled />
          </Button>
        </Card>
      </Col>
      <Col span={24}>
        <div className="flex items-center justify-center">
          <Image src={HappyChild} preview={false} width={150} />
        </div>
        <Divider />
        <StyledDiv className="flex">
          <CourseStyledCard className="mx-2  h-fit w-1/3 bg-secondary-color p-4 text-base shadow-xl">
            <div className="flex items-center justify-between px-6">
              <Typography.Text className="py-4 text-lg font-bold text-surface-primary">
                Theo dõi phát triển
              </Typography.Text>
              <LineChartOutlined
                style={{ fontSize: '35px', color: '#ffb710' }}
              />
            </div>
            <div className="bg-info-color-light py-4 px-3">
              <Typography.Paragraph className="mb-20">
                <ul className="m-0 list-none space-y-4 p-0">
                  <li>
                    Nếu vấn đề chậm phát triển ở trẻ không được phát hiện sớm,
                    trẻ sẽ không nhận được sự hỗ trợ cần thiết và kịp thời. Điều
                    này khiến trẻ gặp khó khăn khi đến trường, hòa nhập xã hội
                    và sống độc lập về sau.
                  </li>
                  <li>
                    Theo số liệu thống kê của Mỹ, có tới 17% trẻ trong độ tuổi
                    từ 3-17 có một hoặc nhiều khuyết tật phát triển và hành vi,
                    như{' '}
                    <a
                      href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-theo-doi-phat-trien-asq-3-df1c54e3f5"
                      className="text-primary-color"
                    >
                      rối loạn phổ tự kỷ
                    </a>{' '}
                    ,{' '}
                    <a
                      href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-theo-doi-phat-trien-asq-3-df1c54e3f5"
                      className="text-primary-color"
                    >
                      khuyết tật trí tuệ
                    </a>{' '}
                    (còn được gọi là chậm phát triển trí tuệ) , khó khăn về học,
                    <a
                      href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-theo-doi-phat-trien-asq-3-df1c54e3f5"
                      className="text-primary-color"
                    >
                      tăng động giảm chú ý (ADHD)
                    </a>{' '}
                    . Bên cạnh đó, có nhiều trẻ có các rối loạn về phát triển về
                    ngôn ngữ cũng như những lĩnh vực khác. Tuy nhiên, chưa đến
                    một nửa những trẻ{' '}
                    <a
                      href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-theo-doi-phat-trien-asq-3-df1c54e3f5"
                      className="text-primary-color"
                    >
                      khuyết tật phát triển
                    </a>{' '}
                    này được phát hiện trước khi vào cấp 1.
                  </li>
                </ul>
              </Typography.Paragraph>
              <Button className="w-full bg-primary-color  hover:bg-color-accent-sky hover:text-color-gray-10">
                Tìm hiểu thêm
              </Button>
            </div>
          </CourseStyledCard>
          <CourseStyledCard className="mx-2  h-fit w-1/3 bg-secondary-color p-4 text-base shadow-xl">
            <div className="flex items-center justify-between px-6">
              <Typography.Text className="py-4 text-lg font-bold text-surface-primary">
                Theo dõi phát triển
              </Typography.Text>
              <LineChartOutlined
                style={{ fontSize: '35px', color: '#ffb710' }}
              />
            </div>
            <div className="bg-info-color-light py-4 px-3">
              <Typography.Paragraph className="mb-20">
                <ul className="m-0 list-none space-y-4 p-0">
                  <li>
                    Nếu vấn đề chậm phát triển ở trẻ không được phát hiện sớm,
                    trẻ sẽ không nhận được sự hỗ trợ cần thiết và kịp thời. Điều
                    này khiến trẻ gặp khó khăn khi đến trường, hòa nhập xã hội
                    và sống độc lập về sau.
                  </li>
                  <li>
                    Theo số liệu thống kê của Mỹ, có tới 17% trẻ trong độ tuổi
                    từ 3-17 có một hoặc nhiều khuyết tật phát triển và hành vi,
                    như{' '}
                    <a
                      href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-theo-doi-phat-trien-asq-3-df1c54e3f5"
                      className="text-primary-color"
                    >
                      rối loạn phổ tự kỷ
                    </a>{' '}
                    ,{' '}
                    <a
                      href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-theo-doi-phat-trien-asq-3-df1c54e3f5"
                      className="text-primary-color"
                    >
                      khuyết tật trí tuệ
                    </a>{' '}
                    (còn được gọi là chậm phát triển trí tuệ) , khó khăn về học,
                    <a
                      href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-theo-doi-phat-trien-asq-3-df1c54e3f5"
                      className="text-primary-color"
                    >
                      tăng động giảm chú ý (ADHD)
                    </a>{' '}
                    . Bên cạnh đó, có nhiều trẻ có các rối loạn về phát triển về
                    ngôn ngữ cũng như những lĩnh vực khác. Tuy nhiên, chưa đến
                    một nửa những trẻ{' '}
                    <a
                      href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-theo-doi-phat-trien-asq-3-df1c54e3f5"
                      className="text-primary-color"
                    >
                      khuyết tật phát triển
                    </a>{' '}
                    này được phát hiện trước khi vào cấp 1.
                  </li>
                </ul>
              </Typography.Paragraph>
              <Button className="w-full bg-primary-color  hover:bg-color-accent-sky hover:text-color-gray-10">
                Tìm hiểu thêm
              </Button>
            </div>
          </CourseStyledCard>
          <CourseStyledCard className="mx-2  h-fit w-1/3 bg-secondary-color p-4 text-base shadow-xl">
            <div className="flex items-center justify-between px-6">
              <Typography.Text className="py-4 text-lg font-bold text-surface-primary">
                Theo dõi phát triển
              </Typography.Text>
              <LineChartOutlined
                style={{ fontSize: '35px', color: '#ffb710' }}
              />
            </div>
            <div className="bg-info-color-light py-4 px-3">
              <Typography.Paragraph className="mb-20">
                <ul className="m-0 list-none space-y-4 p-0">
                  <li>
                    Nếu vấn đề chậm phát triển ở trẻ không được phát hiện sớm,
                    trẻ sẽ không nhận được sự hỗ trợ cần thiết và kịp thời. Điều
                    này khiến trẻ gặp khó khăn khi đến trường, hòa nhập xã hội
                    và sống độc lập về sau.
                  </li>
                  <li>
                    Theo số liệu thống kê của Mỹ, có tới 17% trẻ trong độ tuổi
                    từ 3-17 có một hoặc nhiều khuyết tật phát triển và hành vi,
                    như{' '}
                    <a
                      href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-theo-doi-phat-trien-asq-3-df1c54e3f5"
                      className="text-primary-color"
                    >
                      rối loạn phổ tự kỷ
                    </a>{' '}
                    ,{' '}
                    <a
                      href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-theo-doi-phat-trien-asq-3-df1c54e3f5"
                      className="text-primary-color"
                    >
                      khuyết tật trí tuệ
                    </a>{' '}
                    (còn được gọi là chậm phát triển trí tuệ) , khó khăn về học,
                    <a
                      href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-theo-doi-phat-trien-asq-3-df1c54e3f5"
                      className="text-primary-color"
                    >
                      tăng động giảm chú ý (ADHD)
                    </a>{' '}
                    . Bên cạnh đó, có nhiều trẻ có các rối loạn về phát triển về
                    ngôn ngữ cũng như những lĩnh vực khác. Tuy nhiên, chưa đến
                    một nửa những trẻ{' '}
                    <a
                      href="https://a365.vn/kien-thuc/bai-viet/gioi-thieu-bo-cong-cu-theo-doi-phat-trien-asq-3-df1c54e3f5"
                      className="text-primary-color"
                    >
                      khuyết tật phát triển
                    </a>{' '}
                    này được phát hiện trước khi vào cấp 1.
                  </li>
                </ul>
              </Typography.Paragraph>
              <Button className="w-full bg-primary-color  hover:bg-color-accent-sky hover:text-color-gray-10">
                Tìm hiểu thêm
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
                className="mr-2 min-h-[16.1875rem] min-w-[14rem]"
              />
              <div className="z-10 text-center">
                <Typography.Title>201425+</Typography.Title>
                perferendis accusamus, modi saepe omnis asperiores consequuntur
                harum similique amet, animi commodi quas, cupiditate eveniet
                vero minus. Quaerat, excepturi tempore.
              </div>
            </div>
            <Button className="w-full bg-primary-color  hover:bg-color-accent-sky hover:text-color-gray-10">
              Tìm hiểu thêm
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
                src="https://a365.vn/assets/icons-v2/home/girl.png"
                className="mr-2 min-h-[16.1875rem] min-w-[14rem] "
              />
            </div>
            <Button className="w-full bg-primary-color  hover:bg-color-accent-sky hover:text-color-gray-10">
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </Col>

      <Col span={24}>
        <div className="bg-secondary-color p-16 text-center">
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
