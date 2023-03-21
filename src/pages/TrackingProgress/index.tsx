import { Button, Card, Table, Tag, Typography } from 'antd';
import Children from '#/assets/images/children-raise.png';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { realTimeDatabase, auth } from '#/shared/utils/firebase';
import { ref, onValue } from 'firebase/database';
import { calculateAgeInMonths } from '#/shared/utils/tools';
import RetakeTestModal from './RetakeTestModal';

const StyledTable = styled(Table)`
  .ant-table-thead > tr > th {
    text-align: center;
    background-color: #3498db;
    color: white;
    font-size: 16px;
  }
  .ant-table-tbody > tr > td {
    text-align: center;
    font-size: 16px;
  }
`;

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

interface Child {
  id: string;
  info: ChildInformation;
  results: any;
}

function TrackingProgress() {
  const [registeredChildren, setRegisteredChildren] = useState<any>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedChild, setSelectedChild] = useState<any>(null);

  const columns = [
    {
      title: 'Name of Child',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Current status',
      key: 'tag',
      dataIndex: 'tag',
      render: (status: number) => (
        <span>
          <Tag
            color={status === 1 ? 'red' : 'green'}
            style={{ fontSize: '15px' }}
          >
            {status === 1 ? 'Developmental delay' : 'Normal'}
          </Tag>
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (record: any) => (
        <span>
          <Button
            type="primary"
            className="mr-2"
            onClick={handleViewProgressClick}
          >
            View Progress
          </Button>
          <Button
            style={{
              backgroundColor: '#efa2a4',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '8px 16px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease-in-out',
            }}
            onClick={() => handleRetakeTestClick(record)}
          >
            Retake Test
          </Button>
        </span>
      ),
    },
  ];

  const handleRetakeTestClick = (record: any) => {
    setSelectedChild(record);
    setIsModalVisible(true);
  };

  const handleViewProgressClick = () => {};

  const calculateResult = (asqIndex: number, results: any) => {
    const totalResult =
      results[0].result +
      results[1].result +
      results[2].result +
      results[3].result +
      results[4].result +
      results[5].result;

    if (
      (asqIndex != 0 && results[0].result < 2) ||
      (asqIndex != 0 && results[1].result < 2) ||
      (asqIndex != 0 && results[2].result < 2) ||
      (asqIndex != 0 && results[3].result < 2) ||
      (asqIndex != 0 && results[4].result < 2) ||
      (asqIndex != 0 && results[5].result >= 1)
    ) {
      return 1;
    } else if (asqIndex == 0 && totalResult >= 1) {
      return 1;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    const chidRef = ref(realTimeDatabase, `children/${auth.currentUser?.uid}`);

    onValue(chidRef, async snapshot => {
      if (snapshot.exists()) {
        const childrenObj = await snapshot.val();

        const childrenArray = Object.keys(childrenObj).map(key => {
          return {
            ...childrenObj[key],
            id: key,
          };
        });

        setRegisteredChildren(childrenArray);
      }
    });
  }, []);

  let children = [];
  if (registeredChildren.length > 0) {
    children = registeredChildren.map((child: Child) => {
      let ageInMonths = calculateAgeInMonths(child.info.birthday);
      let asqIndex;
      if (ageInMonths >= 0 && ageInMonths < 3) {
        asqIndex = 0;
      } else {
        asqIndex = 1;
      }

      const latestResult = Object.entries(child.results).pop();

      return {
        key: child.id,
        name: child.info.name,
        birthday: child.info.birthday.split('-').reverse().join('-'),
        gender: child.info.gender ? 'male' : 'female',
        tag: calculateResult(asqIndex, latestResult?.[1]),
        result: child.results,
      };
    });
  }

  return (
    <div className="grid grid-cols-8">
      <Card
        className="col-span-6 col-start-2"
        hoverable
        cover={<img alt="example" src={Children} style={{ height: '250px' }} />}
      >
        <Typography className="text-center">
          <Typography.Title level={3}>
            Track progress of your child
          </Typography.Title>
        </Typography>
        <StyledTable
          columns={columns}
          dataSource={children}
          pagination={false}
        />
        <RetakeTestModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          selectedChild={selectedChild}
        />
      </Card>
    </div>
  );
}

export default TrackingProgress;
