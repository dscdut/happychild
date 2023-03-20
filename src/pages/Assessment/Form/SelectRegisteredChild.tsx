import { Modal, Select } from 'antd';
import { SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { Option } = Select;

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

export default function SelectedRegisterdChild({
  registeredChildren,
  isModalVisible,
  setIsModalVisible,
}: {
  registeredChildren: {
    id: string;
    info: ChildInformation;
  }[];
  isModalVisible: boolean;
  setIsModalVisible: (value: SetStateAction<boolean>) => void;
}) {
  const navigate = useNavigate();
  const [selectedChild, setSelectedChild] = useState(null);

  const handleModalOK = () => {
    navigate(`/assessment/start/${selectedChild}`);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleRegisteredChildSelect = (value: SetStateAction<null>) => {
    setSelectedChild(value);
  };

  return (
    <Modal
      title="Choose a child to retake the assessment"
      visible={isModalVisible}
      onOk={handleModalOK}
      onCancel={handleModalCancel}
      okButtonProps={{ disabled: !selectedChild }}
      okText="Retake the test"
    >
      <Select
        placeholder="Select a child"
        style={{ width: '100%' }}
        onChange={handleRegisteredChildSelect}
        value={selectedChild}
      >
        {registeredChildren.map(
          (child: {
            id: string;
            info: {
              name: string;
              birthday: string;
            };
          }) => (
            <Option key={child.id} value={child.id}>
              {child.info.name} (
              {child.info.birthday.split('-').reverse().join('-')})
            </Option>
          ),
        )}
      </Select>
    </Modal>
  );
}
