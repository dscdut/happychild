import {
  Button,
  Col,
  Image,
  Radio,
  RadioChangeEvent,
  Row,
  Typography,
} from 'antd';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { scrollToTop } from '#/shared/utils/tools';
import { Answer, Content } from '#/shared/utils/dataType';

interface QuestionProps {
  onChange?: (value?: number) => void;
  value?: number;
  questions: Content[];
  stageName: string;
  index: number;
  setCurrentTab: Dispatch<SetStateAction<string | undefined>>;
  totalStages: number;
  nextStageName: string;
  prevStageName: string;
}

type CurrentValue = {
  selected: boolean;
  result: number;
};

export default function QuestionsCard({
  questions,
  index,
  onChange,
  stageName,
  setCurrentTab,
  totalStages,
  nextStageName,
  prevStageName,
}: QuestionProps) {
  const [currentResults, setCurrentResults] = useState<CurrentValue[]>(
    questions?.map(() => ({ result: 0, selected: false })),
  );

  const onSelectAnswer = (
    event: RadioChangeEvent,
    currentQuestion: Content,
    index: number,
  ) => {
    const selectedAnswer = currentQuestion.answers?.find(
      answer => answer.id === event.target.value,
    );
    if (selectedAnswer) {
      const result = selectedAnswer?.point;
      setCurrentResults(prev => {
        const clone = [...prev];
        clone[index] = {
          result,
          selected: true,
        };
        return clone;
      });
    }
  };

  useEffect(() => {
    onChange?.(
      currentResults?.reduce(
        (sum: number, current: CurrentValue) => sum + current?.result,
        0,
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentResults]);

  return (
    <Row className="p-4 text-base" gutter={[16, 16]}>
      <Col span={24}>
        <Typography className="text-xl text-primary-color">
          {`${index + 1}, ${stageName}`}
        </Typography>
      </Col>
      {/* {questions?.map((question, questionIndex) => (
        <Col span={24} key={String(questionIndex)}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <strong>{question?.title}</strong>
              <Typography>{question?.description}</Typography>
            </Col>
            {question?.image && (
              <Col span={24}>
                <Image src={question?.image} className="w-60" />
              </Col>
            )}
            <Col span={24}>
              <Radio.Group
                onChange={e => onSelectAnswer(e, question, questionIndex)}
              >
                <Row gutter={[16, 16]}>
                  {question?.answers?.map((answer: Answer, index: number) => (
                    <Col key={String(index)}>
                      <Radio value={answer?.id}>{answer?.content}</Radio>
                    </Col>
                  ))}
                </Row>
              </Radio.Group>
            </Col>
          </Row>
        </Col>
      ))} */}

      {questions?.map((question, questionIndex) => (
        <Col span={24} key={String(questionIndex)}>
          <Row gutter={[16, 16]}>
            {question?.image ? (
              <>
                <Col span={12}>
                  <strong>{question?.title}</strong>
                  <Typography>{question?.description}</Typography>
                  <Col span={6} className="mt-5">
                    <Radio.Group
                      onChange={e => onSelectAnswer(e, question, questionIndex)}
                    >
                      <Row gutter={[16, 16]} justify="center" align="middle">
                        {question?.answers?.map(
                          (answer: Answer, index: number) => (
                            <Col key={String(index)}>
                              <Radio value={answer?.id}>
                                {answer?.content}
                              </Radio>
                            </Col>
                          ),
                        )}
                      </Row>
                    </Radio.Group>
                  </Col>
                </Col>
                <Col span={12}>
                  <Image src={question?.image} className="w-60" />
                </Col>
                <Col span={24}>
                  <hr />
                </Col>
              </>
            ) : (
              <>
                <Col span={24}>
                  <strong>{question?.title}</strong>
                  <Typography>{question?.description}</Typography>
                </Col>
                <Col span={24}>
                  <Radio.Group
                    onChange={e => onSelectAnswer(e, question, questionIndex)}
                  >
                    <Row gutter={[16, 16]}>
                      {question?.answers?.map(
                        (answer: Answer, index: number) => (
                          <Col key={String(index)}>
                            <Radio value={answer?.id}>{answer?.content}</Radio>
                          </Col>
                        ),
                      )}
                    </Row>
                  </Radio.Group>
                </Col>
                <Col span={24}>
                  <hr />
                </Col>
              </>
            )}
          </Row>
        </Col>
      ))}

      <Col span={24} className="flex justify-end gap-4">
        {index > 0 && (
          <Button onClick={() => setCurrentTab(prevStageName)}>Back</Button>
        )}
        {index < totalStages - 1 && (
          <Button
            disabled={currentResults?.some(result => !result?.selected)}
            type="primary"
            onClick={() => {
              scrollToTop();
              setCurrentTab(nextStageName);
            }}
          >
            Next
          </Button>
        )}
        {index === totalStages - 1 && (
          <Button
            disabled={currentResults?.some(result => !result?.selected)}
            htmlType="submit"
            type="primary"
          >
            Submit and receive result
          </Button>
        )}
      </Col>
    </Row>
  );
}
