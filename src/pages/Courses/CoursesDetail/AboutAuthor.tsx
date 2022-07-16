import { Avatar, Card, Divider, Typography } from 'antd';
import { AuthorList } from '..';
import { StyledCard } from '../styles';

const { Paragraph, Title, Text } = Typography;

function AboutAuthor() {
  return (
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
        develop the behaviors you would like to see in your child. The lessons
        provide step-by-step instructions and demonstrations to improve your
        course of action with both children and adolescents. Among many
        techniques, you will learn how even simple modifications to tone of
        voice and phrasing can lead to more compliance. The course will also
        shed light on many parenting misconceptions and ineffective strategies
        that are routinely used. The key to the course is practice. It is not
        enough to know the strategies; you have to do them to reap the rewards.
        Using the techniques on a temporary basis will lead to permanent change.
        Chances are your parenting is perfectly fine and working the way you
        would like. But if you have any frustrations with your child or would
        like improve your effectiveness in changing your behavior, these videos
        will be a very useful guide. Subtitles available in Chinese and Spanish.
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
                <Text className="block text-color-gray-10">{teacher.work}</Text>
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
  );
}

export default AboutAuthor;
