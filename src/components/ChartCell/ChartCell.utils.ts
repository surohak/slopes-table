import { IDataSource } from 'types';

export const getChartOption = (data: IDataSource['chart']) => {
  const keys = Object.keys(data).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  const values = keys.map((key) => data[key]);

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
      data: keys,
    },
    yAxis: {
      type: 'value',
      axisLabel: { show: false },
      axisLine: { show: false },
      splitLine: { show: true },
    },
    series: [
      {
        data: values,
        type: 'line',
        smooth: true,
        itemStyle: { color: '#000000' },
      },
    ],
  };
};
