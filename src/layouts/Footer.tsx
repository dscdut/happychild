import styled from '@emotion/styled';
import { Col, Divider, Layout, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

import HappyChild from '#/assets/images/happychild.jpg';

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  padding-top: 6rem;
  position: relative;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid white;
  padding: 0.375rem;
`;
const Title = styled.span`
  color: var(--layout-body-background);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;
const Category = styled.span`
  display: flex;
  color: var(--layout-body-background);
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 30px;
`;

function FooterComponent() {
  return (
    <StyledFooter className="bg-primary-color text-surface-primary">
      <Row gutter={[0, 40]} className="grid grid-cols-10">
        <Col className="col-span-3">
          <Link to="/">
            <img
              src={HappyChild}
              alt="Happy child"
              style={{
                width: 220,
                height: 60,
              }}
            />
          </Link>
        </Col>
        <Col className="col-span-2">
          <div className="flex flex-col space-y-2 text-surface-primary">
            <Title className="font-semibold">Công ty</Title>
            <Category>Về chúng tôi</Category>
            <Category>Bài viết</Category>
            <Category>Sự nghiệp</Category>
            <Category>Liên hệ</Category>
          </div>
        </Col>
        <Col className="col-span-2">
          <div className="flex flex-col space-y-2 text-surface-primary">
            <Title className="font-semibold">Liên kết</Title>
            <Category>Cuộc họp</Category>
            <Category>Văn phòng</Category>
            <Category>Từ xa</Category>
            <Category>Sự kiện</Category>
          </div>
        </Col>
        <Col className="col-span-3">
          <div className="flex flex-col space-y-3 text-surface-primary">
            <Title className="font-semibold">Liên hệ</Title>
            <Category className="flex items-start">
              <p className="mb-0">
                {`Toà nhà TPBank - 57 Lý Thường Kiệt - P.Trần Hưng Đạo - Q.Hoàn Kiếm - Tp.Hà Nội`}
              </p>
            </Category>
            <Category className="flex items-start">
              <p className="mb-0">{`tpbankdemo@gmail.com`}</p>
            </Category>
            <Category className="flex items-start">
              <p className="mb-0">{`0909 0909 0909 - 0808 080 0808`}</p>
            </Category>
          </div>
        </Col>
      </Row>
      <Divider className="border-white my-14" />
      <Row className="mb-16 grid grid-cols-3 items-center">
        <Space>
          <a target="_blank" href="https://twitter.com/" rel="noreferrer">
            <IconWrapper>
              <TwitterOutlined
                style={{
                  color: '#ffffff',
                }}
              />
            </IconWrapper>
          </a>
          <a target="_blank" href="https://www.facebook.com/" rel="noreferrer">
            <IconWrapper>
              <FacebookOutlined
                style={{
                  color: '#ffffff',
                }}
              />
            </IconWrapper>
          </a>
          <a rel="noreferrer" href="https://linkedin.com/" target="_blank">
            <IconWrapper>
              <LinkedinOutlined
                style={{
                  color: '#ffffff',
                }}
              />
            </IconWrapper>
          </a>
        </Space>
        <div className="mt-4 flex justify-center">
          <Typography.Paragraph className="text-surface-primary">
            Happy Child
          </Typography.Paragraph>
        </div>
        {/* <Smartos className="ml-auto" /> */}
      </Row>
    </StyledFooter>
  );
}

export default FooterComponent;
