import React from "react"
import {
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryTooltip,
  VictoryTheme,
  VictoryAxis
} from "victory"

export default function EstimationChart(props) {
  let x = d => new Date(d.date)
  let y = d => d.value
  return (
    <div style={{ width: props.width, height: props.height }}>
      <VictoryChart
        width={900}
        height={400}
        domainPadding={20}
        theme={VictoryTheme.material}
        scale={{ x: "time" }}
      >
        <VictoryAxis
          style={{ grid: { stroke: "#D3CECE" }, axis: { stroke: "#D3CECE" } }}
        />
        {/*<VictoryAxis dependentAxis />*/}
        <VictoryLine
          data={props.data}
          y={y}
          x={x}
          style={{ data: { stroke: "#F79256", strokeWidth: 5 } }}
          interpolation="natural"
        />
        {/*<VictoryArea
            data={data}
            y={y}
            x={x}
            style={{
              data: { stroke: "#F79256", strokeWidth: 5, fill: "white" }
            }}
            interpolation="natural"
          />*/}

        <VictoryScatter
          data={props.data}
          y={y}
          x={x}
          size={8}
          style={{
            data: {
              fill: "white",
              stroke: "#ff7f50",
              strokeWidth: 2
            },
            labels: { fill: "#F79256", fontSize: 20 }
          }}
          labels={d => d.datum.value + " Auditeurs"}
          labelComponent={
            <VictoryTooltip
              flyoutStyle={{ fill: "white", stroke: "#F79256" }}
            />
          }
          events={[
            {
              target: "data",
              eventHandlers: {
                onMouseOver: () => {
                  return [
                    {
                      target: "data",
                      mutation: () => ({ style: { fill: "#F79256" } })
                    },
                    {
                      target: "labels",
                      mutation: () => ({ active: true })
                    }
                  ]
                },
                onMouseOut: () => {
                  return [
                    {
                      target: "data",
                      mutation: () => ({
                        style: {
                          fill: "white",
                          stroke: "#ff7f50",
                          strokeWidth: 2
                        }
                      })
                    },
                    {
                      target: "labels",
                      mutation: () => ({ active: false })
                    }
                  ]
                }
              }
            }
          ]}
        />
      </VictoryChart>
    </div>
  )
}
