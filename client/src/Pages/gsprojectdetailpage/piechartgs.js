import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Money"],
  ["Available", 2],
  ["Needed", 27],
  ["Design", 24],
  ["Services", 72],
  ["Technology", 100],
];

export const options = {
  is3D: true,
  legend:'bottom',
  chartArea:{top:0,width:'100%',height:'70%'}
};

export function PieChartgs() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}