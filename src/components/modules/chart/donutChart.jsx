import React, { useEffect } from "react"
import * as d3 from "d3"

function Donut(props) {
  const DonutAppFunc = () => {
    var width = 500
    var height = Math.min(width, 500)
    const radius = Math.min(width, height) / 2

    var pie = d3
      .pie()
      .padAngle(0.005)
      .sort(null)
      .value(d => d.value)

    var arc = () => {
      console.log(
        d3
          .arc()
          .innerRadius(radius * 0.67)
          .outerRadius(radius - 1)
      )
      return d3
        .arc()
        .innerRadius(radius * 0.5)
        .outerRadius(radius - 1)
        .padAngle(0)
    }
    var data = props.data
    var chart = () => {
      const arcs = pie(data)
      const svg = d3
        .select(`#svg${props.id}`)
        .attr("viewBox", [
          -width / 2 - 25,
          -height / 2 - 25,
          width + 50,
          height + 50
        ])

      svg
        .append("defs")
        .append("filter")
        .attr("id", "box-shadow")
        .append("feDropShadow")
        .attr("dx", "-2")
        .attr("dy", "3")
        .attr("stdDeviation", "5")

      svg
        .append("g")
        .selectAll("path")
        .data(arcs)
        .join("path")
        .attr("fill", d => d.data.colors)
        .attr("d", arc())
        .attr("filter", "url(#box-shadow)")

      svg
        .append("g")
        .selectAll("path")
        .data(arcs)
        .join("path")
        .attr("fill", d => d.data.colors)
        .attr("d", arc())
        .append("title")
        .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`)

      svg
        .append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 100)
        .attr("text-anchor", "middle")
        .attr("style", "transform:translate(0, 5%)")
        .selectAll("text")
        .data(arcs)
        .join("text")
        .attr("fill", d => d.data.colors)
        .text(d => {
          if (d.data.colors === "white") {
            return ""
          } else {
            return d.data.value
          }
        })

      return svg.node()
    }

    chart()
  }

  useEffect(DonutAppFunc, [])

  return (
    <>
      <div style={{ height: props.height, width: props.width, display: 'flex', alignItems:'center' }}>
        <svg id={`svg${props.id}`} style={{margin: 'auto'}}/>
      </div>
    </>
  )
}

export default Donut
