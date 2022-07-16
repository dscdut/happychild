/* eslint-disable @typescript-eslint/naming-convention */
import {
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';
import Slider, { SliderMarks } from 'antd/lib/slider';

interface ResultProps {
  name: string;
  result: number;
  stageId: number;
}
interface ChildInformation {
  name: string;
  address: string;
  phoneNumber: string;
  isLearning: string;
  schoolName: string;
}
export default function Result() {
  const results: ResultProps[] = JSON.parse(
    localStorage.getItem('results') as string,
  );
  const childInformation: ChildInformation = JSON.parse(
    localStorage.getItem('childInformation') as string,
  );
  const date = Date().toString();

  return (
    <Col span={24}>
      <div className="h-full w-full rounded-xl border-[1px] border-color-gray-50 px-12">
        <Row className="flex items-center justify-center">
          <Typography.Text className="m-4 text-2xl font-semibold text-primary-color">
            Kết quả bài sàng lọc đánh giá phát triển theo độ tuổi - ASQ®-3
          </Typography.Text>
          <Typography.Text className="text-gray text-lg font-semibold text-color-gray-40">
            (Bộ câu hỏi Ba mươi sáu tháng tuổi)
          </Typography.Text>
        </Row>
        <div>
          <Typography.Text className="text-gray flex justify-start text-lg font-semibold">
            1. Thông tin chung
          </Typography.Text>
          <Row className="m-4 rounded-lg border-[1px] border-color-gray-50 bg-color-gray-60 p-4">
            <Col span={12}>
              <Typography.Text className="text-gray flex justify-start text-lg font-medium">
                Tên trẻ:
              </Typography.Text>
            </Col>
            <Col span={12}>
              <Typography.Text className="text-gray flex justify-start text-lg font-semibold text-color-gray-30">
                {childInformation.name}
              </Typography.Text>
            </Col>
            <Col span={12}>
              <Typography.Text className="text-gray flex justify-start text-lg font-medium">
                Mã trẻ:
              </Typography.Text>
            </Col>
            <Col span={12}>
              <Typography.Text className="text-gray flex justify-start text-lg font-semibold text-color-gray-30">
                A0400033570001
              </Typography.Text>
            </Col>
            <Col span={12}>
              <Typography.Text className="text-gray flex justify-start text-lg font-medium">
                Ngày sinh của trẻ:
              </Typography.Text>
            </Col>
            <Col span={12}>
              <Typography.Text className="text-gray flex justify-start text-lg font-semibold text-color-gray-30">
                5-7-2019
              </Typography.Text>
            </Col>
            <Col span={12}>
              <Typography.Text className="text-gray flex justify-start text-lg font-medium">
                SDT người trả lời:
              </Typography.Text>
            </Col>
            <Col span={12}>
              <Typography.Text className="text-gray flex justify-start text-lg font-semibold text-color-gray-30">
                {childInformation.phoneNumber}
              </Typography.Text>
            </Col>
            <Col span={12}>
              <Typography.Text className="text-gray flex justify-start text-lg font-medium">
                Ngày trả lời:
              </Typography.Text>
            </Col>
            <Col span={12}>
              <Typography.Text className="text-gray flex justify-start text-lg font-semibold text-color-gray-30">
                {date}
              </Typography.Text>
            </Col>
          </Row>
        </div>
        <div>
          <Typography.Text className="text-gray mb-4 flex justify-start text-lg font-semibold">
            2. Giải thích về bảng câu hỏi ASQ®-3
          </Typography.Text>
          <Col span={24}>
            <Typography.Text className="text-gray text-lg">
              ASQ®-3 là hệ thống câu hỏi dành cho cha mẹ/người chăm sóc trẻ tự
              điền nhằm sàng lọc và theo dõi sự phát triển toàn diện và phát
              hiện sớm các rối loạn phát triển ở trẻ.
            </Typography.Text>
          </Col>
          <Col span={24}>
            <Typography.Text className="text-gray text-lg">
              ASQ®-3 sàng lọc và theo dõi 5 lĩnh vực phát triển: Giao tiếp, vận
              động thô, vận động tinh, giải quyết vấn đề, và cá nhân - xã hội.
              Mỗi lĩnh vực ở một độ tuổi nhất định có một ngưỡng giới hạn.
            </Typography.Text>
          </Col>
          <Row className="m-4 space-y-4 rounded-lg border-[1px] border-color-gray-50 bg-color-gray-60 p-4">
            <Col span={4} className="flex items-center justify-center text-3xl">
              <UserOutlined />
            </Col>
            <Col span={20}>
              <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                Điểm của trẻ
              </Typography.Text>
            </Col>
            <Col
              span={4}
              className="flex items-center justify-center text-3xl text-error-color"
            >
              <FrownOutlined />
            </Col>
            <Col span={20}>
              <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                Vùng điểm thể hiện trẻ đang gặp khó khăn
              </Typography.Text>
            </Col>
            <Col
              span={4}
              className="flex items-center justify-center text-3xl text-color-dark-mode-40"
            >
              <MehOutlined />
            </Col>
            <Col span={20}>
              <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                Vùng điểm thể hiện trẻ cần được theo dõi thêm và làm sàng lọc
                lại do một số kỹ năng chưa thành thục
              </Typography.Text>
            </Col>
            <Col
              span={4}
              className="flex items-center justify-center text-3xl text-primary-color"
            >
              <SmileOutlined />
            </Col>
            <Col span={20}>
              <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                Vùng điểm thể hiện trẻ có sự phát triển bình thường
              </Typography.Text>
            </Col>
          </Row>
        </div>
        <div>
          <Typography.Text className="text-gray mb-4 flex justify-start text-lg font-semibold">
            3. Điểm của trẻ sau khi làm bài sàng lọc
          </Typography.Text>
          <Row className="m-4 flex justify-start">
            <Col span={3}>
              <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                Lĩnh vực
              </Typography.Text>
            </Col>
            <Col span={6}>
              <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                Điểm của trẻ
              </Typography.Text>
            </Col>
            <Col span={3}>
              <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                0
              </Typography.Text>
            </Col>
            <Col span={3}>
              <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                15
              </Typography.Text>
            </Col>
            <Col span={3}>
              <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                30
              </Typography.Text>
            </Col>
            <Col span={3}>
              <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                45
              </Typography.Text>
            </Col>
            <Col span={1}>
              <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                60
              </Typography.Text>
            </Col>
            {/*  */}
            {results.map(result => {
              const marks: SliderMarks = {
                0: {
                  style: {
                    color: '#f50',
                    fontSize: '1rem',
                  },
                  label: <FrownOutlined />,
                },
                24: {
                  style: {
                    color: '#f50',
                    fontSize: '1rem',
                  },
                  label: <FrownOutlined />,
                },
                47: {
                  style: {
                    fontSize: '1rem',
                  },
                  label: <MehOutlined />,
                },
                70: {
                  style: {
                    color: '#ffcd17',
                    fontSize: '1rem',
                  },
                  label: <SmileOutlined />,
                },
                100: {
                  style: {
                    color: '#ffcd17',
                    fontSize: '1rem',
                  },
                  label: <SmileOutlined />,
                },
              };
              return (
                <>
                  <Col span={4}>
                    <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                      {result.name}
                    </Typography.Text>
                  </Col>
                  <Col span={5}>
                    <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                      {result.result}
                    </Typography.Text>
                  </Col>
                  <Col span={13}>
                    <Slider marks={marks} defaultValue={result.result} />
                  </Col>
                </>
              );
            })}
          </Row>
        </div>
        <div>
          <Typography.Text className="text-gray mb-4 flex justify-start text-lg font-semibold">
            4. Nhận xét chung
          </Typography.Text>
          <Col span={24}>
            <Typography.Text className="text-gray text-lg">
              Trẻ <span className="font-semibold">Kiem Tran Van</span> có sự
              phát triển bình thường ở các lĩnh vực{' '}
              <span className="font-semibold">Vận động tinh</span>. Điều này có
              nghĩa là trẻ phát triển tương đương với trẻ khác ở cùng độ tuổi
              trong các lĩnh vực này.
            </Typography.Text>
          </Col>
          <Col span={24}>
            <Typography.Text className="text-gray text-lg">
              Các lĩnh vực như{' '}
              <span className="font-semibold">
                Giao tiếp, Vận động thô, Cá nhân xã hội
              </span>{' '}
              có điểm nằm trong vùng màu xám. Điều đó có nghĩa có một số các kỹ
              năng trong các lĩnh vực này trẻ chưa thực hiện được, hoặc đã thực
              hiện được nhưng chưa thường xuyên.
            </Typography.Text>
          </Col>
          <Col span={24}>
            <Typography.Text className="text-gray text-lg">
              Các lĩnh vực như{' '}
              <span className="font-semibold">Giải quyết vấn đề</span> có điểm
              nằm trong vùng màu đậm. Điều đó có nghĩa có một số các kỹ năng
              trong các lĩnh vực này trẻ chưa thực hiện được, hoặc đã thực hiện
              được nhưng chưa thường xuyên tức là trẻ chậm so với các trẻ khác
              cùng tuổi ở lĩnh vực này.
            </Typography.Text>
          </Col>
        </div>
        <div>
          <Typography.Text className="text-gray mb-4 flex justify-start text-lg font-semibold">
            5. Gợi ý cho gia đình
          </Typography.Text>
          <Col span={24}>
            <Typography.Text className="text-gray text-lg">
              Gia đình nên đưa trẻ đi đến cơ sở y tế để đánh giá thêm về sự phát
              triển của trẻ và{' '}
              <span className="font-semibold">
                Khám chuyên khoa nhi (tâm bệnh, tâm lý, ngôn ngữ...), Kiểm tra
                về vận động của trẻ, Kiểm tra về thính lực cho trẻ, Khám chuyên
                khoa nhi (khoa tâm bệnh, khoa tâm lý, khoa phục hồi chức
                năng...), Khám chuyên khoa để kiểm tra thêm.
              </span>
            </Typography.Text>
          </Col>
          <Col span={24}>
            <Typography.Text className="text-gray text-lg">
              Gia đình có thể tham khảo một số trò chơi hữu ích cho sự phát
              triển của trẻ theo{' '}
              <a href="https://hongngochospital.vn/dau-hieu-tre-bi-tu-ky/?fbclid=IwAR0oDAOnJcZMDxri7FOohtIvQ82igevpVD5NUTOu8LlbEQL7n6oWSMhfZEY">
                đường link này
              </a>{' '}
              .
            </Typography.Text>
          </Col>
        </div>
      </div>
    </Col>
  );
}
