import {
  LineChartOutlined,
  PlusCircleFilled,
  SmileOutlined,
} from '@ant-design/icons';
import { Button, Card, Col, Divider, Image, Row, Typography } from 'antd';
import { CourseStyledCard, StyledDiv } from './Courses/styles';
import HappyChild from '#/assets/images/happychild.jpg';
import Thumbnail from '#/assets/images/thumbnail.jpg';
import Specialist from '#/assets/images/specialist.png';
import Community from '#/assets/images/community.png';
import Assessment from '#/assets/images/assessment.png';

export default function Index() {
  return (
    <Row gutter={[24, 24]}>
      <Col
        span={24}
        className="relative h-[70vh]"
        style={{
          backgroundImage: `url(${Thumbnail})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Card
          className="absolute top-[10rem] right-[9.375rem] w-2/6 rounded-xl bg-[black] bg-opacity-[64%] p-4 shadow-xl"
          bordered={false}
        >
          <Typography.Title
            level={2}
            className="text-center italic text-[white]"
          >
            HAPPYCHILD
          </Typography.Title>
          <Typography.Paragraph className="text-base text-[white]">
            Nền tảng hỗ trợ phụ huynh đánh giá, tham khảo đề xuất giải pháp và
            cách thức giáo dục trẻ gặp vấn đề chậm nói, chậm phát triển và tự
            kỷ.
          </Typography.Paragraph>
          <Button block>
            Tìm hiểu thêm <PlusCircleFilled />
          </Button>
        </Card>
      </Col>
      <Col span={24}>
        <div className="flex flex-col items-center justify-center">
          <Image src={HappyChild} preview={false} width={150} />
          <Typography className="text-3xl font-bold text-primary-color">
            Có những gì? <SmileOutlined />
          </Typography>
        </div>
        <Divider />
        <StyledDiv className="flex">
          <CourseStyledCard
            className="mx-2 w-1/3 text-base shadow-xl hover:scale-105"
            title={
              <Typography.Text className="py-4 text-lg font-bold">
                Theo dõi phát triển, phối hợp đánh giá <br /> mức độ phát triển,
                tự kỷ của trẻ nhỏ
              </Typography.Text>
            }
            extra={<LineChartOutlined className="text-4xl" />}
          >
            <div className="flex h-full flex-col justify-between bg-info-color-light py-4 px-3">
              <Typography.Paragraph className="mb-20">
                <ul className="m-0 list-none space-y-4 p-0">
                  <li>
                    Nếu vấn đề chậm phát triển ở trẻ không được phát hiện sớm,
                    trẻ sẽ không nhận được sự hỗ trợ cần thiết và kịp thời. Điều
                    này khiến trẻ gặp khó khăn khi đến trường, hòa nhập xã hội
                    và sống độc lập về sau.
                  </li>
                  <li>
                    Hệ thống cung cấp những công cụ và những bài đánh giá chuyên
                    môn giúp phụ huynh có định hướng cũng như cách thức quan
                    sát, theo dõi những hoạt động con trẻ nhỏ.
                  </li>
                </ul>
              </Typography.Paragraph>
              <Button className="w-full bg-primary-color  hover:bg-color-accent-sky hover:text-color-gray-10">
                Tìm hiểu thêm
              </Button>
            </div>
          </CourseStyledCard>
          <CourseStyledCard
            className="mx-2 h-fit w-1/3 p-4 text-base shadow-xl hover:scale-105"
            title={
              <Typography.Text className="py-4 text-lg font-bold">
                Blog kiến thức và các khóa học
              </Typography.Text>
            }
            extra={<LineChartOutlined className="text-4xl" />}
          >
            <div className="bg-info-color-light py-4 px-3">
              <Typography.Paragraph className="mb-20">
                <ul className="m-0 list-none space-y-4 p-0">
                  <li>
                    Cung cấp những blog kiến thức từ những chuyên gia đến từ
                    những trung tâm y tế và các tổ chức thiện nguyên với mong
                    muốn lan tỏa kiến thức về cách giáo dục trẻ nhỏ khi gặp phải
                    các vấn đề chậm nói, chậm phát triển, tự kỷ
                  </li>
                  <li>
                    Cung cấp các khóa học giúp phụ huynh có được lộ trình và
                    kiến thức rõ ràng, chắc chắn
                  </li>
                </ul>
              </Typography.Paragraph>
              <Button className="w-full bg-primary-color  hover:bg-color-accent-sky hover:text-color-gray-10">
                Tìm hiểu thêm
              </Button>
            </div>
          </CourseStyledCard>
          <CourseStyledCard
            className="mx-2 h-fit w-1/3 p-4 text-base shadow-xl hover:scale-105"
            title={
              <Typography.Text className="py-4 text-lg font-bold">
                Và hơn thế nữa...
              </Typography.Text>
            }
            extra={<LineChartOutlined className="text-4xl" />}
          >
            <div className="bg-info-color-light py-4 px-3">
              <Typography.Paragraph className="mb-20">
                <ul className="m-0 list-none space-y-4 p-0">
                  <li>
                    Nền tảng HappyChild còn nhắm tới việc lan tỏa kiến thức và
                    nhận thức cho cộng đồng
                  </li>
                  <li>
                    Giúp trẻ nhỏ gặp khó khăn về việc phát triển được hòa nhập
                    cộng đồng, được đón nhận và yêu thương như những đứa trẻ
                    bình thường
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
      </Col>
      <Col span={24} className="flex flex-col items-center gap-4">
        <Typography className="text-3xl font-bold text-primary-color">
          Đang trong giai đoạn phát triển
        </Typography>
        <div className="flex w-2/3 items-center justify-between rounded-xl bg-secondary-color p-8">
          <div className="flex flex-col justify-center gap-4">
            <Typography className="text-3xl font-bold text-[white]">
              Liên hệ các chuyên gia
            </Typography>
            <Typography className="text-base italic text-[white]">
              Kết nối, trò chuyện, video call, xem các buổi livestream chuyên đề
              và hỏi đáp,....
            </Typography>
            <Button className="w-[10rem]">Tìm hiểu thêm</Button>
          </div>
          <Image src={Specialist} preview={false} width={150} />
        </div>
        <div className="flex w-2/3 items-center justify-between rounded-xl bg-primary-color p-8">
          <div className="flex flex-col justify-center gap-4">
            <Typography className="text-3xl font-bold text-[white]">
              Nhật ký theo dõi quá trình chữa trị của trẻ
            </Typography>
            <Typography className="text-base italic text-[white]">
              Công cụ để ghi lại những hoạt động, đánh giá của trẻ nhỏ trong quá
              trình điều trị và theo dõi từ bố mẹ
            </Typography>
            <Button className="w-[10rem]">Tìm hiểu thêm</Button>
          </div>
          <Image src={Assessment} preview={false} width={150} />
        </div>
        <div className="flex w-2/3 items-center justify-between rounded-xl bg-secondary-color p-8">
          <div className="flex flex-col justify-center gap-4">
            <Typography className="text-3xl font-bold text-[white]">
              Cộng đồng
            </Typography>
            <Typography className="text-base italic text-[white]">
              Thông qua các diễn đàn, phụ huynh có thể chia sẻ những kinh nghiệm
              và kiến thức để hỗ trợ lẫn nhau, từ đó lan tỏa nhận thức đến mọi
              người xung quanh
            </Typography>
            <Button className="w-[10rem]">Tìm hiểu thêm</Button>
          </div>
          <Image src={Community} preview={false} width={200} />
        </div>
      </Col>
    </Row>
  );
}
