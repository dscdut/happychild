import { Checkbox, Col, Radio, RadioChangeEvent, Row, Typography } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { useState } from 'react';
import { Answer, Question } from '#/shared/utils/localData';

interface QuestionProps {
  onChange?: (value?: number) => void;
  value?: number;
  question: Question;
  index: number;
}

export default function QuestionCard({
  question,
  index,
  onChange,
}: QuestionProps) {
  const [currentValue, setCurrentValue] = useState<number>(0);

  const onSelectSingle = (selectedValue: RadioChangeEvent) => {
    const selectedAnswer = question?.answers?.find(
      answer => answer?.id === selectedValue.target.value,
    );
    if (selectedAnswer) {
      const result = selectedAnswer?.takesUp * question?.takesUp;
      setCurrentValue(result);
      onChange?.(result);
    }
  };
  const onSelectMulti = (selectedValues: CheckboxValueType[]) => {
    const selectedAnswers = question?.answers?.filter(
      answer => !!selectedValues?.find(val => val === answer?.id),
    );

    if (selectedAnswers?.[0]) {
      const result = selectedAnswers?.reduce(
        (sum: number, current: Answer) =>
          sum + current?.takesUp * question?.takesUp,
        0,
      );
      setCurrentValue(result);
      onChange?.(result);
    }
  };

  return (
    <Row className="text-base" gutter={[16, 16]}>
      <Col span={24}>
        <Typography>{currentValue}</Typography>
        <strong>{`Question ${index}:`}</strong>
        <Typography className="mt-4">{question?.content}</Typography>
      </Col>
      <Col span={24}>
        {question?.hasMultiAnswers ? (
          <Checkbox.Group onChange={onSelectMulti}>
            <Row gutter={[16, 16]}>
              {question?.answers?.map((answer, index) => (
                <Col key={String(index)}>
                  <Checkbox value={answer?.id}>{answer?.content}</Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        ) : (
          <Radio.Group onChange={onSelectSingle}>
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
  );
}
