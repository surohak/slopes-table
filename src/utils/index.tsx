import React from 'react';
import { ColumnsType } from 'antd/es/table';

import ChartCell from '../components/ChartCell';
import ContentCell from '../components/ContentCell';
import TrackCell from '../components/TrackCell';
import {
  ArrayOfKeyStringValueStringType,
  IBEDailyStream,
  IBEData,
  IDataSource,
  IDataSourceContent,
  KeyStringValueDataSourceContent,
  KeyStringValueNumberType,
} from '../types';
import { defaultHeaderData } from './mock';

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
    title: () => <ContentCell title="Total" {...defaultHeaderData.total} />,
    dataIndex: 'total',
    key: 'total',
    render: (total: IDataSource['total']) => <ContentCell {...total} />,
    width: 100,
  },
];

const getDataByDate = (data: IBEDailyStream[]): KeyStringValueNumberType => {
  return data.reduce((total: KeyStringValueNumberType, item: IBEDailyStream) => {
    const date = item.d;
    const streams = item.s;

    total[date] = (total[date] || 0) + (streams || 0);

    return total;
  }, {});
};

const getAllDataByDate = (data: ArrayOfKeyStringValueStringType): KeyStringValueNumberType => {
  const convertedData = Object.values(data).flat() as unknown as IBEDailyStream[];
  return getDataByDate(convertedData);
};

const getValueWithSign = (value: number, endSymbol = ''): string =>
  value > 0 ? `+${value.toFixed(2)}${endSymbol}` : `${value.toFixed(2)}${endSymbol}`;

const getContentCellData = (data: KeyStringValueNumberType): IDataSource['total'] => {
  const dates = Object.keys(data).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  const streams = dates.map((date) => data[date]);

  const numberOfDates = dates.length;

  if (numberOfDates === 0) {
    return { slope: '0', percentChange: '0', streams: '0' };
  }

  const firstStreams = streams[0];
  const lastStreams = streams[streams.length - 1];

  const slope = (lastStreams - firstStreams) / numberOfDates;
  const percentChange = ((lastStreams - firstStreams) / firstStreams) * 100;
  const streamsTotal = streams.reduce((total, stream) => total + stream, 0).toString();

  return {
    slope: getValueWithSign(slope),
    percentChange: getValueWithSign(percentChange),
    streams: streamsTotal,
  };
};

const getDailyStreamsWithContentCellData = (data: ArrayOfKeyStringValueStringType): KeyStringValueDataSourceContent => {
  const keys = Object.keys(data);
  const values = Object.values(data);

  return keys.reduce((total: KeyStringValueDataSourceContent, key, index) => {
    const convertedData = values[index] as unknown as IBEDailyStream[];
    return { ...total, [key.toLowerCase().split(' ').join('_')]: getContentCellData(getDataByDate(convertedData)) };
  }, {});
};

export const getMappedData = (data: IBEData[] = []): { columns: ColumnsType<IDataSource>; data: IDataSource[] } => {
  const newColumns = [...columns];

  const { newData } = data.reduce(
    (total, d, index) => {
      const dailyStreams = JSON.parse(d.DAILY_STREAMS) as unknown as ArrayOfKeyStringValueStringType;
      const allDataByDate = getAllDataByDate(dailyStreams);
      const totalCellData = getContentCellData(allDataByDate);
      const dailyStreamsWithContentCellData = getDailyStreamsWithContentCellData(dailyStreams);
      const isLastItem = index === data.length - 1;

      if (index === 0) {
        const dailyStreamsKeys = ['total', ...Object.keys(dailyStreamsWithContentCellData)];
        dailyStreamsKeys.forEach((key) => (total.headerData[key] = { slope: '', percentChange: '', streams: '' }));
      }

      const row = {
        key: (index + 1).toString(),
        track: {
          title: d.TITLE,
          explicit: d.EXPLICIT_TYPE,
          artist: d.ARTIST,
          productTitle: d.PRODUCT_TITLE || '',
          date: d.RELEASE_DATE ? new Date(d.RELEASE_DATE).toISOString().split('T')[0] : '',
          img: d.IMG,
        },
        chart: allDataByDate,
        total: totalCellData,
        ...dailyStreamsWithContentCellData,
      };

      Object.keys(total.headerData).forEach((key) => {
        Object.keys(total.headerData[key]).forEach((innerKey) => {
          const numberValue =
            // @ts-ignore
            (Number(total.headerData[key][innerKey]) + Number(row[key][innerKey])) / (isLastItem ? data.length : 1);

          // @ts-ignore
          total.headerData[key][innerKey] = getValueWithSign(numberValue);
        });
      });

      if (isLastItem) {
        const dailyStreamsColumns = Object.keys(dailyStreamsWithContentCellData).map((key) => ({
          title: () => <ContentCell title={key} {...total.headerData[key]} />,
          dataIndex: key,
          key,
          render: (content: IDataSourceContent) => <ContentCell {...content} />,
          width: 100,
        }));
        newColumns.push(...dailyStreamsColumns);

        const totalColumn = newColumns.find((column) => column.dataIndex === 'total');

        if (totalColumn) {
          totalColumn.title = () => <ContentCell title="Total" {...total.headerData.total} />;
        }
      }

      total.newData.push(row);

      return total;
    },
    { newData: [], headerData: {} } as { newData: IDataSource[]; headerData: KeyStringValueDataSourceContent }
  );

  return {
    data: newData,
    columns: newColumns,
  };
};

export * from './mock';
