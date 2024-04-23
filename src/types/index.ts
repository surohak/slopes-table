export interface IDataSourceContent {
  slope: string;
  percentChange: string;
  streams: string;
}

export interface IDataSource {
  key: string;
  track: {
    title: string;
    explicit: boolean;
    artists: string[];
    date: string;
    img?: string;
  };
  chart: number[];
  total: IDataSourceContent;
  spotify: IDataSourceContent;
  appleMusic: IDataSourceContent;
  pandora: IDataSourceContent;
}
