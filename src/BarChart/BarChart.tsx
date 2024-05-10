import styled from '@emotion/styled';
import ReactEcharts from 'echarts-for-react';

import { IBEData } from './types';
import { getChartOption } from './utils';

interface IBarChartProps {
  data?: IBEData[];
  height?: number;
}

const StyledReactEcharts = styled(ReactEcharts)<{ height?: number }>`
  height: ${({ height }) => height || 700}px !important;
  width: 100%;
`;

const BarChart = ({ data, height }: IBarChartProps) => {
  return <StyledReactEcharts height={height} option={getChartOption(data)} />;
};

export default BarChart;
