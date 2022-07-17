import { Col, Row } from 'antd';
import AboutAuthor from './AboutAuthor';
import Review from './Review';
import TimelineDetail from './TimelineDetail';

function Content() {
  return (
    <Row gutter={[24, 24]}>
      <Col span={18} className="text-lg">
        <AboutAuthor />
      </Col>
      <Col span={6}>
        <TimelineDetail />
      </Col>
      <Col span={24}>
        <Review />
      </Col>
    </Row>
  );
}

export default Content;
