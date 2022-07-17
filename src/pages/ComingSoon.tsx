import { Button, Col, Row, Typography, Image } from 'antd';
import { useNavigate } from 'react-router-dom';
import ComingSoonSVG from '#/assets/svg/coming-soon.svg';

export default function ComingSoon() {
  const navigate = useNavigate();
  return (
    <Row className="mt-5" gutter={24}>
      <Col lg={10} sm={24} className="py-32 pr-10">
        <Typography.Title
          level={1}
          className="text-[4rem] text-secondary-color"
        >
          Coming Soon
        </Typography.Title>
        <Typography.Text className="text-color-gray text-xl">
          Tính năng đang trong quá trình phát triển. Vui lòng quay lại sau.
        </Typography.Text>
        <Row gutter={16} className="mt-12">
          <Col lg={10} md={12} sm={8} xs={24} className="mt-5 sm:mt-0">
            <Button
              block
              type="primary"
              className="btn-primary py-2 text-base"
              onClick={() => navigate('/')}
            >
              Trở về trang chủ
            </Button>
          </Col>
        </Row>
      </Col>
      <Col lg={14} sm={0} xs={0}>
        <Image
          src={ComingSoonSVG}
          preview={false}
          alt="Coming Soon"
          width={789}
          height={650}
        />
      </Col>
    </Row>
  );
}
