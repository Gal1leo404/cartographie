import {useState, useEffect} from "react"
import { dataRef } from "../service/fetchData";

import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const colorSchema = [
  tokens("dark").greenAccent[500],
  tokens("dark").blueAccent[300],
  tokens("dark").redAccent[200],
  tokens("dark").greenAccent[200],
]

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [alldata, setallData] = useState([])

  const [data, setData] = useState([])

  useEffect(() =>{
    dataRef.ref().child("sensor_data").on('value', data => {
      const getData = Object.values(data.val())
      setallData(getData)
    })

    const convertedData = alldata.map((sensor, index) => {
      return {
        id: `sensor_${index + 1}`,
        color: colorSchema[index], 
        data: [
          {
            x: 'hydrogen',
            y: parseFloat(sensor.hydrogen_concentration) || 0,
          },
          {
            x: 'lpg',
            y: parseFloat(sensor.lpg_concentration) || 0,
          },
          {
            x: 'methane',
            y: parseFloat(sensor.methane_concentration) || 0,
          },
          {
            x: 'smoke',
            y: parseFloat(sensor.smoke_concentration) || 0,
          },
        ]
      };
    })

    setData(convertedData)

  }, [alldata]);

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      colors={{ scheme: "nivo" }} // added
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "element", // added
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5, // added
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "concentration", // added
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
