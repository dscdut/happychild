import {
  DislikeOutlined,
  LeftOutlined,
  LikeOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Col, Rate, Row, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import Carousel, { CarouselRef } from 'antd/lib/carousel';
import { useRef } from 'react';

import { AuthorList } from '..';
import { StyledCard } from '../styles';

const { Paragraph } = Typography;

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
            {AuthorList.map((author, i) => (
              <Col span={24} key={i}>
                <StyledCard className="border-primary-color">
                  <div className="items flex gap-4 px-2">
                    <Avatar src={author?.avatar} size={100} />
                    <div className="w-3/4">
                      <Rate disabled allowHalf defaultValue={2.5} />
                      <Paragraph
                        ellipsis={{
                          rows: 4,
                          expandable: false,
                          symbol: 'label.etc',
                        }}
                        className="mb-2 text-base"
                      >
                        Khóa học dành cho bố mẹ của trẻ nghi ngờ hoặc có tự kỷ,
                        chậm phát triển, chậm nói, v.v. được xây dựng từ các
                        phương pháp can thiệp có nhiều bằng chứng và từ kinh
                        nghiệm hướng dẫn can thiệp trên hơn 400 gia đình tại các
                        tỉnh thành Việt Nam
                      </Paragraph>
                    </div>
                  </div>
                  <div>
                    <DislikeOutlined />
                    <LikeOutlined />
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
