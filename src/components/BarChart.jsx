import {useState, useEffect} from "react"
import { dataRef } from "../service/fetchData";

import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {
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
        "hydrogen": parseFloat(sensor.hydrogen_concentration) || 0,
        "hydrogenColor": "hsl(229, 70%, 50%)",
    
        "lpg": parseFloat(sensor.lpg_concentration) || 0,
        "lpgColor": "hsl(229, 70%, 50%)",
    
        "methane": parseFloat(sensor.methane_concentration) || 0,
        "methaneColor": "hsl(229, 70%, 50%)",
    
        "smoke": parseFloat(sensor.smoke_concentration) || 0,
        "smokeColor": "hsl(229, 70%, 50%)",
      };
    })

    setData(convertedData)

    console.log(convertedData)

  }, [alldata]);

  return (
    <ResponsiveBar
      data={data}
      theme={{
        // added
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
      }}
      keys={["smoke", "methane", "lpg", "hydrogen"]}
      indexBy="id"
      margin={{ top: 50, right: 70, bottom: 50, left: 50 }}
      padding={0.6}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Concentration", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "values", // changed
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in sensor: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;
