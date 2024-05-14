import { mockDataBE } from '../dev';

export function numberFormatter(num: number, digits = 2) {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;

  const item = lookup
    .slice()
    .reverse()
    .find((item) => num >= item.value);

  return item ? (num / item.value).toFixed(digits).replace(regexp, '').concat(item.symbol) : '0';
}

export const getChartOption = (data = mockDataBE) => {
  const xAxisData = [...new Set(data?.map((item) => new Date(item.STATEMENT_DATE).toLocaleDateString()))];

  const series = data
    .reduce((total, item) => {
      const key = item.SALETYPEBIN;
      const index = total.findIndex((serie) => serie.name === key);

      if (index === -1) {
        total.push({
          name: key,
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            position: 'right',
          },
          emphasis: {
            focus: 'series',
          },
          data: [],
        });
      }

      const index2 = total.findIndex((serie) => serie.name === key);
      total[index2].data.push(Math.floor(item.SALES));

      return total;
      // Note: any because Echarts don't have a type for series
    }, [] as any[])
    .sort(
      (a, b) =>
        b.data.reduce((acc: number, item: number) => acc + item, 0) -
        a.data.reduce((acc: number, item: number) => acc + item, 0)
    );

  return {
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    // Adding total legend
    graphic: [
      {
        type: 'group',
        id: 'legendGroup',
        left: 20,
        top: 6,
        children: [
          {
            type: 'rect',
            left: 0,
            top: 0,
            shape: {
              width: 20,
              height: 10,
            },
            style: {
              fill: 'black',
            },
          },
          {
            type: 'text',
            left: 30,
            top: 0,
            style: {
              text: `Total ${numberFormatter(Math.floor(data.reduce((acc, item) => acc + item.SALES, 0)))}`,
              fill: 'black',
              fontSize: '12px',
              fontWeight: 'bold',
            },
          },
        ],
      },
    ],
    legend: [
      {
        formatter: function (name: string) {
          return `${name} ${numberFormatter(
            series.find((serie) => serie.name === name).data.reduce((acc: number, item: number) => acc + item, 0)
          )}`;
        },
        textStyle: {
          fontStyle: 'bold',
          color: 'black',
          fontSize: 12,
        },
      },
    ],
    xAxis: {
      type: 'category',
      data: xAxisData,
    },
    yAxis: {
      type: 'value',
    },
    series,
  };
};
