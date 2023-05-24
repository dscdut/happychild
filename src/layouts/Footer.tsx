import styled from '@emotion/styled';
import { Col, Divider, Layout, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

import HappyChild from '#/assets/images/logo-transparent.png';

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  padding-top: 2rem;
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
    <div className="-mt-6 w-full">
      <StyledFooter
        className=" text-surface-primary"
        style={{
          backgroundColor: '#FFFFE8',
        }}
      >
        <Row className="grid sm:grid-cols-8 ">
          <Col className="col-span-3 mt-6 ml-8">
            <Link to="/">
              <img
                src={HappyChild}
                alt="Happy child"
                className="w-40 object-contain"
              />
            </Link>
          </Col>

          <Col className="col-span-5">
            <div className="flex flex-col space-y-3 text-surface-primary">
              <Title className="mt-8 text-3xl font-semibold text-primary-color">
                Contact
              </Title>
              <Category className="text-lg text-color-dark-mode-80">
                <p className="mb-0">
                  Address:{' '}
                  <span className="cursor-pointer hover:text-primary-color">
                    54 Nguyen Luong Bang Street, Lien Chieu District, Da Nang
                    City
                  </span>
                </p>
              </Category>
              <Category className="flex items-start text-lg text-color-dark-mode-80">
                <p className="mb-0">
                  Gmail:{' '}
                  <span className="cursor-pointer hover:text-primary-color">
                    happychild@gmail.com
                  </span>
                </p>
              </Category>
              <Category className="flex items-start text-lg text-color-dark-mode-80">
                <p className="mb-0">
                  Phone:{' '}
                  <span className="cursor-pointer hover:text-primary-color">
                    0909 0909 0909
                  </span>
                </p>
              </Category>
              <div className="flex justify-center sm:justify-start">
              <Typography.Paragraph className="text-sm opacity-75 mt-[4rem]">
                Copyright © Happy Child All rights reserved
              </Typography.Paragraph>
            </div>
            </div>
          </Col>
        </Row>
        {/* <Divider className="border-white my-14" /> */}
        <div className="bg-primary w-full">
          <Row className="sm:ml-9 grid grid-cols-3 items-center  text-2xl -mt-[4rem]">
            <Space>
              <a target="_blank" href="https://twitter.com/" rel="noreferrer">
                <IconWrapper>
                  <TwitterOutlined />
                </IconWrapper>
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/"
                rel="noreferrer"
              >
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
            
            {/* <Smartos className="ml-auto" /> */}
          </Row>
        </div>
      </StyledFooter>
    </div>
  );
}

export default FooterComponent;
