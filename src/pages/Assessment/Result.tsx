/* eslint-disable max-lines */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/naming-convention */
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Typography, Image, Card } from 'antd';
import Slider, { SliderMarks } from 'antd/lib/slider';
import dayjs from 'dayjs';
import Children from '#/assets/images/group-diverse-cheerful-kids_53876-138030.jpg';

interface ResultProps {
  name: string;
  result: number;
  stageId: number;
}
interface ChildInformation {
  name: string;
  address: string;
  phoneNumber: string;
  isLearning: string;
  schoolName: string;
}
export default function Result() {
  const navigate = useNavigate();
  const results: ResultProps[] = JSON.parse(
    localStorage.getItem('results') as string,
  );
  const childInformation: ChildInformation = JSON.parse(
    localStorage.getItem('childInformation') as string,
  );
  const date = Date().toString();
  const totalResult = Math.floor(
    (results[0].result + results[1].result + results[2].result) / 3,
  );
  //   console.log(totalResult);
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
                Results of the screening test to assess development by age-
                ASQ®-3
              </Typography.Text>
            </Col>
            <Typography.Text className="text-gray mb-12 text-lg font-semibold text-color-gray-40">
              (Thirty-six month old questionnaire)
            </Typography.Text>
          </Row>
          <Typography.Text className="text-gray flex justify-start text-lg font-semibold text-primary-color">
            1. General information
          </Typography.Text>
          <div className="flex flex-row justify-between space-x-8 px-12 py-8">
            <Card style={{ width: 300 }} className="flex justify-center">
              <p>
                The child's full name:{' '}
                <span className="font-semibold">{childInformation.name}</span>
              </p>
              <p>
                Child's code:{' '}
                <span className="font-semibold">A0400033570001</span>
              </p>
              <p>
                Child's date of birth:{' '}
                <span className="font-semibold">5-7-2019</span>
              </p>
              <p>
                Answerer's phone number:{' '}
                <span className="font-semibold">
                  {childInformation.phoneNumber}
                </span>
              </p>
              <p>
                {' '}
                Reply date:{' '}
                <span className="font-semibold">
                  {dayjs(date).format('DD MMM YYYY, hh:mm')}
                </span>
              </p>
            </Card>
            <Card style={{ width: 600 }} className="flex justify-center">
              <p className="flex flex-row items-center text-3xl text-error-color">
                <FrownOutlined />
                <Typography.Text className="text-gray ml-4 flex justify-start text-lg text-color-gray-30">
                  The point area shows that the child is having difficulty.
                </Typography.Text>
              </p>
              <p className="flex flex-row items-center text-3xl text-color-dark-mode-40">
                <MehOutlined />
                <Typography.Text className="text-gray ml-4 flex justify-start text-lg text-color-gray-30">
                  The score area shows that the child needs further monitoring
                  and re-screening due to some immature skills.
                </Typography.Text>
              </p>
              <p className="flex items-center text-3xl text-primary-color">
                <SmileOutlined />
                <Typography.Text className="text-gray  ml-4 flex justify-start text-lg text-color-gray-30">
                  The score area shows that the child has normal development.
                </Typography.Text>
              </p>
            </Card>
          </div>
          <div>
            <Typography.Text className="text-gray mb-4 flex justify-start text-lg font-semibold text-primary-color ">
              2. The child's score after taking the screening test:
            </Typography.Text>
            <Row className="m-4 flex justify-start">
              <Col span={4}>
                <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                  Field
                </Typography.Text>
              </Col>
              <Col span={6}>
                <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                  Child's score
                </Typography.Text>
              </Col>
              <Col span={4}>
                <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                  0
                </Typography.Text>
              </Col>
              <Col span={4}>
                <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                  20
                </Typography.Text>
              </Col>
              <Col span={4}>
                <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                  40
                </Typography.Text>
              </Col>
              <Col span={1}>
                <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                  60
                </Typography.Text>
              </Col>
              {/*  */}
              {results.map(result => {
                const marks: SliderMarks = {
                  0: {
                    style: {
                      color: '#f50',
                      fontSize: '1rem',
                    },
                    label: <FrownOutlined />,
                  },
                  20: {
                    style: {
                      color: '#f50',
                      fontSize: '1rem',
                    },
                    label: <FrownOutlined />,
                  },
                  40: {
                    style: {
                      fontSize: '1rem',
                    },
                    label: <MehOutlined />,
                  },
                  60: {
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
                    <Col span={6}>
                      <Typography.Text className="text-gray flex justify-start text-lg text-color-gray-30">
                        {result.result}
                      </Typography.Text>
                    </Col>
                    <Col span={12}>
                      <Slider
                        step={1}
                        marks={marks}
                        defaultValue={result.result}
                        max={60}
                      />
                    </Col>
                  </>
                );
              })}
            </Row>
          </div>
          <div>
            <Typography.Text className="text-gray mb-4 flex justify-start text-lg font-semibold text-primary-color ">
              3. Results and reviews:
            </Typography.Text>
            <div className="flex flex-row space-x-8">
              <Card style={{ width: 450 }}>
                <p className="text-gray text-lg">
                  Total score{' '}
                  <span className="font-semibold">{totalResult}</span> {' - '}
                  <span className="font-semibold">
                    {totalResult < 20 ? (
                      <span className="text-error-color">Danger level</span>
                    ) : totalResult < 40 ? (
                      <span className="text-color-accent-yellow">
                        Warning level
                      </span>
                    ) : (
                      <span className="text-success-color">Safety level</span>
                    )}
                  </span>
                </p>
                <p className="text-gray text-lg">
                  <span className="font-medium">
                    {totalResult < 20
                      ? 'Children have signs of dangerous retardation for their age, parents need to see a specialist or doctor for an in-depth diagnosis and accompany their child.'
                      : totalResult < 40
                      ? 'Children show signs of developmental delay than the average age.'
                      : 'Children are developing normally.'}
                  </span>
                </p>
                <p className="text-gray text-lg">
                  <span>Basic communication:</span>
                  <span className="font-semibold">
                    {` ${results[0].result} - `}
                  </span>
                  <span className="font-semibold">
                    {results[0].result < 20 ? (
                      <span className="text-error-color">Danger level</span>
                    ) : results[0].result < 40 ? (
                      <span className="text-color-accent-yellow">
                        Warning level
                      </span>
                    ) : (
                      <span className="text-success-color">Safety level</span>
                    )}
                  </span>
                </p>
                <p className="text-gray text-lg">
                  <span>Gross Motor Skills:</span>
                  <span className="font-semibold">
                    {` ${results[1].result} - `}
                  </span>
                  <span className="font-semibold">
                    {results[1].result < 20 ? (
                      <span className="text-error-color">Danger level</span>
                    ) : results[1].result < 40 ? (
                      <span className="text-color-accent-yellow">
                        Warning level
                      </span>
                    ) : (
                      <span className="text-success-color">Safety level</span>
                    )}
                  </span>
                </p>
                <p className="text-gray text-lg">
                  <span>Fine Motor Skills:</span>
                  <span className="font-semibold">
                    {` ${results[2].result} - `}
                  </span>
                  <span className="font-semibold">
                    {results[2].result < 20 ? (
                      <span className="text-error-color">Danger level</span>
                    ) : results[2].result < 40 ? (
                      <span className="text-color-accent-yellow">
                        Warning level
                      </span>
                    ) : (
                      <span className="text-success-color">Safety level</span>
                    )}
                  </span>
                </p>
                <p className="text-gray text-lg">
                  <span>Problem Solving:</span>
                  <span className="font-semibold">
                    {` ${results[3].result} - `}
                  </span>
                  <span className="font-semibold">
                    {results[3].result < 20 ? (
                      <span className="text-error-color">Danger level</span>
                    ) : results[3].result < 40 ? (
                      <span className="text-color-accent-yellow">
                        Warning level
                      </span>
                    ) : (
                      <span className="text-success-color">Safety level</span>
                    )}
                  </span>
                </p>
                <p className="text-gray text-lg">
                  <span>Social Individual:</span>
                  <span className="font-semibold">
                    {` ${results[4].result} - `}
                  </span>
                  <span className="font-semibold">
                    {results[4].result < 20 ? (
                      <span className="text-error-color">Danger level</span>
                    ) : results[4].result < 40 ? (
                      <span className="text-color-accent-yellow">
                        Warning level
                      </span>
                    ) : (
                      <span className="text-success-color">Safety level</span>
                    )}
                  </span>
                </p>
              </Card>
              <Card style={{ width: 450 }}>
                <p className=" text-lg font-semibold text-primary-color ">
                  General comment
                </p>
                <p className="text-gray text-lg">
                  {totalResult < 20 ? (
                    <>
                      <span className="font-medium leading-4">
                        Areas such as Communication, Gross Motor, Fine Motor,
                        Problem Solving, Social Individual have scores in the
                        danger zone. It means that there are some skills in
                        these areas that children have not yet performed, or
                        have done but not often, that is, children are behind
                        other children of the same age in this area.
                      </span>
                    </>
                  ) : totalResult < 40 ? (
                    <>
                      <Col span={24}>
                        <span className="font-medium">
                          Child{' '}
                          <span className="font-semibold">
                            {childInformation.name}
                          </span>{' '}
                          normal development in the areas of fine motor and
                          problem solving. This means that children develop at
                          the same rate as other children of the same age in
                          these areas.
                        </span>
                      </Col>
                      <Col span={24}>
                        <span className="font-medium">
                          Areas like{' '}
                          <span className="font-semibold">
                            Communication:, Social Individual
                          </span>{' '}
                          point is in the alarm zone. That means that there are
                          some skills in these areas that children have not yet
                          performed, or have done, but not often.
                        </span>
                      </Col>
                      <Col span={24}>
                        <span className="font-medium">
                          Areas like{' '}
                          <span className="font-semibold">
                            Gross Motor Skills
                          </span>{' '}
                          point is in the danger zone. That means that there are
                          some skills in these areas that children have not yet
                          performed, or have done but not often, that is,
                          children are behind other children of the same age in
                          this area.
                        </span>
                      </Col>
                    </>
                  ) : (
                    <>
                      <span className="font-medium">
                        Parents need to communicate and interact with their
                        children more. Parents should avoid letting their
                        children use electronic devices, up to 1 hour/day.
                        Parents need to check this test every 6 months
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
              Treatment
            </Col>
            <Col span={24}>
              <Typography.Text className="text-gray text-lg">
                {totalResult < 20 ? (
                  <>
                    <p className="font-medium">
                      Children have signs of dangerous retardation for their
                      age, parents need to see a specialist or doctor for an
                      in-depth diagnosis and accompany their child.
                    </p>
                    <p className="font-medium">
                      Parents need to seriously study and learn about child
                      development. Parents continue to use the in-depth test and
                      should contact a specialist or doctor for the best
                      diagnosis.
                    </p>
                    <p className="font-medium">
                      Parents need to interact and practice basic behaviors for
                      children to imitate.
                    </p>
                    <p className="font-medium">
                      Parents need to let their children exercise to release
                      energy and increase concentration through sports: cycling,
                      jogging,... Parents can let their children play games,
                      guide them to use them. Using safety furniture to increase
                      problem-solving ability Children have only poor social
                      interaction, parents need to interact more with their
                      children.
                    </p>
                    <p className="font-medium">
                      Parents should avoid letting children use electronic
                      devices, up to 1 hour/day.
                    </p>
                  </>
                ) : totalResult < 40 ? (
                  <>
                    <p className="font-medium">
                      Parents continue to use the in-depth test and should
                      contact a specialist or doctor for the best diagnosis.
                    </p>
                    <p className="font-medium">
                      Parents need to interact and practice basic behaviors for
                      their children to imitate.
                    </p>
                    <p className="font-medium">
                      Parents need to give their children exercise to release
                      energy and increase concentration through sports: cycling,
                      jogging,...{' '}
                    </p>
                    <p className="font-medium">
                      Parents can let their children play games, guide their
                      children to use safe furniture to increase their ability
                      to handle problems. The child has only poor social
                      interaction, parents need to communicate and interact with
                      their grandchildren more.
                    </p>
                    <p className="font-medium">
                      Parents should avoid letting children use electronic
                      devices, up to 1 hour/day.
                    </p>
                  </>
                ) : (
                  <>
                    <span className="font-medium">
                      Parents need to communicate and interact with their
                      children more. Parents should avoid letting their children
                      use electronic devices, up to 1 hour/day. Parents need to
                      check this test every 6 months.
                    </span>
                  </>
                )}
              </Typography.Text>
            </Col>
            <Col span={24} className="my-2">
              <Typography.Text className="text-gray text-lg">
                {totalResult < 20 ? (
                  <>
                    <span className="font-semibold">
                      Note: supporting documents for accompanying parents are
                      not textbooks for children at a Danger level
                    </span>
                  </>
                ) : totalResult < 40 ? (
                  <>
                    <span className="font-semibold">
                      The roadmap to guide parents to accompany their retarded
                      children
                    </span>
                  </>
                ) : null}
              </Typography.Text>
            </Col>
            <Col span={24} className="py-6">
              <Typography.Text className="text-gray text-lg">
                {totalResult < 20 ? (
                  <>
                    <iframe
                      className="my-2 rounded-lg"
                      width={800}
                      height={450}
                      src={`https://www.youtube.com/embed/Kp8B0z5oBm4`}
                    />
                  </>
                ) : totalResult < 40 ? (
                  <>
                    <iframe
                      className="my-2 rounded-lg"
                      width={800}
                      height={450}
                      src={`https://www.youtube.com/embed/Kp8B0z5oBm4`}
                    />
                  </>
                ) : (
                  <>
                    <span className="font-semibold">
                      Parents need to check this test every 6 months.
                    </span>
                  </>
                )}
              </Typography.Text>
            </Col>
          </div>
          <div>
            <Col span={24}>
              <Typography.Text className="text-gray text-lg">
                Families should take the child to a health facility for further
                assessment of the child's development and{' '}
                <span className="font-semibold">
                  Pediatric examination (psychology, psychology, language...),
                  Checking children's movement, Checking children's hearing,
                  Pediatric specialty examination (psychology, psychology,
                  rehabilitation department) function..., Specialist examination
                  for further examination.
                </span>
              </Typography.Text>
            </Col>
            <Col span={24} className=" mb-16">
              <Typography.Text className="text-gray text-lg">
                Families can refer to a number of useful courses for their
                child's development{' '}
                <span
                  onClick={() => {
                    navigate('/courses');
                  }}
                  className="cursor-pointer font-semibold text-primary-color"
                >
                  this link
                </span>{' '}
                .
              </Typography.Text>
            </Col>
          </div>
        </div>
      </div>
    </Col>
  );
}
