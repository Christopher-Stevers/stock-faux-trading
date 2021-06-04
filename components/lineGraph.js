import { useEffect } from 'react'
import * as d3 from "d3";
import styles from './lineGraph.module.scss'
export default function LineGraph() {
    const drawChart=()=>{
        //The next 8 lines are taken from https://www.d3-graph-gallery.com/graph/line_basic.html
        const margin = {top: 10, right: 30, bottom: 30, left: 60};
    const width = 460 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
        const svg=d3.select("#lineGraph")
        .append("svg")
        .attr("class", "chart")
        .attr("width", width + margin.left+ margin.right)
        .attr("height", height +margin.top +margin.bottom).append ("g")
        .attr("transform", "translate(" +margin.left+"," + margin.top +")");
        const xScale =d3.scaleLinear()
        .domain([0, 10])
        .range([0, width]);
        svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));
        const yScale=d3.scaleLinear()
        .domain([0, 10])
        .range([height, 0]);
        svg.append("g")
        .call(d3.axisLeft(yScale));
        svg.append("path")
        .datum([{date: "0",
                value:"2"},
                {date: "5",
                 value:"4"}
                ,{date: "6",
                 value:"3"}
                ,{date: "10",
                 value:"6"}])
        .attr("fill", "black")
        .attr("stroke", "red")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line().x(function(d){return xScale(d.date)})
        .y(function(d){return yScale(d.value)}))
   }
return drawChart();

    

}