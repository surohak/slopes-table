import React from 'react';

import ChartCell from 'components/ChartCell';
import ContentCell from 'components/ContentCell';
import TrackCell from 'components/TrackCell';

import { mockHeaderData } from 'utils/mock';

import { IDataSource } from 'types';

export const columns = [
  {
    title: '#',
    dataIndex: 'key',
    key: 'key',
    width: 30,
  },
  {
    title: 'Track',
    dataIndex: 'track',
    key: 'track',
    width: '50%',
    render: (track: IDataSource['track']) => <TrackCell {...track} />,
  },
  {
    title: 'Chart',
    dataIndex: 'chart',
    key: 'chart',
    width: '25%',
    render: (chart: IDataSource['chart']) => <ChartCell data={chart} />,
  },
  {
    title: () => <ContentCell title="Total" {...mockHeaderData.total} />,
    dataIndex: 'total',
    key: 'total',
    render: (total: IDataSource['total']) => <ContentCell {...total} />,
    width: 100,
  },
  {
    title: () => <ContentCell img="Spotify" {...mockHeaderData.spotify} />,
    dataIndex: 'spotify',
    key: 'spotify',
    render: (spotify: IDataSource['spotify']) => <ContentCell {...spotify} />,
    width: 100,
  },
  {
    title: () => <ContentCell img="Apple Music" {...mockHeaderData.appleMusic} />,
    dataIndex: 'appleMusic',
    key: 'appleMusic',
    render: (appleMusic: IDataSource['appleMusic']) => <ContentCell {...appleMusic} />,
    width: 100,
  },
  {
    title: () => <ContentCell img="Pandora" {...mockHeaderData.pandora} />,
    dataIndex: 'pandora',
    key: 'pandora',
    render: (pandora: IDataSource['pandora']) => <ContentCell {...pandora} />,
    width: 100,
  },
];
