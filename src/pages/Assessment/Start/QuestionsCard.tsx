import {
  Button,
  Checkbox,
  Col,
  Image,
  Radio,
  RadioChangeEvent,
  Row,
  Typography,
} from 'antd';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Question } from '#/shared/utils/localData';
import { scrollToTop } from '#/shared/utils/tools';

interface QuestionProps {
  onChange?: (value?: number) => void;
  value?: number;
  questions: Question[];
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
    currentQuestion: Question,
    index: number,
  ) => {
    const selectedAnswer = currentQuestion.answers?.find(
      answer => answer.id === event.target.value,
    );
    if (selectedAnswer) {
      const result = selectedAnswer?.takesUp * currentQuestion?.takesUp;
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
      {questions?.map((question, questionIndex) => (
        <Col span={24} key={String(questionIndex)}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <strong>{`Câu hỏi ${questionIndex + 1}:`}</strong>
              <Typography>{question?.content}</Typography>
            </Col>
            {question?.images && (
              <Col span={24}>
                <Image src={question?.images} />
              </Col>
            )}
            <Col span={24}>
              {question?.hasMultiAnswers ? (
                <Checkbox.Group>
                  <Row gutter={[16, 16]}>
                    {question?.answers?.map((answer, index) => (
                      <Col key={String(index)}>
                        <Checkbox value={answer?.id}>
                          {answer?.content}
                        </Checkbox>
                      </Col>
                    ))}
                  </Row>
                </Checkbox.Group>
              ) : (
                <Radio.Group
                  onChange={e => onSelectAnswer(e, question, questionIndex)}
                >
                  <Row gutter={[16, 16]}>
                    {question?.answers?.map((answer, index) => (
                      <Col key={String(index)}>
                        <Radio value={answer?.id}>{answer?.content}</Radio>
                      </Col>
                    ))}
                  </Row>
                </Radio.Group>
              )}
            </Col>
          </Row>
        </Col>
      ))}
      <Col span={24} className="flex justify-end gap-4">
        {index > 0 && (
          <Button onClick={() => setCurrentTab(prevStageName)}>Trở về</Button>
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
            Tiếp theo
          </Button>
        )}
        {index === totalStages - 1 && (
          <Button
            disabled={currentResults?.some(result => !result?.selected)}
            htmlType="submit"
            type="primary"
          >
            Kết thúc và nhận kết quả
          </Button>
        )}
      </Col>
    </Row>
  );
}
