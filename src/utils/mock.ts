import { IDataSource } from 'types';

export const mockHeaderData = {
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

export const mockDataSource: IDataSource[] = [
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

export const mockData = new Array(100).fill(mockDataSource[0]).map((_, index) => ({
  ...mockDataSource[index % 2 === 0 ? 0 : 1],
  key: (index + 1).toString(),
}));
