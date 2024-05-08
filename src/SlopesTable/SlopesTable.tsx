import React from 'react';
import Table from 'antd/es/table';

import { IBEData } from './types';
import { getMappedData } from './utils';

interface ISlopesTableProps {
  data?: IBEData[];
}

const SlopesTable = (props: ISlopesTableProps) => {
  const { data, columns } = getMappedData(props.data);

  return <Table scroll={{ x: '600px', y: 'calc(100vh - 200px)' }} dataSource={data} columns={columns} />;
};

export default SlopesTable;
