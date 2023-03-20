import { Avatar, Card, Divider, Typography } from 'antd';
import { AuthorList } from '..';
import { StyledCard } from '../styles';

const { Paragraph, Title, Text } = Typography;

function AboutAuthor() {
  return (
    <StyledCard className="pxshadow-sm">
      <div className="mb-5">
        <Title level={2} className="m-0 text-color-gray-10">
            Course Overview
        </Title>
        <Text className="text-color-accent-blue">
          {`${'105,291'}`} recent views
        </Text>
      </div>
      <div className="my-5">
        <Title level={4} className="m-0 mb-1">
          Supporting autistic children in the classroom
        </Title>
        <Paragraph
          ellipsis={{
            rows: 10,
            expandable: false,
            symbol: 'label.etc',
          }}
          className="mb-2 space-y-4 text-justify text-lg"
        >
          <Paragraph>
            Would you like to improve your understanding of autism and 
            learn good practices in autism education?
          </Paragraph>
          <Paragraph>
            This 4-week course addresses important questions about autism 
            education to ensure that children on the autism spectrum are 
            educated to their fullest potential.
          </Paragraph>
        </Paragraph>
      </div>
      <div className="my-5">
        <Title level={4} className="m-0 mb-1">
          Understanding autism in education
        </Title>
        <Paragraph
          ellipsis={{
            rows: 10,
            expandable: false,
            symbol: 'label.etc',
          }}
          className="mb-2 space-y-4 text-justify text-lg"
        >
          <Paragraph>
            The course will start by discovering your knowledge of autism, 
            including signs, symptoms, diagnosis and potential causes. You 
            will explore the special educational needs and disability that 
            can affect the learning ability of a child.
          </Paragraph>
          <Paragraph>
            Integration in the classroom is extremely important, so you will 
            explore how to develop an integral curriculum for autistic students.
          </Paragraph>
          <Paragraph>
            You will also learn about many learning methods for students with 
            ưautism, including special schools in general, special schools for autism, autistic units in high schools and Study in a mainstream class.
          </Paragraph>
        </Paragraph>
      </div>
      <div>
        <Title level={4} className="m-0 mb-1">
          Xây dựng các thực hành tốt cho trẻ tự kỷ
        </Title>
        <Paragraph
          ellipsis={{
            rows: 10,
            expandable: false,
            symbol: 'label.etc',
          }}
          className="mb-2 space-y-4 text-justify text-lg"
        >
          <Paragraph>
            Tiếp theo, chúng tôi sẽ điều tra kỹ lưỡng hơn những gì góp phần vào
            thực hành tốt trong giáo dục tự kỷ, bao gồm cả việc xây dựng bằng
            chứng dựa trên nghiên cứu.
          </Paragraph>
          <Paragraph>
            Chia sẻ các phương pháp hay nhất có thể mang lại lợi ích cho cộng
            đồng tự kỷ, vì vậy chúng ta sẽ khám phá các ứng dụng xã hội như
            SOFA, được đồng thiết kế bởi những người mắc chứng tự kỷ.
          </Paragraph>
          <Paragraph>
            Bạn sẽ học cách thúc đẩy sự hòa nhập, khả năng tiếp cận nhận thức,
            sức khỏe và các kỹ năng học tập ở trường, đồng thời hiểu cách các kỹ
            năng sống có thể mang lại lợi ích cho trẻ tự kỷ ngoài lớp học.
          </Paragraph>
        </Paragraph>
      </div>
      <Divider />
      <div className="grid grid-cols-2 grid-rows-2 items-center justify-center justify-items-center gap-6">
        {AuthorList.map((teacher, index) => (
          <Card className="ml-5 border-color-accent-sky" key={index}>
            <div className="mb-5 flex">
              <Avatar size={100} src={teacher.avatar} className="mr-5" />
              <div>
                <Title level={4} className="m-0 mb-1 text-color-gray-10">
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
