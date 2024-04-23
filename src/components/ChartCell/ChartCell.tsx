import React from 'react';
import ReactEcharts from 'echarts-for-react';

import { getChartOption } from 'components/ChartCell/ChartCell.utils';

import styles from './ChartCell.module.scss';

import { IDataSource } from 'types';

const ChartCell = ({ data }: { data: IDataSource['chart'] }) => {
  return <ReactEcharts option={getChartOption(data)} className={styles.reactEcharts} style={{ height: 100 }} />;
};

export default ChartCell;
