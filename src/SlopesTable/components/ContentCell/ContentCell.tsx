import React from 'react';
import { BarChartOutlined, LineChartOutlined, PercentageOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Tooltip } from 'antd';

import { IDataSourceContent } from '../../types';

interface IContentCellProps extends IDataSourceContent {
  title?: string;
  img?: string;
}

const StyledContentCellContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

interface StyledInfoWithIconProps {
  isGreen?: boolean;
  isRed?: boolean;
  isStreams?: boolean;
  isSlope?: boolean;
}

const StyledInfoWithIcon = styled.div<StyledInfoWithIconProps>`
  display: flex;
  align-items: center;
  gap: 2px;
  font-weight: bold;
  color: ${({ isGreen, isRed, isStreams }: StyledInfoWithIconProps) =>
    isGreen ? '#18A689' : isRed ? '#cd6a6a' : isStreams ? '#5b5b5b' : '#000000'};
  svg {
    color: #000000;
    width: ${({ isSlope }: StyledInfoWithIconProps) => (isSlope ? '24px' : '16px')};
    height: ${({ isSlope }: StyledInfoWithIconProps) => (isSlope ? '24px' : '16px')};
  }
  span {
    font-size: ${({ isSlope }: StyledInfoWithIconProps) => (isSlope ? '12px' : '16px')};
    height: ${({ isSlope }: StyledInfoWithIconProps) => (isSlope ? '16px' : '24px')};
  }
`;

const ContentCell = ({ slope, streams, percentChange, title, img }: IContentCellProps) => {
  return (
    <StyledContentCellContainer>
      {title && <span>{title}</span>}
      {img && <img src={img} alt="logo" />}
      <Tooltip title="SLOPE">
        <StyledInfoWithIcon isSlope isGreen={slope.includes('+')} isRed={slope.includes('-')}>
          <LineChartOutlined />
          <span>{slope}</span>
        </StyledInfoWithIcon>
      </Tooltip>
      <Tooltip title="PERCENT CHANGE">
        <StyledInfoWithIcon isGreen={percentChange.includes('+')} isRed={percentChange.includes('-')}>
          <PercentageOutlined />
          <span>{percentChange}</span>
        </StyledInfoWithIcon>
      </Tooltip>
      <Tooltip title="TOTAL STREAMS">
        <StyledInfoWithIcon isStreams>
          <BarChartOutlined />
          <span>{streams}</span>
        </StyledInfoWithIcon>
      </Tooltip>
    </StyledContentCellContainer>
  );
};

export default ContentCell;
