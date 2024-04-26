import React from 'react';
import styled from '@emotion/styled';
import ReactEcharts from 'echarts-for-react';

import { IDataSource } from '../../types';
import { getChartOption } from './ChartCell.utils';

const StyledReactEcharts = styled(ReactEcharts)`
  height: 100px;
  width: 100%;
`;

const ChartCell = ({ data }: { data: IDataSource['chart'] }) => {
  return <StyledReactEcharts option={getChartOption(data)} />;
};

export default ChartCell;
