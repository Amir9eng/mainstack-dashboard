import Chart from "react-apexcharts";

const AreaChart = () => {
  const graph: any = {
    series: [
      {
        data: [850, 870, 550, 650, 900, 200, 250],
      },
    ],
    option: {
      chart: {
        height: "100%",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: 1,
        curve: "straight",
        colors: ["#FF5403"],
      },
      fill: {
        colors: ["#FF540333"],
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 1,
          opacityTo: 0.2,
        },
      },
      xaxis: {
        categories: [
          "18 Dec",
          "19 Dec",
          "20 Dec",
          "21 Dec",
          "22 Dec",
          "23 Dec",
          "24 Dec",
        ],
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
        series={graph.series}
        type="area"
        height={"80%"}
      ></Chart>
    </>
  );
};

export default AreaChart;
