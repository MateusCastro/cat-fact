import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid #e4e4e4;

  th {
    padding: 8px;
    text-align: left;
    background-color: #303030;
    color: white;
  }

  td {
    padding: 8px;
  }

  tr {
    background-color: #fff;
  }

  tr:nth-child(even) {
    background-color: #ececec;
  }
`;

export const Loading = styled.h2`
  text-align: center;
`;
