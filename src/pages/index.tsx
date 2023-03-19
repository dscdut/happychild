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
            A platform that supports parents to evaluate, refer to suggested
            solutions and methods of educating children with speech delay,
            developmental delay and autism.
          </Typography.Paragraph>
          <Button block>
            Learn more <PlusCircleFilled />
          </Button>
        </Card>
      </Col>
      <Col span={24}>
        <div className="flex flex-col items-center justify-center">
          <Image src={HappyChild} preview={false} width={150} />
          <Typography className="text-3xl font-bold text-primary-color">
            What are there? <SmileOutlined />
          </Typography>
        </div>
        <Divider />
        <StyledDiv className="flex">
          <CourseStyledCard
            className="mx-2 w-1/3 text-base shadow-xl hover:scale-105"
            title={
              <Typography.Text className="py-4 text-lg font-bold">
                Monitor the progress, coordinate the assessment of <br /> the
                development level and autism of young children
              </Typography.Text>
            }
            extra={<LineChartOutlined className="text-4xl" />}
          >
            <div className="flex h-full flex-col justify-between bg-info-color-light py-4 px-3">
              <Typography.Paragraph className="mb-20">
                <ul className="m-0 list-none space-y-4 p-0">
                  <li>
                    If developmental delays in children are not detected early,
                    they will not receive the necessary and timely support. This
                    makes it difficult for them to go to school, integrate into
                    society and live independently later on.
                  </li>
                  <li>
                    The system provides tools and professional assessments to
                    help parents have orientation and ways to observe and
                    monitor the activities of young children.
                  </li>
                </ul>
              </Typography.Paragraph>
              <Button className="w-full bg-primary-color  hover:bg-color-accent-sky hover:text-color-gray-10">
                Learn more
              </Button>
            </div>
          </CourseStyledCard>
          <CourseStyledCard
            className="mx-2 h-fit w-1/3 p-4 text-base shadow-xl hover:scale-105"
            title={
              <Typography.Text className="py-4 text-lg font-bold">
                Knowledge blog and courses
              </Typography.Text>
            }
            extra={<LineChartOutlined className="text-4xl" />}
          >
            <div className="bg-info-color-light py-4 px-3">
              <Typography.Paragraph className="mb-20">
                <ul className="m-0 list-none space-y-4 p-0">
                  <li>
                    Providing knowledge blogs from experts from health centers
                    and charitable organizations with the desire to spread
                    knowledge about how to educate young children when facing
                    speech delays, developmental delays, autism
                  </li>
                  <li>
                    Providing courses to help parents get a clear and confident
                    roadmap and knowledge
                  </li>
                </ul>
              </Typography.Paragraph>
              <Button className="w-full bg-primary-color  hover:bg-color-accent-sky hover:text-color-gray-10">
                Learn more
              </Button>
            </div>
          </CourseStyledCard>
          <CourseStyledCard
            className="mx-2 h-fit w-1/3 p-4 text-base shadow-xl hover:scale-105"
            title={
              <Typography.Text className="py-4 text-lg font-bold">
                And more than that...
              </Typography.Text>
            }
            extra={<LineChartOutlined className="text-4xl" />}
          >
            <div className="bg-info-color-light py-4 px-3">
              <Typography.Paragraph className="mb-20">
                <ul className="m-0 list-none space-y-4 p-0">
                  <li>
                    HappyChild also aims to spread knowledge and awareness to
                    the community
                  </li>
                  <li>
                    Helping young children with developmental difficulties
                    integrate into the community, receive and love like normal
                    children
                  </li>
                </ul>
              </Typography.Paragraph>
              <Button className="w-full bg-primary-color  hover:bg-color-accent-sky hover:text-color-gray-10">
                Learn more
              </Button>
            </div>
          </CourseStyledCard>
        </StyledDiv>
        <Divider />
      </Col>
      <Col span={24} className="flex flex-col items-center gap-4">
        <Typography className="text-3xl font-bold text-primary-color">
          Progressing towards development
        </Typography>
        <div className="flex w-2/3 items-center justify-between rounded-xl bg-secondary-color p-8">
          <div className="flex flex-col justify-center gap-4">
            <Typography className="text-3xl font-bold text-[white]">
              Contact the experts
            </Typography>
            <Typography className="text-base italic text-[white]">
              Connect, chat, video call, watch thematic livestreams and
              Q&A,.......
            </Typography>
            <Button className="w-[10rem]">Learn more</Button>
          </div>
          <Image src={Specialist} preview={false} width={150} />
        </div>
        <div className="flex w-2/3 items-center justify-between rounded-xl bg-primary-color p-8">
          <div className="flex flex-col justify-center gap-4">
            <Typography className="text-3xl font-bold text-[white]">
              Diary to monitor the child's treatment progress
            </Typography>
            <Typography className="text-base italic text-[white]">
              A tool to record the activities and assessment of young children
              during treatment and follow-up from parents
            </Typography>
            <Button className="w-[10rem]">Learn more</Button>
          </div>
          <Image src={Assessment} preview={false} width={150} />
        </div>
        <div className="flex w-2/3 items-center justify-between rounded-xl bg-secondary-color p-8">
          <div className="flex flex-col justify-center gap-4">
            <Typography className="text-3xl font-bold text-[white]">
              Community
            </Typography>
            <Typography className="text-base italic text-[white]">
              Through forums, parents can share experiences and knowledge to
              support each other, thereby spreading awareness to everyone around
              them.
            </Typography>
            <Button className="w-[10rem]">Learn more</Button>
          </div>
          <Image src={Community} preview={false} width={200} />
        </div>
      </Col>
    </Row>
  );
}
