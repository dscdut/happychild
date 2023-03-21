import {
  FormOutlined,
  PlusCircleFilled,
  ScheduleOutlined,
  SmileOutlined,
  StockOutlined,
} from '@ant-design/icons';
import { Button, Card, Col, Divider, Image, Row, Typography } from 'antd';
import { CourseStyledCard, StyledDiv } from './Courses/styles';
import HappyChild from '#/assets/images/happychild.jpg';
import Thumbnail from '#/assets/images/thumbnail.jpg';
import Specialist from '#/assets/images/specialist.png';
import Community from '#/assets/images/community.png';
import Assessment from '#/assets/images/assessment.png';
import { RefObject, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();
  const introductionRef: RefObject<HTMLDivElement> = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLearnMoreClick = () => {
    if (introductionRef.current != null) {
      introductionRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

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
          <Button block onClick={handleLearnMoreClick}>
            Find out more <PlusCircleFilled />
          </Button>
        </Card>
      </Col>
      <Col span={24}>
        <div
          className="flex flex-col items-center justify-center"
          ref={introductionRef}
        >
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
                Taking test to assess the development level <br />
                and autism of young children
              </Typography.Text>
            }
            extra={<ScheduleOutlined className="text-4xl" />}
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
              <Button
                className="w-full bg-primary-color  
              hover:bg-color-accent-sky hover:text-color-gray-10"
                onClick={() => {
                  scrollToTop();
                  navigate('/assessment');
                }}
              >
                Learn more
              </Button>
            </div>
          </CourseStyledCard>
          <CourseStyledCard
            className="mx-2 h-fit w-1/3 p-4 text-base shadow-xl hover:scale-105"
            title={
              <Typography.Text className="py-4 text-lg font-bold">
                The intervention roadmap for children
              </Typography.Text>
            }
            extra={<StockOutlined className="text-4xl" />}
          >
            <div className="bg-info-color-light py-4 px-3">
              <Typography.Paragraph className="mb-20">
                <ul className="m-0 list-none space-y-4 p-0">
                  <li>
                    In addition to helping parents detect early signs of
                    developmental delays in their children, HappyChild also
                    provides timely intervention roadmaps to help parents
                    improve their children's conditions, such as slow speech
                    development, slow development, and signs of autism,...
                  </li>
                </ul>
              </Typography.Paragraph>
              <Button
                className="w-full bg-primary-color  
              hover:bg-color-accent-sky hover:text-color-gray-10"
                onClick={() => {
                  scrollToTop();
                  navigate('/intervention-roadmap');
                }}
              >
                Learn more
              </Button>
            </div>
          </CourseStyledCard>
          <CourseStyledCard
            className="mx-2 h-fit w-1/3 p-4 text-base shadow-xl hover:scale-105"
            title={
              <Typography.Text className="py-4 text-lg font-bold">
                Monitor the development of children <br />
                through tracking log
              </Typography.Text>
            }
            extra={<FormOutlined className="text-4xl" />}
          >
            <div className="bg-info-color-light py-4 px-3">
              <Typography.Paragraph className="mb-20">
                <ul className="m-0 list-none space-y-4 p-0">
                  <li>
                    HappyChild provides a diary tracking feature that allows
                    parents to monitor their child's development, thereby
                    providing accurate guidance on the child's condition.
                  </li>
                  <li>
                    The data in the diary can be used by healthcare
                    organizations to improve the efficiency of diagnosis and
                    child care.
                  </li>
                </ul>
              </Typography.Paragraph>
              <Button
                className="w-full bg-primary-color 
               hover:bg-color-accent-sky hover:text-color-gray-10"
                onClick={() => {
                  scrollToTop();
                  navigate('/tracking-progress');
                }}
              >
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
            <Button
              className="w-[10rem]"
              onClick={() => {
                scrollToTop();
                navigate('/contact-specialists');
              }}
            >
              Learn more
            </Button>
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
            <Button
              className="w-[10rem]"
              onClick={() => {
                scrollToTop();
                navigate('/tracking-progress');
              }}
            >
              Learn more
            </Button>
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
            <Button
              className="w-[10rem]"
              onClick={() => {
                scrollToTop();
                navigate('/community');
              }}
            >
              Learn more
            </Button>
          </div>
          <Image src={Community} preview={false} width={200} />
        </div>
      </Col>
    </Row>
  );
}
