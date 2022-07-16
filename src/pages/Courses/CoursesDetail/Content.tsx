import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {
  Avatar,
  Card,
  Carousel,
  Col,
  Divider,
  Image,
  Rate,
  Row,
  Typography,
} from 'antd';
import { CarouselRef } from 'antd/lib/carousel';
import { useRef } from 'react';
import { AuthorList } from '..';
import Navbar from '../Navbar';
import { StyledCard } from '../styles';

const { Paragraph, Title, Text } = Typography;

function Content() {
  const carouselRef = useRef<CarouselRef | null>(null);

  return (
    <Row gutter={[24, 24]}>
      <Col span={18} className="text-base">
        <StyledCard className="px-3 shadow-sm">
          <div className="my-2">
            <Title level={2} className="m-0 text-color-gray-10">
              About this Course
            </Title>
            <Text className="text-color-accent-blue">
              {`${'105,291'}`} recent views
            </Text>
          </div>
          <Paragraph
            ellipsis={{
              rows: 10,
              expandable: false,
              symbol: 'label.etc',
            }}
            className="mb-2 text-base "
          >
            Everyday Parenting gives you access to a toolkit of behavior-change
            techniques that will make your typical day in the home easier as you
            develop the behaviors you would like to see in your child. The
            lessons provide step-by-step instructions and demonstrations to
            improve your course of action with both children and adolescents.
            Among many techniques, you will learn how even simple modifications
            to tone of voice and phrasing can lead to more compliance. The
            course will also shed light on many parenting misconceptions and
            ineffective strategies that are routinely used. The key to the
            course is practice. It is not enough to know the strategies; you
            have to do them to reap the rewards. Using the techniques on a
            temporary basis will lead to permanent change. Chances are your
            parenting is perfectly fine and working the way you would like. But
            if you have any frustrations with your child or would like improve
            your effectiveness in changing your behavior, these videos will be a
            very useful guide. Subtitles available in Chinese and Spanish.
          </Paragraph>
          <Divider />
          <div className="grid grid-cols-2 grid-rows-2 items-center justify-center justify-items-center gap-6">
            {AuthorList.map((teacher, index) => (
              <Card className="ml-5 border-color-accent-sky" key={index}>
                <div className="mb-5 flex">
                  <Avatar size={100} src={teacher.avatar} className="mr-5" />
                  <div className="text-justify">
                    <Title level={4} className="text-color-gray-10">
                      {teacher.name}
                    </Title>
                    <Text className="block text-color-gray-10">
                      {teacher.work}
                    </Text>
                    <Text className="text-color-accent-blue">
                      {`${'105,291'}`} recent views
                    </Text>
                  </div>
                </div>
                <Paragraph
                  ellipsis={{
                    rows: 3,
                    expandable: false,
                    symbol: 'label.etc',
                  }}
                  className="text-color-gray-10"
                >
                  {teacher.des}
                </Paragraph>
              </Card>
            ))}
          </div>
        </StyledCard>
      </Col>
      <Col span={6}>
        <Navbar />
      </Col>
      <Col span={24}>
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
                            disability caused by differences in the brain.
                            People with ASD often have problems with social
                            communication and interaction, and restricted or
                            repetitive behaviors or interests. Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Eveniet, nam
                            repudiandae? Ducimus fugiat corporis, officiis quos
                            possimus quia unde accusamus. Sint temporibus quam
                            dicta! Omnis excepturi corporis consequatur
                            suscipit? Exercitationem. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Magnam, architecto
                            porro blanditiis harum dignissimos modi, voluptatum
                            veritatis nostrum quas eligendi officiis. Optio
                            debitis cumque sunt illo in, voluptatibus soluta
                            voluptates!
                          </Paragraph>
                        </div>
                      </div>
                    </StyledCard>
                  </Col>
                ))}
              </Carousel>
            </div>
          </Col>
          {/* */}
        </Row>
      </Col>
    </Row>
  );
}

export default Content;
