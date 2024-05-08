export interface IDataSourceContent {
  slope: string;
  percentChange: string;
  streams: string;
}

export type KeyStringValueStringType = { [key: string]: string };
export type KeyStringValueNumberType = { [key: string]: number };
export type ArrayOfKeyStringValueStringType = Array<KeyStringValueStringType>;
export type KeyStringValueDataSourceContent = { [key: string]: IDataSourceContent };

export interface IBEDailyStream {
  d: string;
  s: number;
}

export interface IDataSource {
  key: string;
  track: {
    title: string;
    explicit: string;
    artist: string;
    productTitle: string;
    date: string;
    img?: string;
  };
  chart: KeyStringValueNumberType;
  total: IDataSourceContent;
  [key: string]: IDataSourceContent | IDataSource['track'] | KeyStringValueNumberType | string;
}

export interface IBEData {
  ISRC: string;
  TITLE: string;
  ARTIST: string;
  EXPLICIT_TYPE: string;
  IMG: string;
  DAILY_STREAMS: string;
  RELEASE_DATE?: string;
  PRODUCT_TITLE?: string;
}
