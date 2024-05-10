import React from 'react';
import Table from 'antd/es/table';

import { IBEData } from './types';
import { getMappedData } from './utils';

interface ISlopesTableProps {
  data?: IBEData[];
  height?: number;
}

const SlopesTable = (props: ISlopesTableProps) => {
  const { data, columns } = getMappedData(props.data);

  return <Table scroll={{ x: '600px', y: `${props.height}px` }} dataSource={data} columns={columns} />;
};

export default SlopesTable;
