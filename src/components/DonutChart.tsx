import Chart from 'react-apexcharts';
const DonutChart = ({ series, labels, width, height, colors }: any) => {
  const graph: any = {
    option: {
      chart: {
        height: '100%',
        toolbar: {
          show: false,
        },
      },
      labels: labels,
      legend: {
        show: false,
      },
      fill: {
        colors: colors,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '60%',
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
    },
  };
  return (
    <>
      <Chart
        options={graph.option}
        series={series}
        type="donut"
        height={height}
        width={width}
      ></Chart>
    </>
  );
};

export default DonutChart;
