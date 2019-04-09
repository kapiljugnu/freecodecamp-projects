import * as d3 from "d3";

export const yAxisCompute = (dataSet, padding, height) => {
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataSet, d => d.gdp)])
    .range([height - padding, padding]);
  const yAxis = d3.axisLeft(yScale);
  return { yScale, yAxis };
};

export const yAxisSVGComponent = (svg, yAxis, padding) => {
  svg
    .append("g")
    .attr("id", "y-axis")
    .attr("transform", `translate(${padding}, 0)`)
    .call(yAxis);
};
