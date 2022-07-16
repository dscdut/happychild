import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Col, Image, Rate, Row, Typography } from 'antd';
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
                <StyledCard className="border-color-accent-sky">
                  <div className="items flex justify-between px-5">
                    <Image
                      className="w-52 rounded-2xl"
                      src={author.avatar}
                      preview={false}
                    />
                    <div className="w-3/4">
                      <Rate allowHalf defaultValue={2.5} />
                      <Paragraph
                        ellipsis={{
                          rows: 4,
                          expandable: false,
                          symbol: 'label.etc',
                        }}
                        className="mb-2 text-base"
                      >
                        Autism spectrum disorder (ASD) is a developmental
                        disability caused by differences in the brain. People
                        with ASD often have problems with social communication
                        and interaction, and restricted or repetitive behaviors
                        or interests. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eveniet, nam repudiandae? Ducimus
                        fugiat corporis, officiis quos possimus quia unde
                        accusamus. Sint temporibus quam dicta! Omnis excepturi
                        corporis consequatur suscipit? Exercitationem. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam, architecto porro blanditiis harum dignissimos
                        modi, voluptatum veritatis nostrum quas eligendi
                        officiis. Optio debitis cumque sunt illo in,
                        voluptatibus soluta voluptates!
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
