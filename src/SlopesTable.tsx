import 'styles/index.scss';

import React from 'react';
import Table from 'antd/es/table';

import ChartCell from 'components/ChartCell';
import ContentCell from 'components/ContentCell';

import TrackCell from './components/TrackCell';
import { IDataSource } from 'types';

const headerData = {
  total: {
    slope: '+1',
    percentChange: '57%',
    streams: '695.8M',
  },
  spotify: {
    slope: '+0',
    percentChange: '29%',
    streams: '454.66M',
  },
  appleMusic: {
    slope: '+1',
    percentChange: '18%',
    streams: '190.06M',
  },
  pandora: {
    slope: '+0',
    percentChange: '10%',
    streams: '51.08M',
  },
};

const dataSource: IDataSource[] = [
  {
    key: '1',
    track: {
      title: `Let's Go`,
      explicit: true,
      artists: ['Key Glock', 'Glockoma 2 (Deluxe)'],
      date: '2023-06-23',
    },
    chart: [150, 230, 224, 218, 135, 147, 260],
    total: {
      slope: '+21.39K',
      percentChange: '+53%',
      streams: '3.88M',
    },
    spotify: {
      slope: '+20.18K',
      percentChange: '+44%',
      streams: '2.69M',
    },
    appleMusic: {
      slope: '+1.01K',
      percentChange: '+6%',
      streams: '833.48K',
    },
    pandora: {
      slope: '+199',
      percentChange: '+3%',
      streams: '358.57',
    },
  },
  {
    key: '2',
    track: {
      title: 'Too Busy To Be Bae',
      explicit: false,
      artists: ['Kizz Daniel', 'Too Busy To Be Bae'],
      date: '2023-12-11',
    },
    chart: [150, 230, 224, 218, 135, 147, 260],
    total: {
      slope: '+2.69K',
      percentChange: '+17%',
      streams: '1.19M',
    },
    spotify: {
      slope: '-135',
      percentChange: '-1%',
      streams: '659.91K',
    },
    appleMusic: {
      slope: '+2.91K',
      percentChange: '+36%',
      streams: '504.76K',
    },
    pandora: {
      slope: '-78',
      percentChange: '-18%',
      streams: '20.46K',
    },
  },
];

const columns = [
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
    title: () => <ContentCell title="Total" {...headerData.total} />,
    dataIndex: 'total',
    key: 'total',
    render: (total: IDataSource['total']) => <ContentCell {...total} />,
    width: 100,
  },
  {
    title: () => <ContentCell img="Spotify" {...headerData.spotify} />,
    dataIndex: 'spotify',
    key: 'spotify',
    render: (spotify: IDataSource['spotify']) => <ContentCell {...spotify} />,
    width: 100,
  },
  {
    title: () => <ContentCell img="Apple Music" {...headerData.appleMusic} />,
    dataIndex: 'appleMusic',
    key: 'appleMusic',
    render: (appleMusic: IDataSource['appleMusic']) => <ContentCell {...appleMusic} />,
    width: 100,
  },
  {
    title: () => <ContentCell img="Pandora" {...headerData.pandora} />,
    dataIndex: 'pandora',
    key: 'pandora',
    render: (pandora: IDataSource['pandora']) => <ContentCell {...pandora} />,
    width: 100,
  },
];

const data = new Array(100).fill(dataSource[0]).map((_, index) => ({
  ...dataSource[index % 2 === 0 ? 0 : 1],
  key: (index + 1).toString(),
}));

function SlopesTable() {
  return <Table scroll={{ x: '600px', y: 'calc(100vh - 200px)' }} dataSource={data} columns={columns} />;
}

export default SlopesTable;
