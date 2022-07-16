import { Button, Card, Col, Form, Row, Tabs, Typography } from 'antd';
import { useState } from 'react';
import { Store } from 'antd/lib/form/interface';
import QuestionsCard from './QuestionsCard';
import Introduction from './Introduction';
import { stages } from '#/shared/utils/localData';

export default function AssessmentStart() {
  const [currentTab, setCurrentTab] = useState<string | undefined>(undefined);

  const onSubmit = ({ results }: Store) => {
    console.log(results);
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Card className="w-[70rem] shadow-sm">
        <Form onFinish={onSubmit}>
          <Row>
            <Col span={24}>
              <Typography className="text-3xl font-bold text-primary-color">
                Bài đánh giá khảo sát sự phát triển theo độ tuổi ASQ-3
              </Typography>
            </Col>
            <Col span={24} className="relative">
              <div className="bg-slate-100">
                <Tabs
                  activeKey={currentTab}
                  defaultActiveKey="introduction"
                  onTabClick={tabKey =>
                    tabKey === 'introduction' && setCurrentTab('introduction')
                  }
                >
                  <Tabs.TabPane
                    tabKey="introduction"
                    key="introduction"
                    tab={<Typography>Hướng dẫn khảo sát</Typography>}
                  >
                    <Introduction />
                    <Button
                      onClick={() => setCurrentTab(stages?.[0]?.stageName)}
                    >
                      Bắt đầu
                    </Button>
                  </Tabs.TabPane>
                  {stages?.map((stage, index) => (
                    <Tabs.TabPane
                      key={stage?.stageName}
                      tabKey={stage?.stageName}
                      tab={stage?.stageName}
                    >
                      <Form.Item
                        key={index}
                        name={['results', index, 'result']}
                        noStyle
                      >
                        <QuestionsCard
                          index={index}
                          stageName={stage?.stageName}
                          questions={stage?.questions}
                          setCurrentTab={setCurrentTab}
                          totalStages={stages?.length}
                          nextStageName={stages?.[index + 1]?.stageName ?? ''}
                          prevStageName={stages?.[index - 1]?.stageName ?? ''}
                        />
                      </Form.Item>
                      <Form.Item
                        name={['results', index, 'name']}
                        initialValue={stage?.stageName}
                        hidden
                      />
                      <Form.Item
                        name={['results', index, 'stageId']}
                        initialValue={stage?.id}
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
