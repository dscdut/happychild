import { LinkOutlined } from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';

export default function Introduction() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24} className="flex flex-col gap-2">
        <Typography className="text-lg font-bold">1, ASQ là gì?</Typography>
        <Typography className="ml-4">
          <strong>ASQ (Ages and Stages Questionnaires)</strong> - Bảng câu hỏi
          Độ tuổi và Giai đoạn phát triển là hệ thống câu hỏi dành cho cha
          mẹ/người chăm sóc trẻ hoàn thiện nhằm sàng lọc và theo dõi sự phát
          triển toàn diện của trẻ từ 1 tháng đến 6 tuổi, trên cơ sở đó phát hiện
          sớm các nguy cơ chậm phát triển ở trẻ, do các chuyên gia Đại học
          Oregon, Hoa Kỳ xây dựng và hoàn thiện trong hơn 40 năm qua.
        </Typography>
        <Typography className="ml-4">
          ASQ-3 được coi như tiêu chuẩn vàng để sàng lọc sự phát triển cho trẻ.
          ASQ-3 đã được phát triển thành nhiều thứ tiếng, trong đó có phiên bản
          tiếng Việt với câu từ dễ hiểu và dễ thực hiện.
        </Typography>
        <Typography className="ml-4">
          ASQ sàng lọc và theo dõi 5 lĩnh vực phát triển của trẻ: giao tiếp, vận
          động thô, vận động tinh, giải quyết vấn đề và cá nhân - xã hội.
        </Typography>
      </Col>
      <Col span={24} className="flex flex-col gap-2">
        <Typography className="text-lg font-bold">
          2, Mất bao lâu để thực hiện ASQ-3?
        </Typography>
        <Typography className="ml-4">
          Cha mẹ hoặc người chăm sóc trẻ trực tiếp sẽ mất tầm 10-15 phút để hoàn
          thành Bộ câu hỏi sàng lọc.
        </Typography>
        <Typography className="ml-4">
          Phần tính điểm sẽ do hệ thống tiến hành xử lí và thực hiện.
        </Typography>
      </Col>
      <Col span={24} className="flex flex-col gap-2">
        <Typography className="text-lg font-bold">
          3, ASQ-3 có dễ sử dụng không?
        </Typography>
        <Typography className="ml-4">
          Bộ câu hỏi ASQ-3 được viết ở trình độ phổ thông và được minh họa rất
          dễ hiểu. Mỗi bản câu hỏi sẽ có: - Chỉ dẫn rõ ràng, dễ hiểu - 30 câu
          hỏi diễn đạt đơn giản cho 5 lĩnh vực, mỗi lĩnh vực gồm 6 hoạt động. -
          Kết quả sàng lọc gồm điểm từng lĩnh vực và nhận xét chung.
        </Typography>
      </Col>
      <Col span={24} className="flex flex-col gap-2">
        <Typography className="text-lg font-bold">
          4, Cha mẹ tham gia vào ASQ-3 như thế nào?
        </Typography>
        <Typography className="ml-4">
          ASQ-3 dựa trên việc cha mẹ quan sát trẻ, sau đó hoàn thành các bộ câu
          hỏi để đánh giá khả năng của trẻ.
        </Typography>
        <Typography className="ml-4">
          Việc hoàn thành bộ câu hỏi còn giúp cha mẹ hiểu hơn về con mình.
        </Typography>
      </Col>
      <Col span={24} className="flex flex-col gap-2">
        <Typography className="text-lg font-bold">
          5, Hướng dẫn về bộ câu hỏi ASQ-3:
        </Typography>
        <Typography className="ml-4">
          Với mỗi hoạt động, hãy đánh dấu vào ô:
        </Typography>
        <Typography className="ml-8">
          - CÓ (nếu trẻ thực hiện thường xuyên),
        </Typography>
        <Typography className="ml-8">
          - THỈNH THOẢNG (nếu trẻ thỉnh thoảng thực hiện được hoạt động), và
        </Typography>
        <Typography className="ml-8">
          - CHƯA (nếu trẻ chưa thực hiện được hoạt động).
        </Typography>
        <Typography className="ml-4">
          Bạn cần để cho trẻ thực hiện thử mỗi hoạt động trước khi bạn đánh dấu
          vào ô.
        </Typography>
        <Typography className="ml-4">
          Hãy hoàn thành bảng câu hỏi này như một trò chơi vui vẻ đối với bạn và
          trẻ.
        </Typography>
        <Typography className="ml-4">
          Đảm bảo rằng trẻ được nghỉ ngơi, ăn uống đầy đủ và sẵn sàng tham gia
          cùng bạn.
        </Typography>
      </Col>
      <Col span={24} className="flex flex-col gap-2">
        <Typography className="text-lg font-bold">
          6, Xem thêm chi tiết về ASQ-3:
        </Typography>
        <Typography className="ml-4">
          <a
            href="http://vci.vnu.edu.vn/upload/15022/pdf/576382617f8b9a62578b4595.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <LinkOutlined /> Chi tiết về ASQ-3
          </a>
        </Typography>
      </Col>
    </Row>
  );
}
