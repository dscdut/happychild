import {
  Steps,
  Button,
  message,
  Card,
  Typography,
  Input,
  Alert,
  Col,
  Image,
  Row,
  Divider,
  Checkbox,
  Progress,
} from 'antd';
import { MinusCircleOutlined, SmileOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { realTimeDatabase, auth } from '#/shared/utils/firebase';
import { onValue, ref, set } from 'firebase/database';
import { scrollToTop } from '#/shared/utils/tools';

interface Skill {
  id: number;
  skillName: string;
  description: string;
  content: Content[];
}

interface Content {
  id: string;
  title: string;
  description: string;
  image?: string;
}

interface InterventionStage {
  id: string;
  stageName: string;
  skill: Skill[];
}

interface routeId {
  id: string;
  childId: string;
}

interface ChildInfo {
  name: string;
  birthday: string;
}

const InterventionGuide: React.FC<routeId> = ({ id, childId }) => {
  //name is the age prop
  const [intervention, setIntervention] = useState<InterventionStage[]>([]);
  const { Title, Paragraph } = Typography;
  const [routeId, setRouteId] = useState('');
  const [current, setCurrent] = useState(0);
  const [currentSkill, setCurrentSkill] = useState(0);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [childInfo, setChildInfo] = useState<ChildInfo>({
    name: '',
    birthday: '',
  });
  const [progressArr, setProgressArr] = useState<
    { activityId: string; feedback: string }[]
  >([]);

  const handleCheckboxChange = (
    e: { target: { checked: any } },
    contentId: string,
  ) => {
    const checked = e.target.checked;
    if (checked) {
      setCheckedItems(new Set(checkedItems.add(contentId)));
      const feedback = (
        document.getElementById(`${contentId}-feedback`) as HTMLTextAreaElement
      ).value;
      setProgressArr([
        ...progressArr,
        { activityId: contentId, feedback: feedback || '' },
      ]);
    } else {
      checkedItems.delete(contentId);
      setCheckedItems(new Set(checkedItems));
      setProgressArr(progressArr.filter(item => item.activityId !== contentId));
    }
  };

  const saveProgress = () => {
    const progressRef = ref(
      realTimeDatabase,
      `children/${auth.currentUser?.uid}/${childId}/progress/${routeId}`,
    );

    set(progressRef, progressArr);
    message.info('Your child progress has been saved');
  };

  // Get data from database
  useEffect(() => {
    const listOfIntervention = ref(realTimeDatabase, 'intervention');
    onValue(listOfIntervention, async snap => {
      const data = await snap.val();

      setIntervention(data);
    });

    if (id != '') {
      setRouteId(id);
      setCurrent(1);
    }

    if (childId != '') {
      const childRef = ref(
        realTimeDatabase,
        `children/${auth.currentUser?.uid}`,
      );

      onValue(childRef, async snapshot => {
        const child = await snapshot.val();

        setChildInfo({
          name: child[childId || ''].info.name,
          birthday: child[childId || ''].info.birthday,
        });
      });

      const progressRef = ref(
        realTimeDatabase,
        `children/${auth.currentUser?.uid}/${childId}/progress`,
      );

      onValue(progressRef, async snapshot => {
        const progress = await snapshot.val();

        if (progress) {
          setProgressArr(progress[routeId || '']);
          setCheckedItems(
            new Set(
              progress[routeId || '']?.map(
                (item: { activityId: string }) => item.activityId,
              ),
            ),
          );
        }
      });
    }
  }, [id, childId, routeId]);

  const totalActivities = intervention[parseInt(routeId) - 1]?.skill.reduce(
    (acc, curr) => {
      return acc + curr.content.length;
    },
    0,
  );

  //declare tag
  const { Step } = Steps;
  const { TextArea } = Input;

  //data
  const steps = [
    {
      title: 'First',
      content: 'Choose the age for your route',
    },
    {
      title: 'Second',
      content: 'Follow the intervention guide',
    },
    {
      title: 'Last',
      content: 'In conclusion',
    },
  ];

  return (
    <>
      <Steps current={current}>
        <Step
          className="cursor-pointer"
          title={steps[0].title}
          description={steps[0].content}
          onClick={() => {
            if (childId == '') setCurrent(0);
          }}
        />
        <Step
          className="cursor-pointer"
          title={steps[1].title}
          description={steps[1].content}
          onClick={() => setCurrent(1)}
        />
        <Step
          className="cursor-pointer"
          title={steps[2].title}
          description={steps[2].content}
        />
      </Steps>
      <div className="mt-4 text-xl text-color-dark-blue">
        {steps[current].content}
        {current == 1 && routeId == '' && (
          <Alert
            className="m my-2 w-1/4 "
            message="You should which age you want to read"
            type="info"
          />
        )}
      </div>
      <div
        style={{
          minHeight: '50vh',
          border: '1px dashed #000',
          borderRadius: '1rem',
          marginTop: '1rem',
        }}
        className="bg-primary"
      >
        {current == 0 && (
          <>
            <Card title="Age" className="mx-3">
              {intervention?.map(i => {
                return (
                  <Card.Grid
                    style={{ width: '25%', textAlign: 'center', margin: '0' }}
                    onClick={() => {
                      setRouteId(i.id);
                      setCurrent(current + 1);
                      setCurrentSkill(0);
                    }}
                  >
                    <div className="grid grid-cols-2 gap-8">
                      <img
                        className="ml-4 w-60"
                        src="https://images.unsplash.com/photo-1627639679638-8485316a4b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGtpZHxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt=""
                      />
                      <p className="self-center">{i.stageName}</p>
                    </div>
                  </Card.Grid>
                );
              })}
            </Card>
          </>
        )}

        {current == 1 && routeId != '' && (
          <div className="my-5 mx-8">
            <>
              {intervention?.map(stage => {
                if (stage.id == routeId) {
                  return (
                    <>
                      <Typography className="mb-2 text-center text-xl font-bold">
                        Intervention guide: {stage.stageName}
                      </Typography>
                      {childInfo.name != '' && childInfo.birthday != '' && (
                        <Typography className="mb-2 text-center text-xl">
                          Child: {childInfo.name} (
                          {childInfo.birthday.split('-').reverse().join('-')})
                        </Typography>
                      )}
                      {childId != '' && (
                        <Progress
                          percent={Math.ceil(
                            (checkedItems.size / totalActivities) * 100,
                          )}
                          strokeColor="#81CEED"
                          className="mt-1 mb-1"
                        />
                      )}
                      <Steps
                        className="mb-2"
                        current={currentSkill}
                        direction="horizontal"
                      >
                        {stage.skill?.map(s => {
                          return (
                            <>
                              <Step
                                className="mb-1 cursor-pointer"
                                title={s.skillName}
                                onClick={() => {
                                  setCurrentSkill(s.id - 1);
                                }}
                              />
                            </>
                          );
                        })}
                      </Steps>
                      {stage.skill?.map(
                        s =>
                          s.id == currentSkill + 1 && (
                            <Card type="inner">
                              <>
                                <Col span={24}>
                                  <Typography
                                    className="mb-1 font-bold"
                                    style={{ fontSize: '18px' }}
                                  >
                                    {s.description}
                                  </Typography>
                                  {s.content?.map(c => {
                                    return (
                                      <>
                                        <Typography.Text className="text-base font-bold text-color-accent-blue">
                                          {c.id} - {c.title}
                                        </Typography.Text>
                                        {childId != '' && (
                                          <Checkbox
                                            className="ml-2"
                                            onChange={e =>
                                              handleCheckboxChange(e, c.id)
                                            }
                                            checked={
                                              checkedItems.size > 0 &&
                                              checkedItems.has(c.id)
                                            }
                                          />
                                        )}
                                        <Row gutter={[16, 16]}>
                                          {c?.image ? (
                                            <>
                                              <Col span={12}>
                                                <div className="feedback-section mb-2">
                                                  <Typography.Paragraph className="text-justify text-base">
                                                    {c.description}
                                                  </Typography.Paragraph>
                                                  {childId != '' && (
                                                    <textarea
                                                      id={
                                                        c.id + '-feedback' || ''
                                                      }
                                                      className="focus:ring-blue-600 focus:border-transparent w-full rounded border-2 border-dotted p-2 focus:outline-none focus:ring-2"
                                                      placeholder="Leave your note here"
                                                    >
                                                      {(progressArr?.length >
                                                        0 &&
                                                        progressArr?.find(
                                                          p =>
                                                            p.activityId ==
                                                            c.id,
                                                        )?.feedback) ||
                                                        ''}
                                                    </textarea>
                                                  )}
                                                </div>
                                              </Col>
                                              <Col
                                                span={12}
                                                className="text-center"
                                              >
                                                <Image
                                                  src={c?.image}
                                                  className="w-80 justify-self-center"
                                                />
                                              </Col>
                                              <Divider
                                                dashed
                                                style={{
                                                  borderTop: '1px dashed #000',
                                                }}
                                              />
                                            </>
                                          ) : (
                                            <>
                                              <Col span={12}>
                                                <div className="feedback-section mb-2">
                                                  <Typography.Paragraph className="text-justify text-base">
                                                    {c.description}
                                                  </Typography.Paragraph>
                                                </div>
                                              </Col>
                                              {childId != '' && (
                                                <Col span={12}>
                                                  <textarea
                                                    id={
                                                      c.id + '-feedback' || ''
                                                    }
                                                    className="focus:ring-blue-600 focus:border-transparent w-full rounded border-2 border-dotted p-2 focus:outline-none focus:ring-2"
                                                    placeholder="Leave your note here"
                                                  >
                                                    {(progressArr?.length > 0 &&
                                                      progressArr?.find(
                                                        p =>
                                                          p.activityId == c.id,
                                                      )?.feedback) ||
                                                      ''}
                                                  </textarea>
                                                </Col>
                                              )}
                                              <Divider
                                                dashed
                                                style={{
                                                  borderTop: '1px dashed #000',
                                                }}
                                              />
                                            </>
                                          )}
                                        </Row>
                                      </>
                                    );
                                  })}
                                </Col>
                              </>
                              <Paragraph className="text-base text-error-color">
                                <MinusCircleOutlined /> However, intervention
                                guide depend on each individual case and need to
                                be determined by health and development experts
                                for the child. Therefore, it is best to consult
                                with the nearest doctor's advice!"
                              </Paragraph>
                            </Card>
                          ),
                      )}
                    </>
                  );
                }
              })}

              {/* Buttons parts */}
              <div
                className="my-8"
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                {currentSkill > 0 && (
                  <Button
                    style={{ margin: '0 8px' }}
                    onClick={() => {
                      scrollToTop();
                      setCurrentSkill(currentSkill - 1);
                    }}
                  >
                    Previous
                  </Button>
                )}
                <div>
                  {currentSkill < steps.length - 1 && (
                    <Button
                      type="primary"
                      onClick={() => {
                        scrollToTop();
                        setCurrentSkill(currentSkill + 1);
                      }}
                    >
                      Next
                    </Button>
                  )}
                  {childId != '' && currentSkill === steps.length - 1 && (
                    <Button
                      type="primary"
                      onClick={() => {
                        if (checkedItems.size == totalActivities) {
                          saveProgress();
                          scrollToTop();
                          message.success('Intervention guide completed!');
                          setCurrent(current + 1);
                        } else {
                          message.warn(
                            'You have not completed all activities, remember to save your progress before leaving!',
                          );
                        }
                      }}
                    >
                      Done
                    </Button>
                  )}
                </div>
                {childId != '' && (
                  <Button
                    style={{ margin: '0 8px' }}
                    onClick={() => {
                      saveProgress();
                    }}
                  >
                    Save
                  </Button>
                )}
              </div>
            </>
          </div>
        )}

        {current == 2 && (
          <div className="mx-5 my-5 grid grid-cols-2 gap-10">
            <div>
              <Title level={2} className="text-primary-color">
                Thank you <SmileOutlined />
              </Title>
              <Paragraph className="text-base">
                Thank you for using HappyChild intervention guide to help your
                child. We hope that you find this guide useful and easy to use.
              </Paragraph>
              <Paragraph className="text-base">
                <blockquote>
                  You can give us your feedback by filling the form.
                </blockquote>
                <pre>
                  <Paragraph className="text-base text-error-color">
                    <MinusCircleOutlined /> However, intervention guide depend
                    on each individual case and need to be determined by health
                    and development experts for the child. Therefore, it is best
                    to consult with the nearest doctor's advice!"
                  </Paragraph>
                </pre>
              </Paragraph>
            </div>
            <TextArea rows={10} placeholder="Give your feedback here ..." />

            <div>
              <Button
                type="primary"
                onClick={() => {
                  message.success('Received feedback!');
                }}
              >
                Complete guide
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default InterventionGuide;
