import 'styles/index.scss';

import React from 'react';
import Table from 'antd/es/table';

import { getMappedData } from 'utils';

import { IBEData } from 'types';

interface ISlopesTableProps {
  data?: IBEData[];
}

function SlopesTable(props: ISlopesTableProps) {
  const { data, columns } = getMappedData(props.data);

  return <Table scroll={{ x: '600px', y: 'calc(100vh - 200px)' }} dataSource={data} columns={columns} />;
}

export default SlopesTable;
