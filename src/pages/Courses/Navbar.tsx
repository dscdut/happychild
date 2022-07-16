import { Divider, Tree, Typography } from 'antd';
import { StyledCard } from './styles';
import { myData, treeData } from '.';

const { Title } = Typography;

function Navbar() {
  return (
    <StyledCard className="rounded-md shadow-xl">
      {myData.map((item, i) => (
        <>
          <Title level={5}>{item.title}</Title>
          {item.input}
          <Tree className="my-5" key={i} checkable treeData={treeData} />
          <Divider />
        </>
      ))}
    </StyledCard>
  );
}

export default Navbar;
