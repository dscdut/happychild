import {
  FormOutlined,
  PlusCircleFilled,
  ScheduleOutlined,
  SmileOutlined,
  StockOutlined,
} from '@ant-design/icons';
import { Button, Card, Col, Divider, Image, Row, Typography } from 'antd';
import { CourseStyledCard, StyledDiv } from './Courses/styles';
import HappyChild from '#/assets/images/new-logo.jpg';
import Thumbnail from '#/assets/images/thumbnail.jpg';
import Specialist from '#/assets/images/specialist.png';
import Intervention from '#/assets/images/intervention-roadmap-homepage.png';

import Assessment from '#/assets/images/assessment.png';
import { RefObject, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '#/shared/utils/tools';

export default function Index() {
  const navigate = useNavigate();
  const introductionRef: RefObject<HTMLDivElement> = useRef(null);

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
          className="sm:absolute  px-2 top-[10rem] sm:right-[9.375rem] sm:w-2/6 rounded-xl bg-[#566573] bg-opacity-[80%] p-4 shadow-xl"
          bordered={false}
        >
          <Typography.Title
            level={2}
            className="text-center text-5xl font-bold text-[white]"
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
        <StyledDiv className="flex flex-col sm:flex-row w-full">
          <CourseStyledCard
            className="mx-2 sm:w-1/3 my-5 text-base shadow-xl transition duration-300 hover:scale-105"
            title={
              <div
                className="mr-5 py-4 text-lg font-bold"
                style={{
                  minHeight: '95px',
                }}
              >
                Taking test to assess the development level <br />
                and autism of young children
              </div>
            }
            extra={<ScheduleOutlined className="text-3xl" />}
          >
            <div
              className="flex h-full flex-col justify-between bg-info-color-light py-4 px-3 "
              style={{
                minHeight: '350px',
                display: '',
              }}
            >
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
                className="w-full bg-primary-color text-[white]  
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
            className="mx-2 sm:w-1/3 my-5 p-4 text-base shadow-xl transition duration-300 hover:scale-105"
            title={
              <div
                className="mr-5 py-4 text-lg font-bold"
                style={{
                  minHeight: '95px',
                }}
              >
                The intervention roadmap for children
              </div>
            }
            extra={<StockOutlined className="text-3xl" />}
          >
            <div
              className="flex h-full flex-col justify-between bg-info-color-light py-4 px-3 "
              style={{
                minHeight: '350px',
                display: '',
              }}
            >
              <Typography.Paragraph className="row-span-2">
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
                className="w-full bg-primary-color text-[white]  
              hover:bg-color-accent-sky hover:text-color-gray-10"
                onClick={() => {
                  scrollToTop();
                  navigate('/intervention-guide');
                }}
              >
                Learn more
              </Button>
            </div>
          </CourseStyledCard>
          <CourseStyledCard
            className="mx-2 sm:w-1/3 my-5 p-4 text-base shadow-xl transition duration-300 hover:scale-105"
            title={
              <div
                className="mr-5 py-4 text-lg font-bold"
                style={{
                  minHeight: '95px',
                }}
              >
                Monitor the development of children <br />
                through tracking log
              </div>
            }
            extra={<FormOutlined className="text-3xl" />}
          >
            <div
              className="flex h-full flex-col justify-between bg-info-color-light py-4 px-3 "
              style={{
                minHeight: '350px',
                display: '',
              }}
            >
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
                className="w-full bg-primary-color text-[white] 
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
      <Col span={24} className="flex flex-col items-center gap-4 ">
        <Typography className="text-3xl text-center font-bold text-primary-color">
          Progressing towards development
        </Typography>
        <div className="flex w-2/3 items-center justify-between rounded-xl bg-secondary-color p-8">
          <div className="flex flex-col justify-center gap-4">
            <Typography className="text-3xl font-bold text-[white]">
              Contact the experts
            </Typography>
            <Typography className="text-base italic text-[white]">
              Connect, chat, video call, watch thematic livestreams and Q&A,...
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
        <div className="flex w-2/3 items-center justify-between rounded-xl bg-ternary-color p-8">
          <div className="flex flex-col justify-center gap-4">
            <Typography className="text-3xl font-bold text-[black]">
              Intervention guide
            </Typography>
            <Typography className="text-base italic text-[black]">
              Providing appropriate intervention guide to each child's age
              group.
            </Typography>
            <Button
              className="w-[10rem]"
              onClick={() => {
                scrollToTop();
                navigate('/intervention-guide');
              }}
            >
              Learn more
            </Button>
          </div>
          <Image src={Intervention} preview={false} width={200} />
        </div>
        <div className="flex w-2/3 items-center justify-between rounded-xl bg-primary-color p-8">
          <div className="flex flex-col justify-center gap-4">
            <Typography className="text-3xl font-bold text-[white]">
              Diary to monitor the child's treatment progress
            </Typography>
            <Typography className="text-base italic text-[white]">
              A tool to record the activities and assessment of young children
              during treatment and follow-up from parents.
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
      </Col>
    </Row>
  );
}
