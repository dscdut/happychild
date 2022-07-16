import { Avatar, Card, Divider, Typography } from 'antd';
import { AuthorList } from '..';
import { StyledCard } from '../styles';

const { Paragraph, Title, Text } = Typography;

function AboutAuthor() {
  return (
    <StyledCard className="px-3 shadow-sm">
      <div className="my-2">
        <Title level={2} className="m-0 text-color-gray-10">
          Thông Tin Về Khóa Học
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
        Khóa học dành cho bố mẹ của trẻ nghi ngờ hoặc có tự kỷ, chậm phát triển,
        châm nói, v.v. ở Thừa Thiên Huế, Quảng Nam, Quảng Trị do Tổ chức Y tế
        Thế giới (WHO) xây dựng và được Trung tâm Sáng kiến Sức khỏe và Dân số
        (C.CIHP) thích ứng, triển khai thực hiện trong khuôn khổ dự án Tôi lớn
        mạnh với sự tài trợ của Cơ quan Phát triển quốc tế Hoa Kỳ (USAID).
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
