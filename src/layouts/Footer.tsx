import styled from '@emotion/styled';
import { Col, Divider, Layout, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

import HappyChild from '#/assets/images/new-logo.jpg';

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
  border: 1px solid #81ceed;
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
    <StyledFooter className=" bg-surface-primary text-surface-primary">
      <Row gutter={[0, 40]} className="grid grid-cols-10">
        <Col className="col-span-3">
          <Link to="/">
            <img
              src={HappyChild}
              alt="Happy child"
              className="w-56 object-contain"
            />
          </Link>
        </Col>

        <Col className="col-span-5">
          <div className="flex flex-col space-y-3 text-surface-primary">
            <Title className="font-semibold text-primary-color text-3xl">Contact</Title>
            <Category className="text-color-dark-mode-80 text-lg">
              <p className="mb-0">
                Address : <span className='cursor-pointer hover:text-primary-color'>{`123 Nguyen Van Linh Street, Hai Chau District, Da Nang City`}</span>
              </p>
            </Category>
            <Category className="flex items-start text-color-dark-mode-80 text-lg">
              <p className="mb-0">
                Gmail : <span className='cursor-pointer hover:text-primary-color'>{`happychild@gmail.com`}</span>
              </p>
            </Category>
            <Category className="flex items-start text-color-dark-mode-80 text-lg">
              <p className="mb-0">
                Phone   : <span className='cursor-pointer hover:text-primary-color'>{`0909 0909 0909`}</span>
              </p>
            </Category>
          </div>
        </Col>
      </Row>
      <Divider className="border-white my-14" />
      <Row className="mb-16 grid grid-cols-3 items-center">
        <Space>
          <a target="_blank" href="https://twitter.com/" rel="noreferrer">
            <IconWrapper>
              <TwitterOutlined />
            </IconWrapper>
          </a>
          <a target="_blank" href="https://www.facebook.com/" rel="noreferrer">
            <IconWrapper>
              <FacebookOutlined />
            </IconWrapper>
          </a>
          <a rel="noreferrer" href="https://linkedin.com/" target="_blank">
            <IconWrapper>
              <LinkedinOutlined />
            </IconWrapper>
          </a>
        </Space>
        <div className="mt-4 flex justify-center">
          <Typography.Paragraph className="text-xl">
            Happy Child
          </Typography.Paragraph>
        </div>
        {/* <Smartos className="ml-auto" /> */}
      </Row>
    </StyledFooter>
  );
}

export default FooterComponent;
