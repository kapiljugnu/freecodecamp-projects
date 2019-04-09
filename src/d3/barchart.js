import * as d3 from "d3";
import { getGDP } from "./helper/getGDP";
import { xAxisCompute, xAxisSVGComponent } from "./barchart/xAxis";
import { yAxisCompute, yAxisSVGComponent } from "./barchart/yAxis";

const body = d3.select("body");

body
  .append("div")
  .attr("id", "title")
  .text("United States GDP");

getGDP().then(dataSet => {
  const height = 250;
  const width = 500;
  const padding = 30;

  const svg = body
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const { xScale, xAxis } = xAxisCompute(dataSet, padding, width);
  const { yScale, yAxis } = yAxisCompute(dataSet, padding, height);

  xAxisSVGComponent(svg, xAxis, height, padding);
  yAxisSVGComponent(svg, yAxis, padding);

  svg
    .selectAll("rect")
    .data(dataSet)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("data-date", d => d.recordDate)
    .attr("data-gdp", d => d.gdp)
    .attr("width", "5px")
    .attr("height", d => yScale(d.gdp))
    .attr("x", d => xScale(d.year))
    .attr("y", d => yScale(d.gdp));
});
