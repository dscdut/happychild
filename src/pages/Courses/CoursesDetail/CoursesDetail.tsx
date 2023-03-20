import { Breadcrumb, Col, Divider, Row } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import Content from './Content';

import CourseHeader from './CourseHeader';

function CoursesDetail() {
  const location = useLocation();
  const id = location.pathname;
  console.log(id);

  return (
    <Row gutter={[24, 24]}>
      <Col span={24} className="mb-2">
        <Row gutter={[24, 0]}>
          <CourseHeader />
          <Col span={24} className="mt-5">
            <Breadcrumb className="m-5 flex items-center text-lg">
              <Breadcrumb.Item>Homepage</Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/courses">Courses </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Detail </Breadcrumb.Item>
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
