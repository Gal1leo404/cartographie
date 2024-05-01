import {useState, useEffect} from "react"
import { dataRef } from "../../service/fetchData";

import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
//import { mockPieData as data } from "../../data/mockData";


const colorSchema = [
  "hsl(104, 70%, 50%)",
  "hsl(162, 70%, 50%)",
  "hsl(291, 70%, 50%)",
  "hsl(229, 70%, 50%)",
  "hsl(140, 70%, 50%)",
  "hsl(132, 70%, 50%)",
  "hsl(156, 70%, 50%)",
  "hsl(210, 70%, 50%)",

]

const Pie = ({isDashboard}) => {
  
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
        data: [
          {
            id: 'hydrogen',
            label: 'hydrogen',
            value: parseFloat(sensor.hydrogen_concentration) || 0,
            color: colorSchema[index], 
          },
          {
            id: 'lpg',
            label: 'lpg',
            value: parseFloat(sensor.lpg_concentration) || 0,
            color: colorSchema[index], 
          },
          {
            id: 'methane',
            label: 'methane',
            value: parseFloat(sensor.methane_concentration) || 0,
            color: colorSchema[index], 
          },
          {
            id: 'smoke',
            label: 'smoke',
            value: parseFloat(sensor.smoke_concentration) || 0,
            color: colorSchema[index], 
          },
        ]
      };
    })

    setData(convertedData)

    console.log(convertedData)

  }, [alldata]);

  return (
    <div>
      <Box m="20px">
        <Swiper navigation={true} pagination={{clickable: true}} modules={[Navigation]} 
        style={{maxWidth: "980px"}} >
          {
              data.map((item, index) =>
                <SwiperSlide key={index}>
                    <div style={{display: isDashboard? "none": ""}}>
                    <Header title="Pie Chart" subtitle={`Concentration Pie Chart ${item.id}`} />
                    </div>
                    <Box height={isDashboard ? "200px" :"75vh"}>
                      <PieChart data={item.data} isDashboard={isDashboard} />
                    </Box>
                </SwiperSlide>
              )
          }
        </Swiper>
      </Box>
    </div>
  );
};

export default Pie;
