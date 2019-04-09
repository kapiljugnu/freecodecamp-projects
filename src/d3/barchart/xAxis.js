import * as d3 from "d3";

export const xAxisCompute = (dataSet, padding, width) => {
  const xScale = d3
    .scaleLinear()
    .domain([d3.min(dataSet, d => d.year), d3.max(dataSet, d => d.year)])
    .range([padding, width - padding]);
  const xAxis = d3.axisBottom(xScale);
  return { xScale, xAxis };
};

export const xAxisSVGComponent = (svg, xAxis, height, padding) => {
  svg
    .append("g")
    .attr("id", "x-axis")
    .attr("transform", `translate(0, ${height - padding})`)
    .call(xAxis);
};
