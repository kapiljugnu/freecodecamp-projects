import * as d3 from "d3";
import { getGDP } from "./helper/getGDP";
getGDP().then(res => {
  const body = d3.select("body");

  body
    .append("div")
    .attr("id", "title")
    .text("United States GDP");

  const svg = body.append("svg");

  svg.append("g").attr("id", "x-axis");
  svg.append("g").attr("id", "y-axis");

  svg
    .selectAll("rect")
    .data(res.data.data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("data-date", d => d[0])
    .attr("data-gdp", d => d[1])
    .attr("width", "25px")
    .attr("height", "10px");
});
