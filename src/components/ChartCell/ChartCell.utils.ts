import { IDataSource } from 'types';

export const getChartOption = (data: IDataSource['chart']) => {
  return {
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
    tooltip: { trigger: 'axis' },
    xAxis: {
      show: false,
      type: 'category',
    },
    yAxis: {
      type: 'value',
      axisLabel: { show: false },
      axisLine: { show: false },
      splitLine: { show: true },
    },
    series: [
      {
        data,
        type: 'line',
        smooth: true,
        itemStyle: { color: '#000000' },
      },
    ],
  };
};
