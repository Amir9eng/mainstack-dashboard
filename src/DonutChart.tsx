import Chart from "react-apexcharts";
const DonutChart = ({ series, labels, width, height }: any) => {
  const graph: any = {
    option: {
      chart: {
        height: "100%",
        toolbar: {
          show: false,
        },
      },
      labels: labels,
      legend: {
        show: false,
      },
      fill: {
        colors: ["#599EEA", "#844FF6", "#F09468", "#FAB70A", "#0FB77A"],
      },
      plotOptions: {
        pie: {
          donut: {
            size: "60%",
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
