import { ProfileOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Carousel, Col, Image, Row } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseStyledCard } from '../Courses/styles';
import Content1 from './Content1';
import { Content2 } from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import { Content5 } from './Content5';
import ContentSelector from '#/shared/components/ContentSelector';
import AssessmentImage1 from '#/assets/images/assessmentImage1.png';
import AssessmentImage2 from '#/assets/images/assessmentImage2.jpg';
import AssessmentImage3 from '#/assets/images/assessmentImage3.jpg';
import AssessmentImage4 from '#/assets/images/assessmentImage4.jpg';
import AssessmentImage5 from '#/assets/images/assessmentImage5.jpg';

function Index() {
  const navigate = useNavigate();
  const [currentValue, setCurrentValue] = useState(1);

  return (
    <CourseStyledCard className="shadow-xl">
      <Row gutter={[16, 16]}>
        <Col span={9}>
          <Carousel autoplay autoplaySpeed={2000} effect="fade">
            <Image
              src={AssessmentImage1}
              className="rounded-l-xl object-cover"
              height={600}
              width="100%"
              preview={false}
            />
            <Image
              src={AssessmentImage2}
              className="rounded-l-xl object-cover"
              preview={false}
              height={600}
            />
            <Image
              src={AssessmentImage3}
              className="rounded-l-xl object-cover"
              preview={false}
              height={600}
            />
            <Image
              src={AssessmentImage4}
              className="rounded-l-xl object-cover"
              preview={false}
              height={600}
            />
            <Image
              src={AssessmentImage5}
              className="rounded-l-xl object-cover"
              preview={false}
              height={600}
            />
          </Carousel>
        </Col>
        <Col span={15} className="flex flex-col justify-between gap-2 p-4">
          <ContentSelector
            value={currentValue}
            onChange={value => setCurrentValue(value)}
            className="rounded-xl"
            defaultValue={1}
          />
          <div className="h-[400px] overflow-y-auto">
            {currentValue === 1 && <Content1 />}
            {currentValue === 2 && <Content2 />}
            {currentValue === 3 && <Content3 />}
            {currentValue === 4 && <Content4 />}
            {currentValue === 5 && <Content5 />}
          </div>
          <Col className="flex justify-end">
            <Button
              shape="round"
              className="flex h-14 w-[26rem] items-center justify-center gap-4 whitespace-normal bg-secondary-color text-[white]"
              onClick={() => navigate('/assessment/form')}
            >
              <ProfileOutlined />
              Bắt đầu kiểm tra và đánh giá
              <RightOutlined style={{ fontSize: '20px', color: '#fff' }} />
            </Button>
          </Col>
        </Col>
      </Row>
    </CourseStyledCard>
  );
}

export default Index;
