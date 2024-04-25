import React from 'react';

import styles from './TrackCell.module.scss';

import { IDataSource } from 'types';

const TrackCell = ({ artist, productTitle, date, title, explicit, img }: IDataSource['track']) => {
  return (
    <div className={styles.trackCellContainer}>
      {img && <img src={img} alt="cover" />}
      <div className={styles.trackContent}>
        <span className={styles.trackTitle}>{title}</span>
        <div className={styles.explicitContainer}>{explicit}</div>
        <div>
          {artist && (
            <span className={styles.trackInfo}>
              {artist} {productTitle || date ? '·' : ''}
            </span>
          )}
          {productTitle && (
            <span className={styles.trackInfo}>
              {productTitle} {date ? '·' : ''}
            </span>
          )}
          {date && <span className={styles.trackInfo}>{date}</span>}
        </div>
      </div>
    </div>
  );
};

export default TrackCell;
