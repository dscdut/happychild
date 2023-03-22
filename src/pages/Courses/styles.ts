import styled from '@emotion/styled';
import { Card } from 'antd';

export const CourseStyledCard = styled(Card)`
  .ant-card-body {
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  ul > li {
    margin: 0;
  }
`;

export const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 1rem;
  }
`;

export const StyledGirl = styled.div`
  .wrap-grid {
    display: grid;
    gap: 50px 100px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 10px;
    row-gap: 15px;
    align-items: center;
    justify-items: center;
    justify-content: center;
  }
`;

export const StyledDiv = styled.div`
  .ant-card {
    padding: 0 !important;
    border-radius: 0;
    border-top-left-radius: 1.25rem !important;
    border-top-right-radius: 1.25rem !important ;
  }
`;
