import { Breadcrumb, Col, Divider, Row } from 'antd';
import { Link } from 'react-router-dom';
import Content from './Content';
import CourseHeader from './CourseHeader';

function CoursesDetail() {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24} className="mb-2">
        <Row gutter={[24, 0]}>
          <CourseHeader />
          <Col span={24} className="mt-5">
            <Breadcrumb className="m-5 flex items-center text-base">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="">About </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="">Instructors</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Reviews</Breadcrumb.Item>
            </Breadcrumb>
            <Divider />
            <Content />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default CoursesDetail;
