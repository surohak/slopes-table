import React from 'react';
import styled from '@emotion/styled';

import { IDataSource } from '../../types';

const StyledTrackCellContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    height: 60px;
    width: 60px;
  }
`;

const StyledTrackTitle = styled.span<{ isTitle?: boolean }>`
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  width: fit-content;
  color: ${({ isTitle }: { isTitle?: boolean }) => (isTitle ? '#353940' : '#8F8F8F')};

  &:hover {
    text-decoration: underline;
  }
`;

const StyledExplicitContainer = styled.div`
  background-color: #e2e2e2;
  border-radius: 2px;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.015em;
  text-transform: uppercase;
  padding: 0 0.3em;
  width: fit-content;
`;

const StyledTrackContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrackCell = ({ artist, productTitle, date, title, explicit, img }: IDataSource['track']) => {
  return (
    <StyledTrackCellContainer>
      {img && <img src={img} alt="cover" />}
      <StyledTrackContent>
        <StyledTrackTitle isTitle>{title}</StyledTrackTitle>
        <StyledExplicitContainer>{explicit}</StyledExplicitContainer>
        <div>
          {artist && (
            <StyledTrackTitle>
              {artist} {productTitle || date ? '·' : ''}
            </StyledTrackTitle>
          )}
          {productTitle && (
            <StyledTrackTitle>
              {productTitle} {date ? '·' : ''}
            </StyledTrackTitle>
          )}
          {date && <StyledTrackTitle>{date}</StyledTrackTitle>}
        </div>
      </StyledTrackContent>
    </StyledTrackCellContainer>
  );
};

export default TrackCell;
