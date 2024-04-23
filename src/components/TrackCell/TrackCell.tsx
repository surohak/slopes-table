import React from 'react';

import styles from './TrackCell.module.scss';

import { IDataSource } from 'types';

const TrackCell = ({ artists, date, title, explicit, img }: IDataSource['track']) => {
  return (
    <div className={styles.trackCellContainer}>
      {img && <img src={img} alt="cover" />}
      <div className={styles.trackContent}>
        <span className={styles.trackTitle}>{title}</span>
        <div className={styles.explicitContainer}>{explicit ? 'Explicit' : 'Neither'}</div>
        <div>
          {artists.map((artist) => (
            <>
              <span className={styles.trackArtist} key={artist}>
                {' '}
                {artist}
              </span>
              <span> · </span>
            </>
          ))}
          <span className={styles.trackDate}> {date}</span>
        </div>
      </div>
    </div>
  );
};

export default TrackCell;
