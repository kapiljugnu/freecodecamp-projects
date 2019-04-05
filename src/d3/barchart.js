import * as d3 from "d3";
import { getGDP } from "./helper/getGDP";

const body = d3.select("body");

body
  .append("div")
  .attr("id", "title")
  .text("United States GDP");

getGDP().then(dataSet => {
  const svg = body.append("svg");

  const xScale = d3
    .scaleLinear()
    .domain(d3.min(dataSet, d => d.year), d3.max(dataSet, d => d.year));
  // .range();

  const xAxis = d3.axisBottom(xScale);

  svg.append("g").attr("id", "x-axis");
  // .attr("transform", "translate(0, " + (h - padding) + ")")
  // .call(xAxis);

  const yScale = d3
    .scaleLinear()
    .domain(d3.min(dataSet, d => d.gdp), d3.max(dataSet, d => d.gdp));
  // .range();

  const yAxis = d3.axisLeft(yScale);

  svg.append("g").attr("id", "y-axis");
  // .attr("transform", "translate(0, " + (h - padding) + ")")
  // .call(yAxis);

  svg
    .selectAll("rect")
    .data(dataSet)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("data-date", d => d.recordDate)
    .attr("data-gdp", d => d.gdp)
    .attr("width", "5px")
    .attr("height", d => d.gdp);
});
