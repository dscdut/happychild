import { UserOutlined } from '@ant-design/icons';
import {
  Avatar,
  Button,
  Col,
  Divider,
  Input,
  Pagination,
  Rate,
  Row,
  Tree,
  Typography,
} from 'antd';
import { StyledCard } from './styles';

const { Paragraph, Title } = Typography;

const myData = [
  { title: 'Category', input: <Input /> },
  { title: 'Position', input: <Input /> },
  { title: 'Levels' },
  { title: 'Types' },
];

const treeData = [
  {
    title: 'Back-end',
    key: 'Back-end',
    children: [
      {
        title: 'Node-js',
        key: 'Node-js',
      },
      {
        title: 'Python',
        key: 'Python',
      },
      {
        title: 'Java',
        key: 'Java',
      },
    ],
  },
  {
    title: 'Back-end1',
    key: 'Back-end1',
    children: [
      {
        title: 'Node-js1',
        key: 'Node-js1',
      },
      {
        title: 'Python1',
        key: 'Python1',
      },
      {
        title: 'Java1',
        key: 'Java1',
      },
    ],
  },
  {
    title: 'Back-end2',
    key: 'Back-end2',
    children: [
      {
        title: 'Node-js2',
        key: 'Node-js2',
      },
      {
        title: 'Python2',
        key: 'Python2',
      },
      {
        title: 'Java2',
        key: 'Java2',
      },
    ],
  },
];

function Courses() {
  return (
    <Row gutter={[24, 24]}>
      <Col span={4}>
        <StyledCard className="rounded-md shadow-2xl">
          {myData.map((item, i) => (
            <>
              <Title level={5}>{item.title}</Title>
              {item.input}
              <Tree className="my-5" key={i} checkable treeData={treeData} />
              <Divider />
            </>
          ))}
        </StyledCard>
      </Col>
      <Col span={20}>
        <Row gutter={[24, 24]}>
          <Input placeholder="search program" />
          <Col span={24} className="mb-2">
            <Row gutter={[24, 24]}>
              {[...Array.from({ length: 15 }, (_, i) => i)].map(i => (
                <Col span={8} key={i}>
                  <StyledCard className="shadow-lg">
                    <div className="h-20 w-full bg-primary-color" />
                    <div className="flex items-center justify-between">
                      <Avatar
                        size={35}
                        className="my-3"
                        icon={<UserOutlined />}
                      />
                      <Rate allowHalf defaultValue={2.5} />
                    </div>
                    <Paragraph>{'1/4/2022'}</Paragraph>
                    <Paragraph
                      ellipsis={{
                        rows: 4,
                        expandable: false,
                        symbol: 'label.etc',
                      }}
                      className="mb-2"
                    >
                      Autism spectrum disorder (ASD) is a developmental
                      disability caused by differences in the brain. People with
                      ASD often have problems with social communication and
                      interaction, and restricted or repetitive behaviors or
                      interests.
                    </Paragraph>
                    <Button danger className="float-right">
                      Click Me
                    </Button>
                  </StyledCard>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Pagination
          className="my-2 text-center"
          total={85}
          showSizeChanger
          showQuickJumper
          showTotal={total => `Total ${total} items`}
        />
      </Col>
    </Row>
  );
}

export default Courses;
