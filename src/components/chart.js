import React, { useEffect } from 'react'
import * as d3 from 'd3'

function Chart(props) {
    console.log("Chart")
    useEffect(() => {
        drawChart();
    },[])
    const drawChart = () => {
        // svg.selectAll("*").remove();
        const data = [12, 5, 6, 6, 9, 10];
        const svg = d3.select("body")
        .append("svg")
        .attr("width", 700)
        .attr("height", 300);
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => 300 - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green");
    }
    return <div id={"#" + props.id}></div>
}
export default Chart;