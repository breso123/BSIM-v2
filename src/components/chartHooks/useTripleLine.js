/* eslint-disable no-undef */
import { useEffect, useRef } from "react";
import { formatInterface2 } from "../../helpers/formatters";
import { useSelector } from "react-redux";

const useTripleLine = (data1, data2, data3, periods, item, boxed = false) => {
  const { price: pr } = useSelector((state) => state.app);
  const chartRef = useRef();

  useEffect(() => {
    const width = boxed ? 420 : 730;
    const height = boxed ? 220 : 250;
    const margin = { top: 20, right: 30, bottom: 30, left: 60 };
    const price = Array.from({ length: boxed ? 9 : 8 }, () => pr);

    while (chartRef.current.firstChild)
      chartRef.current.removeChild(chartRef.current.firstChild);

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const xScale = d3
      .scaleLinear()
      .domain([0, data1.length - 1])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([
        d3.min([...data1, ...data2, ...data3, ...price]),
        d3.max([...data1, ...data2, ...data3, ...price]),
      ])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const lineGenerator = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d));

    // Create lines for each data array
    svg
      .append("path")
      .datum(data1)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr("d", lineGenerator);

    svg
      .append("path")
      .datum(data3)
      .attr("fill", "none")
      .attr("stroke", "orangered")
      .attr("stroke-width", 2)
      .attr("d", lineGenerator);

    svg
      .append("path")
      .datum(data2)
      .attr("fill", "none")
      .attr("stroke", "midnightblue")
      .attr("stroke-width", 3)
      .attr("d", lineGenerator);

    if (item === "fairVal")
      svg
        .append("path")
        .datum(price)
        .attr("fill", "none")
        .attr("stroke", "#15803d")
        .attr("stroke-width", 2)
        .attr("d", lineGenerator);

    // Create x-axis
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(data1.length)
      .tickFormat((d, i) => periods[i])
      .tickSize(8);

    const xAxisGroup = svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(xAxis);

    xAxisGroup.select("path").style("opacity", "0.4");
    xAxisGroup.selectAll("line").style("opacity", "0.4");

    // Create y-axis
    const yAxis = d3
      .axisLeft(yScale)
      .tickSize(6)
      .tickFormat((d) =>
        item === "price" || item === "fairVal" ? d : formatInterface2(d, true)
      );

    const yAxisGroup = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(yAxis);

    yAxisGroup.select("path").style("opacity", "0.4");
    yAxisGroup.selectAll("line").style("opacity", "0.4");
  }, [data1, data2, data3, periods, item, boxed, pr]);

  return chartRef;
};

export default useTripleLine;
