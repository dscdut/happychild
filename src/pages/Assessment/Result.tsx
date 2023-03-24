/* eslint-disable max-lines */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  FrownOutlined,
  SmileOutlined,
  RightCircleFilled,
} from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Row, Typography, Image, Card, Button } from 'antd';
import Slider, { SliderMarks } from 'antd/lib/slider';
import dayjs from 'dayjs';
import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import Children from '#/assets/images/group-diverse-cheerful-kids_53876-138030.jpg';
import { calculateAgeInMonths, scrollToTop } from '#/shared/utils/tools';

import { realTimeDatabase, auth } from '#/shared/utils/firebase';

interface ResultProps {
  name: string;
  result: number;
  stageId: number;
}

interface ChildInformation {
  name: string;
  birthday: string;
  gender: boolean;
  addressOfParents: string;
  isGoingToKindergarten: boolean;
  weekOfPregnancy: number;
  kinderGartenName?: string;
  phoneNumberOfParents: string;
}

export default function Result() {
  const navigate = useNavigate();
  const [childInformation, setChildInformation] = useState<ChildInformation>();
  const [stageName, setStageName] = useState<string>('');
  const [asqIndex, setAsqIndex] = useState<number>(0);

  const { childId } = useParams();

  const results: ResultProps[] = JSON.parse(
    localStorage.getItem('results') as string,
  );
  const childRef = ref(realTimeDatabase, `children/${auth.currentUser?.uid}`);

  useEffect(() => {
    let ageInMonths = 0;
    onValue(childRef, async snapshot => {
      const child = snapshot.val();

      setChildInformation(child[childId || ''].info);
      ageInMonths = calculateAgeInMonths(child[childId || ''].info.birthday);
    });

    let ASQ_INDEX;
    if (ageInMonths >= 0 && ageInMonths < 3) {
      ASQ_INDEX = '0';
      setAsqIndex(0);
    } else if (ageInMonths >= 3 && ageInMonths < 6) {
      ASQ_INDEX = '1';
      setAsqIndex(1);
    } else if (ageInMonths >= 6 && ageInMonths < 9) {
      ASQ_INDEX = '2';
      setAsqIndex(2);
    } else if (ageInMonths >= 9 && ageInMonths < 12) {
      ASQ_INDEX = '3';
      setAsqIndex(3);
    } else if (ageInMonths >= 12 && ageInMonths <= 23) {
      ASQ_INDEX = '4';
      setAsqIndex(4);
    } else if (ageInMonths >= 24 && ageInMonths <= 35) {
      ASQ_INDEX = '5';
      setAsqIndex(5);
    } else if (ageInMonths >= 36 && ageInMonths <= 47) {
      ASQ_INDEX = '6';
      setAsqIndex(6);
    } else if (ageInMonths >= 48 && ageInMonths <= 59) {
      ASQ_INDEX = '7';
      setAsqIndex(7);
    } else if (ageInMonths >= 60 && ageInMonths <= 71) {
      ASQ_INDEX = '8';
      setAsqIndex(8);
    }

    // get ASQ
    const asqRef = ref(realTimeDatabase, `asq/${ASQ_INDEX}/stageName`);
    onValue(asqRef, snapshot => {
      setStageName(snapshot.val());
    });
  }, []);

  const date = Date().toString();
  const totalResult =
    results[0].result +
    results[1].result +
    results[2].result +
    results[3].result +
    results[4].result +
    results[5].result;

  return (
    <Col span={24} className="px-32 py-12">
      <div className="h-full w-full rounded-xl border-[1px] border-color-gray-50">
        <Col span={24}>
          <Image
            src={Children}
            className="w-full rounded-t-2xl object-cover"
            preview={false}
          />
        </Col>
        <div className="px-12">
          <Row className="flex items-center justify-center">
            <Col span={24} className="flex items-center justify-center">
              <Typography.Text className="m-4 text-2xl font-semibold text-primary-color">
                The result of the age-based developmental screening test - ASQ®
                3
              </Typography.Text>
            </Col>
            <Typography.Text className="text-gray mb-12 text-lg font-semibold text-color-gray-40">
              ({stageName} questionaire)
            </Typography.Text>
          </Row>
          <Typography.Text className="text-gray flex justify-start text-lg font-semibold text-primary-color">
            1. General information
          </Typography.Text>
          <div className="flex flex-row justify-between space-x-8 px-12 py-8">
            <Card style={{ width: 300 }} className="flex justify-center">
              <p>
                Name of baby: &nbsp;
                <span className="font-semibold">{childInformation?.name}</span>
              </p>
              <p>
                Baby's birthday: &nbsp;
                <span className="font-semibold">
                  {dayjs(childInformation?.birthday).format('DD MMM YYYY')}
                </span>
              </p>
              <p>
                Phone number of parents: &nbsp;
                <span className="font-semibold">
                  {childInformation?.phoneNumberOfParents}
                </span>
              </p>
              <p>
                Date of response: &nbsp;
                <span className="font-semibold">
                  {dayjs(date).format('DD MMM YYYY, hh:mm')}
                </span>
              </p>
            </Card>
            <Card style={{ width: 600 }} className="flex justify-center">
              <p className="flex flex-row items-center text-3xl text-error-color">
                <FrownOutlined />
                <Typography.Text className="text-gray ml-4 flex justify-start text-lg text-color-gray-30">
                  The area of point indicates that the child is suspiciously
                  experiencing a disorder
                </Typography.Text>
              </p>
              <p className="flex flex-row items-center text-3xl text-color-dark-mode-40"></p>
              <p className="flex items-center text-3xl text-primary-color">
                <SmileOutlined />
                <Typography.Text className="text-gray  ml-4 flex justify-start text-lg text-color-gray-30">
                  The area of points indicates that the child has normal
                  developmental progress
                </Typography.Text>
              </p>
            </Card>
          </div>
          <div>
            <Typography.Text className="text-gray mb-4 flex justify-start text-lg font-semibold text-primary-color ">
              2. Score of baby after completing the screening test
            </Typography.Text>
            <Row className="m-4 flex justify-start">
              <Col span={4}>
                <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                  <strong>Skills</strong>
                </Typography.Text>
              </Col>
              <Col span={7}>
                <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                  <strong>Number of "YES" answers</strong>
                </Typography.Text>
              </Col>
              <Col span={2}>
                <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                  0
                </Typography.Text>
              </Col>
              <Col span={2}>
                <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30"></Typography.Text>
              </Col>
              <Col span={2}>
                <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30"></Typography.Text>
              </Col>
              <Col span={2}>
                <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30"></Typography.Text>
              </Col>
              <Col span={2}>
                <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30"></Typography.Text>
              </Col>
              <Col span={1}>
                <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30"></Typography.Text>
              </Col>
              {asqIndex == 0
                ? results.map(result => {
                    if (result.stageId == 6) {
                      const marks: SliderMarks = {
                        0: {
                          style: {
                            color: '#81ceed',
                            fontSize: '1rem',
                          },
                          label: <SmileOutlined />,
                        },
                        1: {
                          style: {
                            color: '#f50',
                            fontSize: '1rem',
                          },
                          label: <FrownOutlined />,
                        },
                        2: {
                          style: {
                            color: '#f50',
                            fontSize: '1rem',
                          },
                          label: <FrownOutlined />,
                        },
                        3: {
                          style: {
                            color: '#f50',
                            fontSize: '1rem',
                          },
                          label: <FrownOutlined />,
                        },
                        4: {
                          style: {
                            color: '#f50',
                            fontSize: '1rem',
                          },
                          label: <FrownOutlined />,
                        },
                        5: {
                          style: {
                            color: '#f50',
                            fontSize: '1rem',
                          },
                          label: <FrownOutlined />,
                        },
                      };

                      return (
                        <>
                          <Col span={4}>
                            <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                              {result.name}
                            </Typography.Text>
                          </Col>
                          <Col span={7}>
                            <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                              {result.result}
                            </Typography.Text>
                          </Col>
                          <Col span={10}>
                            <Slider
                              step={1}
                              marks={marks}
                              defaultValue={result.result}
                              max={5}
                              disabled
                            />
                          </Col>
                        </>
                      );
                    }
                    const marks: SliderMarks = {
                      0: {
                        style: {
                          color: '#81ceed',
                          fontSize: '1rem',
                        },
                        label: <SmileOutlined />,
                      },
                      1: {
                        style: {
                          color: '#f50',
                          fontSize: '1rem',
                        },
                        label: <FrownOutlined />,
                      },
                      2: {
                        style: {
                          color: '#f50',
                          fontSize: '1rem',
                        },
                        label: <FrownOutlined />,
                      },
                      3: {
                        style: {
                          color: '#f50',
                          fontSize: '1rem',
                        },
                        label: <FrownOutlined />,
                      },
                    };

                    return (
                      <>
                        <Col span={4}>
                          <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                            {result.name}
                          </Typography.Text>
                        </Col>
                        <Col span={7}>
                          <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                            {result.result}
                          </Typography.Text>
                        </Col>
                        <Col span={10}>
                          <Slider
                            step={1}
                            marks={marks}
                            defaultValue={result.result}
                            max={3}
                            disabled
                          />
                        </Col>
                      </>
                    );
                  })
                : results.map(result => {
                    if (result.stageId == 6) {
                      const marks: SliderMarks = {
                        0: {
                          style: {
                            color: '#81ceed',
                            fontSize: '1rem',
                          },
                          label: <SmileOutlined />,
                        },
                        1: {
                          style: {
                            color: '#f50',
                            fontSize: '1rem',
                          },
                          label: <FrownOutlined />,
                        },
                        2: {
                          style: {
                            color: '#f50',
                            fontSize: '1rem',
                          },
                          label: <FrownOutlined />,
                        },
                        3: {
                          style: {
                            color: '#f50',
                            fontSize: '1rem',
                          },
                          label: <FrownOutlined />,
                        },
                        4: {
                          style: {
                            color: '#f50',
                            fontSize: '1rem',
                          },
                          label: <FrownOutlined />,
                        },
                        5: {
                          style: {
                            color: '#f50',
                            fontSize: '1rem',
                          },
                          label: <FrownOutlined />,
                        },
                      };

                      return (
                        <>
                          <Col span={4}>
                            <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                              {result.name}
                            </Typography.Text>
                          </Col>
                          <Col span={7}>
                            <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                              {result.result}
                            </Typography.Text>
                          </Col>
                          <Col span={10}>
                            <Slider
                              step={1}
                              marks={marks}
                              defaultValue={result.result}
                              max={5}
                              disabled
                            />
                          </Col>
                        </>
                      );
                    }
                    const marks: SliderMarks = {
                      0: {
                        style: {
                          color: '#f50',
                          fontSize: '1rem',
                        },
                        label: <FrownOutlined />,
                      },
                      1: {
                        style: {
                          color: '#f50',
                          fontSize: '1rem',
                        },
                        label: <FrownOutlined />,
                      },
                      2: {
                        style: {
                          color: '#81ceed',
                          fontSize: '1rem',
                        },
                        label: <SmileOutlined />,
                      },
                      3: {
                        style: {
                          color: '#81ceed',
                          fontSize: '1rem',
                        },
                        label: <SmileOutlined />,
                      },
                    };

                    return (
                      <>
                        <Col span={4}>
                          <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                            {result.name}
                          </Typography.Text>
                        </Col>
                        <Col span={7}>
                          <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                            {result.result}
                          </Typography.Text>
                        </Col>
                        <Col span={10}>
                          <Slider
                            step={1}
                            marks={marks}
                            defaultValue={result.result}
                            max={3}
                            disabled
                          />
                        </Col>
                      </>
                    );
                  })}
            </Row>
          </div>
          <div>
            <Typography.Text className="text-gray mb-4 flex justify-start text-lg font-semibold text-primary-color ">
              3. Results and Evaluations
            </Typography.Text>
            <div className="flex flex-row space-x-8">
              <Card style={{ width: 450 }}>
                <p className="text-gray text-lg">
                  <span className="font-semibold">
                    {(asqIndex != 0 && results[0].result < 2) ||
                    (asqIndex != 0 && results[1].result < 2) ||
                    (asqIndex != 0 && results[2].result < 2) ||
                    (asqIndex != 0 && results[3].result < 2) ||
                    (asqIndex != 0 && results[4].result < 2) ||
                    (asqIndex != 0 && results[5].result >= 1) ? (
                      <span className="text-error-color">
                        Your child may be experiencing developmental disorders
                      </span>
                    ) : asqIndex == 0 && totalResult >= 1 ? (
                      <span className="text-error-color">
                        Your child may be experiencing developmental disorders
                      </span>
                    ) : (
                      <span className="text-success-color">
                        Your child is exhibiting normal developmental
                        progression
                      </span>
                    )}
                  </span>
                </p>
                <p className="text-gray text-lg">
                  <span className="font-medium">
                    {(((asqIndex != 0 && results[0].result < 2) ||
                      (asqIndex != 0 && results[1].result < 2) ||
                      (asqIndex != 0 && results[2].result < 2) ||
                      (asqIndex != 0 && results[3].result < 2) ||
                      (asqIndex != 0 && results[4].result < 2)) &&
                      asqIndex != 0 &&
                      results[5].result >= 1) ||
                    (asqIndex == 0 && totalResult >= 1)
                      ? 'Your child exhibits signs of delayed development that are concerning for their age. It is advisable for the parents to seek the assistance of a specialist or physician to obtain a thorough diagnosis and to provide ongoing support for your child.'
                      : (asqIndex != 0 && results[0].result < 2) ||
                        (asqIndex != 0 && results[1].result < 2) ||
                        (asqIndex != 0 && results[2].result < 2) ||
                        (asqIndex != 0 && results[3].result < 2) ||
                        (asqIndex != 0 && results[4].result < 2) ||
                        (asqIndex != 0 && results[5].result >= 1)
                      ? 'Your child display signs of delayed development compared to his/her peers on average.'
                      : 'Your child is developing normally. You may conduct a bi-annual developmental assessment to monitor his/her progress'}
                  </span>
                </p>
              </Card>
              <Card style={{ width: 450 }}>
                <p className=" text-lg font-semibold text-primary-color ">
                  Overall review
                </p>
                <p className="text-gray text-lg">
                  {results[0].result <= 1 ||
                  results[1].result <= 1 ||
                  results[2].result <= 1 ||
                  results[3].result <= 1 ||
                  results[4].result <= 1 ? (
                    <>
                      <span className="font-medium leading-4">
                        Child name &nbsp;
                        <span className="font-semibold">
                          {childInformation?.name}
                        </span>{' '}
                        &nbsp; at some skills like &nbsp;
                        <strong>
                          Communication - Language, Gross motor, Fine motor,
                          Imitation and learn, Personal - Social
                        </strong>{' '}
                        &nbsp; has point located within a dangerous area. This
                        implies that some of the skills in these fields may not
                        has been accomplished by your child yet, or has been
                        accomplished but not regularly, which means that your
                        child is lagging behind other children of the same age
                        in this field.
                      </span>
                    </>
                  ) : results[2].result >= 2 &&
                    results[3].result >= 2 &&
                    results[0].result <= 1 &&
                    results[4].result <= 1 &&
                    results[1].result <= 1 ? (
                    <>
                      <Col span={24}>
                        <span className="font-medium">
                          Children name &nbsp;
                          <span className="font-semibold">
                            {childInformation?.name}
                          </span>{' '}
                          &nbsp; has normal development in the fields of motor
                          skills and problem-solving. This signifies that your
                          child is progressing in parallel with his/her peers of
                          the same age in these fields."
                        </span>
                      </Col>
                      <Col span={24}>
                        <span className="font-medium">
                          Skills like &nbsp;
                          <span className="font-semibold">
                            Communication - Language, Personal - Social
                          </span>{' '}
                          &nbsp; have points located within the alert zone. This
                          implies that some skills in these fields has not been
                          accomplished by your child, or has been accomplished
                          irregularly
                        </span>
                      </Col>
                      <Col span={24}>
                        <span className="font-medium">
                          Skills like &nbsp;
                          <span className="font-semibold">Gross motor</span> has
                          point lying within the alert zone. This denotes that
                          there are certain competencies in these fields that
                          your child are yet to acquire or have already achieved
                          but with irregularity, thus resulting in his/her
                          comparatively slower progress in these domains than
                          other children at the same age."
                        </span>
                      </Col>
                    </>
                  ) : results[2].result >= 2 &&
                    results[3].result >= 2 &&
                    results[0].result >= 2 &&
                    results[4].result >= 2 &&
                    results[1].result >= 2 &&
                    results[5].result >= 1 ? (
                    <>
                      <span className="font-medium">
                        Child name &nbsp;
                        <span className="font-semibold">
                          {childInformation?.name}
                        </span>{' '}
                        &nbsp; has normal development in most of the skills.
                        However your child displays some extra ordinary signs
                        that are not common in children of the same age.
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="font-medium">
                        Child name &nbsp;
                        <span className="font-semibold">
                          {childInformation?.name}
                        </span>{' '}
                        &nbsp; has normal development in most of the skills.
                        This signifies that your child is progressing in
                        parallel with his/her peers of the same age in these
                        fields."
                      </span>
                    </>
                  )}
                </p>
              </Card>
            </div>
            <Col
              span={24}
              className="my-2  text-lg font-semibold text-primary-color "
            >
              Method of handling
            </Col>
            <Col span={24}>
              <Typography.Text className="text-gray text-lg">
                {(((asqIndex != 0 && results[0].result < 2) ||
                  (asqIndex != 0 && results[1].result < 2) ||
                  (asqIndex != 0 && results[2].result < 2) ||
                  (asqIndex != 0 && results[3].result < 2) ||
                  (asqIndex != 0 && results[4].result < 2)) &&
                  asqIndex != 0 &&
                  results[5].result >= 1) ||
                (asqIndex == 0 && totalResult >= 1) ? (
                  <>
                    <p className="font-medium">
                      Your child displays signs of delayed development that pose
                      a serious risk compared to his/her peers. It is imperative
                      that you seek the guidance of a specialist or physician to
                      conduct a thorough and comprehensive diagnosis and provide
                      ongoing support for your child.
                    </p>
                    <p className="font-medium">
                      Parents should earnestly delve into and investigate the
                      development of their offspring. They ought to persist in
                      utilizing comprehensive assessments and seek counsel from
                      experts and physicians in order to obtain the most
                      accurate diagnosis.
                    </p>
                  </>
                ) : (asqIndex != 0 && results[0].result < 2) ||
                  (asqIndex != 0 && results[1].result < 2) ||
                  (asqIndex != 0 && results[2].result < 2) ||
                  (asqIndex != 0 && results[3].result < 2) ||
                  (asqIndex != 0 && results[4].result < 2) ||
                  (asqIndex != 0 && results[5].result >= 1) ? (
                  <>
                    <p className="font-medium">
                      Parents should continue to utilize in-depth assessments
                      and seek consultation from specialists or physicians to
                      obtain the most accurate diagnosis.
                    </p>
                  </>
                ) : (
                  <>
                    <span className="font-medium"></span>
                  </>
                )}
              </Typography.Text>
            </Col>
          </div>
          <div>
            <Col span={24}>
              {(asqIndex != 0 && results[0].result < 2) ||
              (asqIndex != 0 && results[1].result < 2) ||
              (asqIndex != 0 && results[2].result < 2) ||
              (asqIndex != 0 && results[3].result < 2) ||
              (asqIndex != 0 && results[4].result < 2) ||
              (asqIndex != 0 && results[5].result >= 1) ||
              (asqIndex == 0 && totalResult >= 1) ? (
                <Typography.Text className="text-gray text-lg">
                  If possible, families should take your child to healthcare
                  facilities for further evaluation of his/her developmental
                  progress. &nbsp;
                </Typography.Text>
              ) : (
                <></>
              )}
            </Col>

            <Col
              span={24}
              className="my-2  text-lg font-semibold text-primary-color "
            >
              <Typography.Text className="text-gray text-lg">
                <p className="font-medium">
                  Parents can refer to the intervention roadmap developed by
                  HappyChild's experts to support their child's better
                  development.
                  <br />
                  <Button
                    className="hover:bg-primary-hover-color text-white rounded bg-primary-color py-2 px-4 font-semibold"
                    onClick={() => {
                      scrollToTop();
                      navigate(`/intervention-guide/${childId}`);
                    }}
                  >
                    INTERVENTION ROADMAP <RightCircleFilled />
                  </Button>
                </p>
              </Typography.Text>
            </Col>

            <Col span={24} className=" mb-16">
              <Typography.Text className="text-gray text-lg">
                If there are any concerns or queries, the family may directly
                contact the experts through &nbsp;
                <span
                  onClick={() => {
                    navigate('/contact-specialists');
                  }}
                  className="cursor-pointer font-semibold text-primary-color"
                >
                  this link
                </span>{' '}
                &nbsp; .
              </Typography.Text>
            </Col>
          </div>
        </div>
      </div>
    </Col>
  );
}
