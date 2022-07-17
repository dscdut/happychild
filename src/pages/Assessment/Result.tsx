/* eslint-disable max-lines */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/naming-convention */
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Typography, Image, Card } from 'antd';
import Slider, { SliderMarks } from 'antd/lib/slider';
import dayjs from 'dayjs';
import Children from '#/assets/images/group-diverse-cheerful-kids_53876-138030.jpg';

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
  const navigate = useNavigate();
  const results: ResultProps[] = JSON.parse(
    localStorage.getItem('results') as string,
  );
  const childInformation: ChildInformation = JSON.parse(
    localStorage.getItem('childInformation') as string,
  );
  const date = Date().toString();
  const totalResult = Math.floor(
    (results[0].result + results[1].result + results[2].result) / 3,
  );
  //   console.log(totalResult);
  return (
    <Col span={24} className="px-32 py-12">
      <div className="h-full w-full rounded-xl border-[1px] border-color-gray-50">
        <Col span={24}>
          <Image
            src={Children}
            className="w-full rounded-t-2xl object-cover"
            preview={false}
          />
        </Col>
        <div className="px-12">
          <Row className="flex items-center justify-center">
            <Col span={24} className="flex items-center justify-center">
              <Typography.Text className="m-4 text-2xl font-semibold text-primary-color">
                Kết quả bài sàng lọc đánh giá phát triển theo độ tuổi - ASQ®-3
              </Typography.Text>
            </Col>
            <Typography.Text className="text-gray mb-12 text-lg font-semibold text-color-gray-40">
              (Bộ câu hỏi Ba mươi sáu tháng tuổi)
            </Typography.Text>
          </Row>
          <Typography.Text className="text-gray flex justify-start text-lg font-semibold text-primary-color">
            1. Thông tin chung
          </Typography.Text>
          <div className="flex flex-row justify-between space-x-8 px-12 py-8">
            <Card style={{ width: 300 }} className="flex justify-center">
              <p>
                Tên trẻ:{' '}
                <span className="font-semibold">{childInformation.name}</span>
              </p>
              <p>
                Mã trẻ: <span className="font-semibold">A0400033570001</span>
              </p>
              <p>
                Ngày sinh của trẻ:{' '}
                <span className="font-semibold">5-7-2019</span>
              </p>
              <p>
                SDT người trả lời:{' '}
                <span className="font-semibold">
                  {childInformation.phoneNumber}
                </span>
              </p>
              <p>
                {' '}
                Ngày trả lời:{' '}
                <span className="font-semibold">
                  {dayjs(date).format('DD MMM YYYY, hh:mm')}
                </span>
              </p>
            </Card>
            <Card style={{ width: 600 }} className="flex justify-center">
              <p className="flex flex-row items-center text-3xl text-error-color">
                <FrownOutlined />
                <Typography.Text className="text-gray ml-4 flex justify-start text-lg text-color-gray-30">
                  Vùng điểm thể hiện trẻ đang gặp khó khăn
                </Typography.Text>
              </p>
              <p className="flex flex-row items-center text-3xl text-color-dark-mode-40">
                <MehOutlined />
                <Typography.Text className="text-gray ml-4 flex justify-start text-lg text-color-gray-30">
                  Vùng điểm thể hiện trẻ cần được theo dõi thêm và làm sàng lọc
                  lại do một số kỹ năng chưa thành thục
                </Typography.Text>
              </p>
              <p className="flex items-center text-3xl text-primary-color">
                <SmileOutlined />
                <Typography.Text className="text-gray  ml-4 flex justify-start text-lg text-color-gray-30">
                  Vùng điểm thể hiện trẻ có sự phát triển bình thường
                </Typography.Text>
              </p>
            </Card>
          </div>
          <div>
            <Typography.Text className="text-gray mb-4 flex justify-start text-lg font-semibold text-primary-color ">
              2. Điểm của trẻ sau khi làm bài sàng lọc
            </Typography.Text>
            <Row className="m-4 flex justify-start">
              <Col span={4}>
                <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                  Lĩnh vực
                </Typography.Text>
              </Col>
              <Col span={6}>
                <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                  Điểm của trẻ
                </Typography.Text>
              </Col>
              <Col span={4}>
                <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                  0
                </Typography.Text>
              </Col>
              <Col span={4}>
                <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                  20
                </Typography.Text>
              </Col>
              <Col span={4}>
                <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                  40
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
                  20: {
                    style: {
                      color: '#f50',
                      fontSize: '1rem',
                    },
                    label: <FrownOutlined />,
                  },
                  40: {
                    style: {
                      fontSize: '1rem',
                    },
                    label: <MehOutlined />,
                  },
                  60: {
                    style: {
                      color: '#81ceed',
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
                    <Col span={6}>
                      <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                        {result.result}
                      </Typography.Text>
                    </Col>
                    <Col span={12}>
                      <Slider
                        step={1}
                        marks={marks}
                        defaultValue={result.result}
                        max={60}
                      />
                    </Col>
                  </>
                );
              })}
            </Row>
          </div>
          <div>
            <Typography.Text className="text-gray mb-4 flex justify-start text-lg font-semibold text-primary-color ">
              3. Kết quả và đánh giá
            </Typography.Text>
            <div className="flex flex-row space-x-8">
              <Card style={{ width: 450 }}>
                <p className="text-gray text-lg">
                  Tổng điểm <span className="font-semibold">{totalResult}</span>{' '}
                  {' - '}
                  <span className="font-semibold">
                    {totalResult < 20 ? (
                      <span className="text-error-color">Mức độ nguy hiểm</span>
                    ) : totalResult < 40 ? (
                      <span className="text-color-accent-yellow">
                        Mức độ cảnh báo
                      </span>
                    ) : (
                      <span className="text-success-color">Mức độ an toàn</span>
                    )}
                  </span>
                </p>
                <p className="text-gray text-lg">
                  <span className="font-medium">
                    {totalResult < 20
                      ? 'Con có dấu hiệu chậm phát triển nguy hiểm so với lứa tuổi, ba mẹ cần đến gặp chuyên gia hoặc bác sĩ để có thể chẩn đoán chuyên sâu và đồng hành cùng con.'
                      : totalResult < 40
                      ? 'Con có dấu hiệu chậm phát triển hơn so với lứa tuổi ở mức trung bình.'
                      : 'Trẻ em đang phát triển bình thường.'}
                  </span>
                </p>
                <p className="text-gray text-lg">
                  <span>Giao tiếp cơ bản:</span>
                  <span className="font-semibold">
                    {` ${results[0].result} - `}
                  </span>
                  <span className="font-semibold">
                    {results[0].result < 20 ? (
                      <span className="text-error-color">Mức độ nguy hiểm</span>
                    ) : results[0].result < 40 ? (
                      <span className="text-color-accent-yellow">
                        Mức độ cảnh báo
                      </span>
                    ) : (
                      <span className="text-success-color">Mức độ an toàn</span>
                    )}
                  </span>
                </p>
                <p className="text-gray text-lg">
                  <span>Vận động thô:</span>
                  <span className="font-semibold">
                    {` ${results[1].result} - `}
                  </span>
                  <span className="font-semibold">
                    {results[1].result < 20 ? (
                      <span className="text-error-color">Mức độ nguy hiểm</span>
                    ) : results[1].result < 40 ? (
                      <span className="text-color-accent-yellow">
                        Mức độ cảnh báo
                      </span>
                    ) : (
                      <span className="text-success-color">Mức độ an toàn</span>
                    )}
                  </span>
                </p>
                <p className="text-gray text-lg">
                  <span>Vận động tinh:</span>
                  <span className="font-semibold">
                    {` ${results[2].result} - `}
                  </span>
                  <span className="font-semibold">
                    {results[2].result < 20 ? (
                      <span className="text-error-color">Mức độ nguy hiểm</span>
                    ) : results[2].result < 40 ? (
                      <span className="text-color-accent-yellow">
                        Mức độ cảnh báo
                      </span>
                    ) : (
                      <span className="text-success-color">Mức độ an toàn</span>
                    )}
                  </span>
                </p>
                <p className="text-gray text-lg">
                  <span>Giải Quyết Vấn Đề:</span>
                  <span className="font-semibold">
                    {` ${results[3].result} - `}
                  </span>
                  <span className="font-semibold">
                    {results[3].result < 20 ? (
                      <span className="text-error-color">Mức độ nguy hiểm</span>
                    ) : results[3].result < 40 ? (
                      <span className="text-color-accent-yellow">
                        Mức độ cảnh báo
                      </span>
                    ) : (
                      <span className="text-success-color">Mức độ an toàn</span>
                    )}
                  </span>
                </p>
                <p className="text-gray text-lg">
                  <span>Cá Nhân Xã Hội:</span>
                  <span className="font-semibold">
                    {` ${results[4].result} - `}
                  </span>
                  <span className="font-semibold">
                    {results[4].result < 20 ? (
                      <span className="text-error-color">Mức độ nguy hiểm</span>
                    ) : results[4].result < 40 ? (
                      <span className="text-color-accent-yellow">
                        Mức độ cảnh báo
                      </span>
                    ) : (
                      <span className="text-success-color">Mức độ an toàn</span>
                    )}
                  </span>
                </p>
              </Card>
              <Card style={{ width: 450 }}>
                <p className=" text-lg font-semibold text-primary-color ">
                  Nhận xét chung
                </p>
                <p className="text-gray text-lg">
                  {totalResult < 20 ? (
                    <>
                      <span className="font-medium leading-4">
                        Các lĩnh vực như Giao tiếp, Vận động thô, Vận động tinh,
                        Giải quyết vấn đề, Cá nhân xã hội có điểm nằm trong vùng
                        nguy hiểm. Điều đó có nghĩa có một số các kỹ năng trong
                        các lĩnh vực này trẻ chưa thực hiện được, hoặc đã thực
                        hiện được nhưng chưa thường xuyên tức là trẻ chậm so với
                        các trẻ khác cùng tuổi ở lĩnh vực này.
                      </span>
                    </>
                  ) : totalResult < 40 ? (
                    <>
                      <Col span={24}>
                        <span className="font-medium">
                          Trẻ{' '}
                          <span className="font-semibold">
                            {childInformation.name}
                          </span>{' '}
                          có sự phát triển bình thường ở các lĩnh vực Vận động
                          tinh, Giải quyết vấn đề. Điều này có nghĩa là trẻ phát
                          triển tương đương với trẻ khác ở cùng độ tuổi trong
                          các lĩnh vực này.
                        </span>
                      </Col>
                      <Col span={24}>
                        <span className="font-medium">
                          Các lĩnh vực như{' '}
                          <span className="font-semibold">
                            Giao tiếp, Cá nhân xã hội
                          </span>{' '}
                          có điểm nằm trong vùng báo động. Điều đó có nghĩa có
                          một số các kỹ năng trong các lĩnh vực này trẻ chưa
                          thực hiện được, hoặc đã thực hiện được nhưng chưa
                          thường xuyên.
                        </span>
                      </Col>
                      <Col span={24}>
                        <span className="font-medium">
                          Các lĩnh vực như{' '}
                          <span className="font-semibold">Vận động thô</span> có
                          điểm nằm trong vùng nguy hiểm. Điều đó có nghĩa có một
                          số các kỹ năng trong các lĩnh vực này trẻ chưa thực
                          hiện được, hoặc đã thực hiện được nhưng chưa thường
                          xuyên tức là trẻ chậm so với các trẻ khác cùng tuổi ở
                          lĩnh vực này.
                        </span>
                      </Col>
                    </>
                  ) : (
                    <>
                      <span className="font-medium">
                        Ba mẹ cần giao tiếp tương tác với cháu nhiều hơn Ba mẹ
                        tránh cho bé sử dụng thiết bị điện tử, tối đa 1 tiếng/
                        ngày. Ba mẹ cần kiểm tra bài test này định kỳ 6 tháng
                      </span>
                    </>
                  )}
                </p>
              </Card>
            </div>
            <Col
              span={24}
              className="my-2  text-lg font-semibold text-primary-color "
            >
              Cách xử lý
            </Col>
            <Col span={24}>
              <Typography.Text className="text-gray text-lg">
                {totalResult < 20 ? (
                  <>
                    <p className="font-medium">
                      Con có dấu hiệu chậm phát triển nguy hiểm so với lứa tuổi,
                      ba mẹ cần đến gặp chuyên gia hoặc bác sĩ để có thể chẩn
                      đoán chuyên sâu và đồng hành cùng con.
                    </p>
                    <p className="font-medium">
                      Ba mẹ cần thực sự nghiêm túc nghiên cứu và tìm hiểu về sự
                      phát triển con trẻ. Ba mẹ tiếp tục sử dụng bài kiểm tra
                      chuyên sâu và nên liên hệ chuyên gia, bác sĩ để có thể
                      chẩn đoán tốt nhất.
                    </p>
                    <p className="font-medium">
                      Ba mẹ cần tương tác và luyện tập hành vi cơ bản cho con
                      trẻ bắt chước.
                    </p>
                    <p className="font-medium">
                      Ba mẹ cần cho bé tập thể dục để giải tỏa năng lượng và
                      tăng khả năng tập trung thông qua các môn thể thao: đạp
                      xe, chạy bộ,... Ba mẹ có thể cho con chơi trò chơi, hướng
                      dẫn con trẻ sử dụng đồ đạc an toàn để tăng khả năng xử lý
                      vấn đề Bé có chỉ tương tác xã hội chưa đạt, ba mẹ cần giao
                      tiếp tương tác với cháu nhiều hơn.
                    </p>
                    <p className="font-medium">
                      Ba mẹ tránh cho bé sử dụng thiết bị điện tử, tối đa 1
                      tiếng/ ngày.
                    </p>
                  </>
                ) : totalResult < 40 ? (
                  <>
                    <p className="font-medium">
                      Ba mẹ tiếp tục sử dụng bài kiểm tra chuyên sâu và nên liên
                      hệ chuyên gia, bác sĩ để có thể chẩn đoán tốt nhất.
                    </p>
                    <p className="font-medium">
                      Ba mẹ cần tương tác và luyện tập hành vi cơ bản cho con
                      trẻ bắt chước.
                    </p>
                    <p className="font-medium">
                      Ba mẹ cần cho bé tập thể dục để giải tỏa năng lượng và
                      tăng khả năng tập trung thông qua các môn thể thao: đạp
                      xe, chạy bộ,...{' '}
                    </p>
                    <p className="font-medium">
                      Ba mẹ có thể cho con chơi trò chơi, hướng dẫn con trẻ sử
                      dụng đồ đạc an toàn để tăng khả năng xử lý vấn đề Bé có
                      chỉ tương tác xã hội chưa đạt, ba mẹ cần giao tiếp tương
                      tác với cháu nhiều hơn.
                    </p>
                    <p className="font-medium">
                      Ba mẹ tránh cho bé sử dụng thiết bị điện tử, tối đa 1
                      tiếng/ ngày.
                    </p>
                  </>
                ) : (
                  <>
                    <span className="font-medium">
                      Ba mẹ cần giao tiếp tương tác với cháu nhiều hơn Ba mẹ
                      tránh cho bé sử dụng thiết bị điện tử, tối đa 1 tiếng/
                      ngày. Ba mẹ cần kiểm tra bài test này định kỳ 6 tháng
                    </span>
                  </>
                )}
              </Typography.Text>
            </Col>
            <Col span={24} className="my-2">
              <Typography.Text className="text-gray text-lg">
                {totalResult < 20 ? (
                  <>
                    <span className="font-semibold">
                      Lưu ý: tài liệu bổ trợ cho ba mẹ đồng hành không phải giáo
                      trình cho trẻ mức độ nguy hiểm
                    </span>
                  </>
                ) : totalResult < 40 ? (
                  <>
                    <span className="font-semibold">
                      Lộ trình hướng dẫn ba mẹ đồng hành cùng con chậm phát
                      triển
                    </span>
                  </>
                ) : null}
              </Typography.Text>
            </Col>
            <Col span={24} className="py-6">
              <Typography.Text className="text-gray text-lg">
                {totalResult < 20 ? (
                  <>
                    <iframe
                      className="my-2 rounded-lg"
                      width={800}
                      height={450}
                      src={`https://www.youtube.com/embed/Kp8B0z5oBm4`}
                    />
                  </>
                ) : totalResult < 40 ? (
                  <>
                    <iframe
                      className="my-2 rounded-lg"
                      width={800}
                      height={450}
                      src={`https://www.youtube.com/embed/Kp8B0z5oBm4`}
                    />
                  </>
                ) : (
                  <>
                    <span className="font-semibold">
                      Ba mẹ cần kiểm tra bài test này định kỳ 6 tháng
                    </span>
                  </>
                )}
              </Typography.Text>
            </Col>
          </div>
          <div>
            <Col span={24}>
              <Typography.Text className="text-gray text-lg">
                Gia đình nên đưa trẻ đi đến cơ sở y tế để đánh giá thêm về sự
                phát triển của trẻ và{' '}
                <span className="font-semibold">
                  Khám chuyên khoa nhi (tâm bệnh, tâm lý, ngôn ngữ...), Kiểm tra
                  về vận động của trẻ, Kiểm tra về thính lực cho trẻ, Khám
                  chuyên khoa nhi (khoa tâm bệnh, khoa tâm lý, khoa phục hồi
                  chức năng...), Khám chuyên khoa để kiểm tra thêm.
                </span>
              </Typography.Text>
            </Col>
            <Col span={24} className=" mb-16">
              <Typography.Text className="text-gray text-lg">
                Gia đình có thể tham khảo một số khoá học hữu ích cho sự phát
                triển của trẻ theo{' '}
                <span
                  onClick={() => {
                    navigate('/courses');
                  }}
                  className="cursor-pointer font-semibold text-primary-color"
                >
                  đường link này
                </span>{' '}
                .
              </Typography.Text>
            </Col>
          </div>
        </div>
      </div>
    </Col>
  );
}
