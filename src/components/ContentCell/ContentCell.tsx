import React from 'react';
import { BarChartOutlined, LineChartOutlined, PercentageOutlined } from '@ant-design/icons';
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
      <div
        className={clsx(styles.slope, {
          [styles.green]: slope.includes('+'),
          [styles.red]: slope.includes('-'),
        })}
      >
        <LineChartOutlined />
        <span>{slope}</span>
      </div>
      <div
        className={clsx(styles.percentChange, {
          [styles.green]: percentChange.includes('+'),
          [styles.red]: percentChange.includes('-'),
        })}
      >
        <BarChartOutlined />
        <span>{percentChange}</span>
      </div>
      <div className={styles.streams}>
        <PercentageOutlined />
        <span>{streams}</span>
      </div>
    </div>
  );
};

export default ContentCell;
