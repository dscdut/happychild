import { scrollToTop } from '#/shared/utils/tools';
import { Col, Modal, Typography } from 'antd';
import { SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import BarChartDisplay from './BarChartDisplay';
import LineChartDisplay from './LineChartDisplay';

type ResultItem = {
  name: string;
  result: any;
};

function RetakeTestModal({
  isModalVisible,
  setIsModalVisible,
  selectedChild,
}: {
  isModalVisible: boolean;
  setIsModalVisible: (value: SetStateAction<boolean>) => void;
  selectedChild: any;
}) {
  const navigate = useNavigate();

  const handleModalOk = () => {
    setIsModalVisible(false);
    scrollToTop();
    navigate(`/assessment/start/${selectedChild.key}`);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  let chartData: any = [];
  const lineColors = ['purple', 'blue', 'red', 'orange', 'green', 'brown'];
  let lineKeys: any[] = [];
  let oneData: any[] = [];

  if (selectedChild) {
    chartData = Object.keys(selectedChild.result).map(date => {
      const dateObj: Record<string, any> = { date };

      selectedChild.result[date].forEach((item: ResultItem) => {
        dateObj[item?.name] = item.result;
      });
      return dateObj;
    });

    chartData.forEach((item: {}) => {
      Object.keys(item).forEach(key => {
        if (key !== 'date' && !lineKeys.includes(key)) {
          lineKeys.push(key);
        }
      });
    });

    if (chartData.length == 1) {
      oneData = Object.keys(chartData[0]).map(key => {
        if (key !== 'date') {
          return {
            name: key,
            value: chartData[0][key],
          };
        }
      });

      oneData.shift();
    }
  }

  return (
    <Modal
      title="History of test taking"
      visible={isModalVisible}
      onOk={handleModalOk}
      okText="Yes"
      onCancel={handleModalCancel}
      width={800}
    >
      {selectedChild && (
        <Col className="text-center">
          <Typography className="text-lg">
            <strong>Name:</strong> {selectedChild.name}
          </Typography>
          <Typography className="text-lg">
            <strong>Birthday:</strong> {selectedChild.birthday}
          </Typography>
          {selectedChild.tag == 1 ? (
            <Typography className="text-lg">
              <strong>Current status: </strong>
              <span className="font-bold text-error-color">
                Developmental delay
              </span>
            </Typography>
          ) : (
            <Typography className="text-lg">
              <strong>Current status: </strong>
              <span className="font-bold text-success-color">Normal</span>
            </Typography>
          )}
        </Col>
      )}

      {chartData.length > 1 ? (
        <LineChartDisplay
          lineData={chartData}
          lineKeys={lineKeys}
          lineColors={lineColors}
        />
      ) : (
        <BarChartDisplay data={oneData} dataKey="value" />
      )}

      <Typography className="text-center text-xl">
        Do you want to retake ASQ test for this child ?
      </Typography>
    </Modal>
  );
}

export default RetakeTestModal;
