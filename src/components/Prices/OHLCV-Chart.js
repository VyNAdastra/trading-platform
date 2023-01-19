import HighchartsReact from "highcharts-react-official";

const OHLCVChart = ({ options, highcharts }) => (
  <HighchartsReact
    highcharts={highcharts}
    constructorType={"stockChart"}
    options={options}
  />
);
export default OHLCVChart;
