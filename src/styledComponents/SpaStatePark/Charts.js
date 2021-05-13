import * as React from "react";
import styled from "styled-components";

import api from "../../api/spaStateParkAPI";

const Container = styled.div`
  @media screen and (max-width: 1020px) {
    width: 95%;
    margin: 0 auto;
  }
`;

const ChartHeader = styled.p`
  color: #333;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: left;
  width: 50%;
  margin: auto;
`;

const Chart = styled.table`
  width: 500px;
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;

  @media screen and (max-width: 560px) {
    width: 75%;
    margin: 0 auto;
  }
`;

const TR = styled.tr`
  border-bottom: 1px solid black;
  font-size: 1.2rem;
  padding: 10px;

  @media screen and (max-width: 775px) {
    font-size: 1.2rem;
  }
`;

const TD = styled.td`
  border-left: 1px solid black;
  font-size: 1.2rem;
  padding: 10px;

  @media screen and (max-width: 775px) {
    font-size: 1.2rem;
  }
`;

const Charts = () => {
  return (
    <Container>
      <ChartHeader>{api.chartHeader1}</ChartHeader>
      <PoolChart />
      <ChartHeader>{api.chartHeader2}</ChartHeader>
      <RentalChart />
    </Container>
  );
};

const RentalChart = () => {
  return (
    <Chart cellSpacing="1" cellPadding="1" border="1">
      <tbody>
        <TR>
          <td>All Day</td>
          <TD>$10</TD>
        </TR>
        <TR>
          <td>4 Hours or Less</td>
          <TD>$5</TD>
        </TR>
      </tbody>
    </Chart>
  );
};

const PoolChart = () => {
  return (
    <Chart cellSpacing="1" cellPadding="1" border="1">
      <tbody>
        <TR>
          <td>{api.poolRow1[0]}</td>
          <TD>{api.poolRow1[1]}</TD>
        </TR>
        <TR>
          <td>{api.poolRow2[0]}</td>
          <TD>{api.poolRow2[1]}</TD>
        </TR>
        <TR>
          <td>{api.poolRow3[0]}</td>
          <TD>{api.poolRow3[1]}</TD>
        </TR>
        <TR>
          <td>{api.poolRow4[0]}</td>
          <TD>
            {api.poolRow4[1]}
            <br /> {api.poolRow4[2]}
          </TD>
        </TR>
      </tbody>
    </Chart>
  );
};

export default Charts;
