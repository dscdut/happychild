import { Button, Card, List, Table, Tag, Typography } from 'antd';
import Children from '#/assets/images/children-raise.png';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { realTimeDatabase, auth } from '#/shared/utils/firebase';
import { ref, onValue } from 'firebase/database';
import { calculateAgeInMonths, scrollToTop } from '#/shared/utils/tools';
import RetakeTestModal from './RetakeTestModal';
import { useNavigate } from 'react-router-dom';

const StyledTable = styled(Table)`
  .ant-table-thead > tr > th {
    text-align: center;
    background-color: #2e86c1;
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

interface RowsChild{
  id : string
  key: string,
  name: string,
  birthday: string,
  gender: string,
  tag: Number,
  result: any,
}
function TrackingProgress() {
  const navigate = useNavigate();
  const [registeredChildren, setRegisteredChildren] = useState<any>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedChild, setSelectedChild] = useState<any>(null);
  let children : RowsChild[] = [];

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
            style={{
              backgroundColor: '#2e86c1',
            }}
            className="mr-2 text-[white]"
            onClick={() => handleViewProgressClick(record)}
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

  const handleViewProgressClick = (record: any) => {
    scrollToTop();
    navigate(`/intervention-guide/${record.key}`);
  };

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

  //console.log(children[0].key);
  return (
    <div className="lg:grid lg:grid-cols-8">
      <Card
        //className="sm:col-span-8 sm:col-start-2 scale-50/ w-full"
        className="col-span-6 col-start-2"
        hoverable
        cover={<img alt="example h-[250px]" className="w-full object-contain" src={Children} />}
      >
        <Typography className="text-center">
          <Typography.Title level={3}>
            Track progress of your child
          </Typography.Title>
        </Typography>
        {window.innerWidth > 720 ? 
        <StyledTable
          columns={columns}
          dataSource={children}
          pagination={false}
        /> : <div>
          <>
            {children?.map((e) => {
              return(
              <>
              <List
                className='mb-5'
                size="large"
                bordered
                dataSource={[e]}
                renderItem={() => (
                  <div>
                    <List.Item>
                      <List.Item.Meta title={'Name of Child'} />
                      <div>{e?.name}</div>
                    </List.Item>
                    <List.Item>
                      <List.Item.Meta title={'Birthday'} />
                      <div>{e?.birthday}</div>
                    </List.Item>
                    <List.Item>
                      <List.Item.Meta title={'Gender'} />
                      <div>{e?.gender}</div>
                    </List.Item>
                    <List.Item>
                      <List.Item.Meta title={'Current Status'} />
                      <div
                        className={`${
                          e?.tag === 1
                            ? 'rounded-md bg-secondary-color px-2 text-[#fff]'
                            : 'text-color-accent-green'
                        }`}
                      >
                        {e?.tag === 1 ? 'Developmental delay' : 'Normal'}
                      </div>
                    </List.Item>
                    <List.Item>
                      <List.Item.Meta title={'Action'} />
                      <div className="flex flex-col">
                        <button
                          className="mb-1 cursor-pointer rounded bg-[#2e86c1] p-[0.25rem] text-[white]"
                          onClick={() => handleViewProgressClick(e?.result)}
                        >
                          View Progress
                        </button>
                        <button
                          className="cursor-pointer rounded bg-[#efa2a4] p-[0.25rem] text-[#fff]"
                          style={{
                            transition: 'background-color 0.3s ease-in-out',
                          }}
                          onClick={() => handleRetakeTestClick(e?.result)}
                        >
                          Retake Test
                        </button>
                      </div>
                    </List.Item>

                  </div>
                )}
              />
              </>
              )  
            })}
          </>
          
        </div>}
        
        {/* <div className='bg-secondary-color w-8 h-8 text-warning-color'>
          {children?.name}
        </div> */}
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
