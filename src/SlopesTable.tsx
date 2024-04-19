import React from 'react';
import Table from 'antd/es/table';

const dataSource = [
  {
    key: '1',
    track: 'Lost in the Fire',
    chart: 'Top 200',
    total: '1,000',
    spotify: '500',
    appleMusic: '300',
    pandora: '200',
  },
];

const columns = [
  {
    title: 'Track',
    dataIndex: 'track',
    key: 'track',
  },
  {
    title: 'Chart',
    dataIndex: 'chart',
    key: 'chart',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  },
  {
    title: 'Spotify',
    dataIndex: 'spotify',
    key: 'spotify',
  },
  {
    title: 'Apple Music',
    dataIndex: 'appleMusic',
    key: 'appleMusic',
  },
  {
    title: 'Pandora',
    dataIndex: 'pandora',
    key: 'pandora',
  },
];

function SlopesTable() {
  return <Table dataSource={dataSource} columns={columns} />;
}

export default SlopesTable;
