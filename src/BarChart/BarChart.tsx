import styled from '@emotion/styled';
import ReactEcharts from 'echarts-for-react';

import { IBEData } from './types';
import { getChartOption } from './utils';

interface IBarChartProps {
  data?: IBEData[];
}

const StyledReactEcharts = styled(ReactEcharts)`
  height: 700px !important;
  width: 100%;
`;

const BarChart = ({ data }: IBarChartProps) => {
  return <StyledReactEcharts option={getChartOption(data)} />;
};

export default BarChart;
