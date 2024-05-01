import React, {useState, useEffect} from 'react'
import { dataRef } from "../../service/fetchData";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from "leaflet"
import { Box } from "@mui/material";



const Map = () => {
  const [center, setCenter] = useState([35.833396666666665, 10.590473833333334])

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
        lat: parseFloat(sensor.latitude) || 0,
        long: parseFloat(sensor.longitude) || 0,
      };
    })

    setData(convertedData)

  }, [alldata]);

  return (
    <Box >
      <MapContainer center={center} zoom={13} scrollWheelZoom={false} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          data.map((item, index) => {
          return (
            <Marker position={[item.lat,item.long]} key={index} icon={DefaultIcon}>
            <Popup>
              {item.id}
            </Popup>
          </Marker>
          )
          })
        }
        {/*
          alldata.map((sensor, index) => (
            <Marker position={[parseFloat(sensor.latitude),parseFloat(sensor.longitude)]} key={index} icon={DefaultIcon}>
            <Popup>
              Sensor {index}
            </Popup>
          </Marker>
            ))
          */}
      </MapContainer>
    </Box>
  )
}

let DefaultIcon = L.icon({
  iconUrl: "/assets/marker-icon.png",
})
L.Marker.prototype.options.icon = DefaultIcon

export default Map