import { Avatar, Card, Divider, Typography } from 'antd';
import { AuthorList } from '..';
import { StyledCard } from '../styles';

const { Paragraph, Title, Text } = Typography;

function AboutAuthor() {
  return (
    <StyledCard className="pxshadow-sm">
      <div className="mb-5">
        <Title level={2} className="m-0 text-color-gray-10">
          Tổng Quan Về Khóa Học
        </Title>
        <Text className="text-color-accent-blue">
          {`${'105,291'}`} recent views
        </Text>
      </div>
      <div className="my-5">
        <Title level={4} className="m-0 mb-1">
          Hỗ trợ trẻ tự kỷ trong lớp học
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
            Bạn có muốn nâng cao hiểu biết của mình về chứng tự kỷ và học cách
            thực hành tốt trong giáo dục tự kỷ không?
          </Paragraph>
          <Paragraph>
            Khóa học kéo dài 4 tuần này giải quyết các câu hỏi quan trọng về
            giáo dục tự kỷ để đảm bảo rằng trẻ em trong phổ tự kỷ được giáo dục
            với tiềm năng lớn nhất của chúng.
          </Paragraph>
        </Paragraph>
      </div>
      <div className="my-5">
        <Title level={4} className="m-0 mb-1">
          Hiểu biết về chứng tự kỷ trong giáo dục
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
            Khóa học sẽ bắt đầu bằng cách khám phá hiểu biết của bạn về chứng tự
            kỷ, bao gồm các dấu hiệu, triệu chứng, chẩn đoán và nguyên nhân tiềm
            ẩn. Bạn sẽ khám phá các nhu cầu giáo dục đặc biệt và khuyết tật có
            thể ảnh hưởng đến khả năng học tập của một đứa trẻ như thế nào.
          </Paragraph>
          <Paragraph>
            Sự hòa nhập trong lớp học là vô cùng quan trọng, vì vậy bạn sẽ khám
            phá cách phát triển một chương trình giảng dạy hòa nhập cho học sinh
            tự kỷ.
          </Paragraph>
          <Paragraph>
            Bạn cũng sẽ tìm hiểu về nhiều phương thức học tập cho học sinh mắc
            chứng tự kỷ, bao gồm các trường đặc biệt nói chung, các trường đặc
            biệt dành riêng cho chứng tự kỷ, các đơn vị tự kỷ trong các trường
            phổ thông và học trong một lớp học chính thống.
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
