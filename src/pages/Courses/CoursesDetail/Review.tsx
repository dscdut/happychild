import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Col, Rate, Row, Typography, Image } from 'antd';
import Carousel, { CarouselRef } from 'antd/lib/carousel';
import { useRef } from 'react';

import { ReviewList } from '..';
import { StyledCard } from '../styles';

const { Paragraph, Title } = Typography;

function Review() {
  const carouselRef = useRef<CarouselRef | null>(null);

  return (
    <Row gutter={[24, 24]}>
      <Col span={24} className="relative">
        <div className="bg-slate-100">
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
            autoplay
            ref={carouselRef}
            className="bg-slate-100 px-6 py-6"
            draggable
          >
            {ReviewList.map((review, i) => (
              <Col span={24} key={i}>
                <StyledCard className="border-color-accent-sky">
                  <div className="items flex items-center justify-around px-2">
                    <Image
                      className="max-h-[12rem] w-52 rounded-2xl object-cover"
                      src={review.avatar}
                      preview={false}
                    />
                    <div className="w-3/4">
                      <Title level={2}>{review.name}</Title>
                      <Title level={5} className="m-0 text-primary-color">
                        {review.work}
                      </Title>
                      <Rate allowHalf disabled defaultValue={review.rate} />
                      <Paragraph
                        ellipsis={{
                          rows: 4,
                          expandable: false,
                          symbol: 'label.etc',
                        }}
                        className="mb-2 text-lg"
                      >
                        Khóa học dành cho bố mẹ của trẻ nghi ngờ hoặc có tự kỷ,
                        chậm phát triển, chậm nói, v.v. được xây dựng từ các
                        phương pháp can thiệp có nhiều bằng chứng và từ kinh
                        nghiệm hướng dẫn can thiệp trên hơn 400 gia đình tại các
                        tỉnh thành Việt Nam
                      </Paragraph>
                    </div>
                  </div>
                </StyledCard>
              </Col>
            ))}
          </Carousel>
        </div>
      </Col>
    </Row>
  );
}

export default Review;
