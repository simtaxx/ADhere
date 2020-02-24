import React from "react";
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryScatter,
  VictoryAxis,
  VictoryTooltip
} from "victory";

const Pin = props => {
  return (
    <>
      <foreignObject
        x={props.x}
        y={props.y}
        style={{
          height: "50px",
          width: "50px",
          transform: "translate(-3%,-6%)"
        }}
      >
        <img
          alt="pin"
          src= {props.pinImg}
          style={{
            height: "50px",
            width: "50px"
          }}
        />
      </foreignObject>
    </>
  );
};

export default function GanttChart(props) {
  let y0 = d => new Date(d.dateA);
  let y = d => new Date(d.dateB);
  let x = d => d.federation;
  return (
    <div style={{ width: props.width, height: props.height }}>
      <VictoryChart
        horizontal
        width={900}
        height={400}
        domainPadding={40}
        theme={VictoryTheme.material}
        scale={{ y: "time" }}
      >
        {/*<VictoryAxis />*/}
        <VictoryAxis
          dependentAxis
          style={{ grid: { stroke: "#D3CECE" }, axis: { stroke: "#D3CECE" } }}
        />
        <VictoryBar
          data={props.data}
          y0={y0}
          y={y}
          x={x}
          barWidth={10}
          style={{
            data: {
              fill: "white",
              stroke: "#94949485",
              strokeWidth: "1",
              strokeLinecap: "round"
            },
            labels: { fill: "#F79256", fontSize: 20 }
          }}
          labels={d =>
            d.datum.federation + " du " + d.datum.dateA + " au " + d.datum.dateB
          }
          labelComponent={
            <VictoryTooltip
              transform={`rotate(45 ${x} ${y})`}
              flyoutStyle={{ fill: "white", stroke: "#F79256" }}
            />
          }
        />
        <VictoryScatter
          size={20}
          data={props.data}
          y={y0}
          x={x}
          dataComponent={<Pin pinImg= {props.pin}/>}
          style={{
            data: { fill: "red" },
            labels: { fill: "#F79256", fontSize: 20 }
          }}
          labels={d => d.datum.federation + " Auditeurs"}
          labelComponent={
            <VictoryTooltip
              flyoutStyle={{
                fill: "white",
                stroke: "#F79256",
                cursor: "pointer"
              }}
            />
          }
        />
      </VictoryChart>
    </div>
  );
}
