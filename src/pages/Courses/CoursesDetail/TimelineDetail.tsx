import { SmileOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import { StyledCard } from '../styles';

function TimelineDetail() {
  return (
    <StyledCard>
      <Timeline>
        <Timeline.Item color="green">
          <p>Tổng Quan</p>
          <p>
            Khám phá sức khỏe tâm thần và hỗ trợ tâm lý xã hội (MHPSS) và các
            chiến lược SEL
          </p>
          <p>Bạn sẽ bao gồm những chủ đề nào?</p>
          <p>Tầm quan trọng của MHPSS / SEL trong Khủng hoảng</p>
          <p>Sức khỏe trẻ em</p>
          <p>Kiến thức và hoạt động SEL nhạy cảm với lứa tuổi</p>
        </Timeline.Item>
        <Timeline.Item color="red">
          <p>Bắt Đầu</p>
          <p>Khi nào bạn muốn bắt đầu?</p>
          <p>Bạn sẽ đạt được gì?</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>Yêu Cầu</p>
          <p>Ai đã phát triển khóa học?</p>
          <p>Bạn sẽ học với ai?</p>
        </Timeline.Item>
        <Timeline.Item color="#00CCFF" dot={<SmileOutlined />}>
          <p>Chứng Chỉ</p>
        </Timeline.Item>
      </Timeline>
    </StyledCard>
  );
}

export default TimelineDetail;
