import 'styles/index.scss';

import React from 'react';
import Table from 'antd/es/table';

import { columns } from 'utils';
import { mockDataSource } from 'utils/mock';

function SlopesTable() {
  return <Table scroll={{ x: '600px', y: 'calc(100vh - 200px)' }} dataSource={mockDataSource} columns={columns} />;
}

export default SlopesTable;
