import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Card, Carousel, Col, Form, Row, Typography } from 'antd';
import { CarouselRef } from 'antd/lib/carousel';
import { useRef } from 'react';
import { Store } from 'antd/lib/form/interface';
import QuestionCard from './QuestionCard';
import { questions } from '#/shared/utils/localData';

export default function AssessmentStart() {
  const carouselRef = useRef<CarouselRef | null>(null);

  const onSubmit = ({ results }: Store) => {
    console.log(
      results?.reduce((sum: number, current: number) => sum + current, 0),
    );
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Card className="w-[80rem] shadow-sm">
        <Form onFinish={onSubmit}>
          <Row>
            <Col span={24}>
              <Typography className="text-3xl font-bold text-primary-color">
                Assessment
              </Typography>
            </Col>
            <Col span={24} className="relative ">
              <div className="bg-slate-100 max-h-[40rem] min-h-[30rem]">
                <div className="absolute left-0 z-30 ml-1 flex h-full items-center">
                  <LeftOutlined
                    className="cursor-pointer text-xl"
                    onClick={() => carouselRef?.current?.prev()}
                  />
                </div>
                <div className="absolute right-0 z-30 mr-1 flex h-full items-center">
                  <RightOutlined
                    className="cursor-pointer text-xl"
                    onClick={() => {
                      carouselRef?.current?.next();
                    }}
                  />
                </div>
                <Carousel
                  ref={carouselRef}
                  className="bg-slate-100 px-6 py-12"
                  infinite={false}
                  draggable
                >
                  <div>Introduction</div>
                  {questions?.map((question, index) => (
                    <Form.Item key={index} name={['results', index]} noStyle>
                      <QuestionCard index={index} question={question} />
                    </Form.Item>
                  ))}
                  <Button htmlType="submit">Finish</Button>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
}
