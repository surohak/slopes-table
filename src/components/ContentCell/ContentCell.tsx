import React from 'react';
import { BarChartOutlined, LineChartOutlined, PercentageOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import clsx from 'clsx';

import styles from './ContentCell.module.scss';

import { IDataSourceContent } from 'types';

interface IContentCellProps extends IDataSourceContent {
  title?: string;
  img?: string;
}

const ContentCell = ({ slope, streams, percentChange, title, img }: IContentCellProps) => {
  return (
    <div className={styles.contentCellContainer}>
      {title && <span className={styles.contentCellTitle}>{title}</span>}
      {img && <img src={img} alt="logo" />}
      <Tooltip title="SLOPE">
        <div
          className={clsx(styles.slope, {
            [styles.green]: slope.includes('+'),
            [styles.red]: slope.includes('-'),
          })}
        >
          <LineChartOutlined />
          <span>{slope}</span>
        </div>
      </Tooltip>
      <Tooltip title="PERCENT CHANGE">
        <div
          className={clsx(styles.percentChange, {
            [styles.green]: percentChange.includes('+'),
            [styles.red]: percentChange.includes('-'),
          })}
        >
          <PercentageOutlined />
          <span>{percentChange}</span>
        </div>
      </Tooltip>
      <Tooltip title="TOTAL STREAMS">
        <div className={styles.streams}>
          <BarChartOutlined />
          <span>{streams}</span>
        </div>
      </Tooltip>
    </div>
  );
};

export default ContentCell;
