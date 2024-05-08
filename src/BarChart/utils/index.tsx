import { mockDataBE } from '../dev';

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

  // .map((serie, index, arr) => {
  //   if (index === arr.length - 1) {
  //     serie.label = {
  //       position: 'top',
  //       formatter: (params: any) => {
  //         let val = 0;
  //
  //         arr.forEach((s: any) => {
  //           val += s.data[params.dataIndex];
  //         });
  //
  //         return val;
  //       },
  //     };
  //   }
  //
  //   return serie;
  // });

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
        top: 20,
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
              text: `Total: \n\n ${Math.floor(data.reduce((acc, item) => acc + item.SALES, 0))}`,
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
          return `${name} \n\n {count|${series
            .find((serie) => serie.name === name)
            .data.reduce((acc: number, item: number) => acc + item, 0)}}`;
        },
        textStyle: {
          rich: {
            count: {
              align: 'right',
              color: 'black',
              fontSize: 12,
              fontStyle: 'bold',
            },
          },
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
