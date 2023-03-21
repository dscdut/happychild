import { Button, Card, Col, Form, Row, Tabs, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { Store } from 'antd/lib/form/interface';
import { useNavigate } from 'react-router-dom';
import { RightCircleFilled } from '@ant-design/icons';
import { onValue, ref, set } from 'firebase/database';
import { realTimeDatabase, auth } from '../../../shared/utils/firebase';
import QuestionsCard from './QuestionsCard';
import Introduction from './Introduction';
import { scrollToTop } from '#/shared/utils/tools';
import { useParams } from 'react-router-dom';

import { Question } from '#/shared/utils/dataType';

export default function AssessmentStart() {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState<string | undefined>(undefined);
  const [stageName, setStageName] = useState<string>('');
  const [childName, setChildName] = useState<string>('');
  const [questions, setQuestions] = useState<Question[]>([]);

  const childRef = ref(realTimeDatabase, `children/${auth.currentUser?.uid}`);
  const { childId } = useParams();

  const onSubmit = async ({ results }: Store) => {
    localStorage.setItem('results', JSON.stringify(results));

    // get the current date in format yyyy-mm-dd
    const [date] = new Date().toISOString().split('T');

    // insert results to database
    try {
      await set(
        ref(
          realTimeDatabase,
          `children/${auth.currentUser?.uid}/${childId}/results/${date}`,
        ),
        results,
      );

      navigate(`/assessment/results/${childId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const calculateAgeInMonths = (birthday: string) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const ageInMonths = today.getFullYear() - birthDate.getFullYear();

    return ageInMonths * 12 + monthDiff;
  };

  useEffect(() => {
    // get child's age
    let ageInMonths = 0;
    onValue(childRef, snapshot => {
      const child = snapshot.val();

      setChildName(child[childId || ''].info.name);
      ageInMonths = calculateAgeInMonths(child[childId || ''].info.birthday);
    });

    let ASQ_INDEX;
    if (ageInMonths >= 0 && ageInMonths < 3) {
      ASQ_INDEX = '0';
    } else if (ageInMonths >= 3 && ageInMonths < 6) {
      ASQ_INDEX = '1';
    } else if (ageInMonths >= 6 && ageInMonths < 9) {
      ASQ_INDEX = '2';
    } else if (ageInMonths >= 9 && ageInMonths < 12) {
      ASQ_INDEX = '3';
    } else if (ageInMonths >= 12 && ageInMonths <= 23) {
      ASQ_INDEX = '4';
    } else if (ageInMonths >= 24 && ageInMonths <= 35) {
      ASQ_INDEX = '5';
    } else if (ageInMonths >= 36 && ageInMonths <= 47) {
      ASQ_INDEX = '6';
    } else if (ageInMonths >= 48 && ageInMonths <= 59) {
      ASQ_INDEX = '7';
    } else if (ageInMonths >= 60 && ageInMonths <= 71) {
      ASQ_INDEX = '8';
    }

    // get ASQ
    const asqRef = ref(realTimeDatabase, `asq/${ASQ_INDEX}`);
    onValue(asqRef, snapshot => {
      setStageName(snapshot.val().stageName);
      setQuestions(snapshot.val().questions);
    });
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Card className="w-[70rem] shadow-sm">
        <Form onFinish={onSubmit}>
          <Row>
            <Col span={24}>
              <Typography className="text-center text-3xl font-bold text-primary-color">
                Age-based developmental screening test ASQ-3
              </Typography>
              <Typography className="text-center text-2xl font-bold text-secondary-color">
                ({stageName})
              </Typography>
              <Typography className="text-center text-xl">
                Child's name: {childName}
              </Typography>
            </Col>
            <Col span={24} className="relative">
              <div className="bg-slate-100">
                <Tabs
                  activeKey={currentTab}
                  onTabClick={tabKey =>
                    tabKey === 'introduction' && setCurrentTab('introduction')
                  }
                >
                  <Tabs.TabPane
                    tabKey="introduction"
                    key="introduction"
                    tab={
                      <Typography>Guidelines before doing the test</Typography>
                    }
                  >
                    <Introduction />
                    <div className="mt-4 flex items-center justify-end">
                      <Button
                        type="primary"
                        onClick={() => {
                          scrollToTop();
                          setCurrentTab(questions?.[0]?.skill);
                        }}
                      >
                        Take the test
                        <RightCircleFilled />
                      </Button>
                    </div>
                  </Tabs.TabPane>
                  {questions?.map((question, index) => (
                    <Tabs.TabPane
                      key={question?.skill}
                      tabKey={question?.skill}
                      tab={question?.skill}
                    >
                      <Form.Item
                        key={index}
                        name={['results', index, 'result']}
                        noStyle
                      >
                        <QuestionsCard
                          index={index}
                          stageName={question?.skill}
                          questions={question?.content}
                          setCurrentTab={setCurrentTab}
                          totalStages={questions?.length}
                          nextStageName={questions?.[index + 1]?.skill ?? ''}
                          prevStageName={questions?.[index - 1]?.skill ?? ''}
                        />
                      </Form.Item>
                      <Form.Item
                        name={['results', index, 'name']}
                        initialValue={question?.skill}
                        hidden
                      />
                      <Form.Item
                        name={['results', index, 'stageId']}
                        initialValue={question?.id}
                        hidden
                      />
                    </Tabs.TabPane>
                  ))}
                </Tabs>
              </div>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
}
