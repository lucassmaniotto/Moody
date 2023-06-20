import styled from 'styled-components';
import {
  primaryColor,
  whiteColor,
  greyColor,
} from '../UI/variables';

export const TableWrapper = styled.table`
  width: 90%;
  margin: 0 auto;
  border: 1px solid ${greyColor};
  border-collapse: collapse;
  font-size: 18px;
`;

export const TableHeader = styled.thead`
  background-color: ${primaryColor};
  color: ${whiteColor};
`;

export const TableHeaderCell = styled.th`
  padding: 12px;
  font-weight: bold;
  text-align: left;
`;

export const TableBody = styled.tbody`
  display: grid;
  max-height: 500px;
  overflow-y: auto;
`;

export const TableRow = styled.tr`
  display: grid;
  grid-template-columns: 1fr 5fr 2fr 1fr;
  align-items: center;
  &:nth-child(even) {
    background-color: ${greyColor};
  }
`;

export const TableDataCell = styled.td`
  padding: 12px;

  &.humor {
    text-align: center;
    font-size: 30px;
  }

  &.description {
    width: 98%;
    height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
