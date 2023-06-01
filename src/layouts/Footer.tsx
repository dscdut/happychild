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
    <div className="border-primary-color shadow-xl -mt-6 w-full border-t-4">
      <StyledFooter className=" bg-[#fff] text-surface-primary ">
        <Row className="grid sm:grid-cols-8 ">
          <Col className="col-span-2 mt-6 sm:ml-8">
            <div className="grid grid-cols-3 lg:grid-cols-2">
              <Link to="/" className="col-span-2">
                <img
                  src={HappyChild}
                  alt="Happy child"
                  className="w-20 object-contain lg:w-40"
                />
              </Link>
              <div className=" bg-primary hidden w-full lg:block">
                <Row className="mt-[4rem] grid grid-cols-3 items-center text-2xl ">
                  <Space>
                    <a
                      target="_blank"
                      href="https://twitter.com/"
                      rel="noreferrer"
                    >
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
                    <a
                      rel="noreferrer"
                      href="https://linkedin.com/"
                      target="_blank"
                    >
                      <IconWrapper>
                        <LinkedinOutlined />
                      </IconWrapper>
                    </a>
                  </Space>

                  {/* <Smartos className="ml-auto" /> */}
                </Row>
              </div>
            </div>
          </Col>

          <Col className="col-span-4">
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
              <div className="flex flex-col justify-center text-[#000] sm:justify-start">
                {window.innerWidth < 1280 && (
                  <>
                    <div className="bg-primary w-full">
                      <Row className="grid grid-cols-3 items-center text-2xl ">
                        <Space>
                          <a
                            target="_blank"
                            href="https://twitter.com/"
                            rel="noreferrer"
                          >
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
                          <a
                            rel="noreferrer"
                            href="https://linkedin.com/"
                            target="_blank"
                          >
                            <IconWrapper>
                              <LinkedinOutlined />
                            </IconWrapper>
                          </a>
                        </Space>

                        {/* <Smartos className="ml-auto" /> */}
                      </Row>
                    </div>
                  </>
                )}
                <p className="mt-[2rem] justify-self-center text-sm opacity-75">
                  Copyright © Happy Child All rights reserved
                </p>
              </div>
            </div>
          </Col>
        </Row>
        {/* <Divider className="border-white my-14" /> */}
      </StyledFooter>
    </div>
  );
}

export default FooterComponent;
