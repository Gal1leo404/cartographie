import { tokens } from "../theme";

export const mockBarData = [
  {
    id: "1",
    "hydrogen": 137,
    "hydrogenColor": "hsl(229, 70%, 50%)",

    "lpg": 107,
    "lpgColor": "hsl(229, 70%, 50%)",

    "methane": 237,
    "methaneColor": "hsl(229, 70%, 50%)",

    "smoke": 13,
    "smokeColor": "hsl(229, 70%, 50%)",
  },
  {
    id: "2",
    "hydrogen": 137,
    "hydrogenColor": "hsl(229, 70%, 50%)",

    "lpg": 107,
    "lpgColor": "hsl(229, 70%, 50%)",

    "methane": 237,
    "methaneColor": "hsl(229, 70%, 50%)",

    "smoke": 13,
    "smokeColor": "hsl(229, 70%, 50%)",
  },
  {
    id: "3",
    "hydrogen": 137,
    "hydrogenColor": "hsl(229, 70%, 50%)",

    "lpg": 107,
    "lpgColor": "hsl(229, 70%, 50%)",

    "methane": 237,
    "methaneColor": "hsl(229, 70%, 50%)",

    "smoke": 13,
    "smokeColor": "hsl(229, 70%, 50%)",
  },
  {
    id: "4",
    "hydrogen": 137,
    "hydrogenColor": "hsl(229, 70%, 50%)",

    "lpg": 107,
    "lpgColor": "hsl(229, 70%, 50%)",

    "methane": 237,
    "methaneColor": "hsl(229, 70%, 50%)",

    "smoke": 13,
    "smokeColor": "hsl(229, 70%, 50%)",
  }
];

export const mockPieData = [
  {
    id: "1",
    data: [
      {
        id: "hydrogen",
        label: "hydrogen",
        value: 239,
        color: "hsl(104, 70%, 50%)",
      },
      {
        id: "lpg",
        label: "lpg",
        value: 170,
        color: "hsl(162, 70%, 50%)",
      },
      {
        id: "methane",
        label: "methane",
        value: 322,
        color: "hsl(291, 70%, 50%)",
      },
      {
        id: "smoke",
        label: "smoke",
        value: 503,
        color: "hsl(229, 70%, 50%)",
      },
    ]
  },
  {
    id: "2",
    data: [
      {
        id: "hydrogen",
        label: "hydrogen",
        value: 2,
        color: "hsl(104, 70%, 50%)",
      },
      {
        id: "lpg",
        label: "lpg",
        value: 470,
        color: "hsl(162, 70%, 50%)",
      },
      {
        id: "methane",
        label: "methane",
        value: 322,
        color: "hsl(291, 70%, 50%)",
      },
      {
        id: "smoke",
        label: "smoke",
        value: 103,
        color: "hsl(229, 70%, 50%)",
      },
    ]
  },
  
];

export const mockLineData = [
  {
    id: "1",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "hydrogen",
        y: 101,
      },
      {
        x: "lpg",
        y: 75,
      },
      {
        x: "methane",
        y: 36,
      },
      {
        x: "smoke",
        y: 216,
      },
      
    ],
  },
  {
    id: "2",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "hydrogen",
        y: 212,
      },
      {
        x: "lpg",
        y: 190,
      },
      {
        x: "methane",
        y: 270,
      },
      {
        x: "smoke",
        y: 9,
      },
      
    ],
  },
  {
    id: "3",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "hydrogen",
        y: 191,
      },
      {
        x: "lpg",
        y: 136,
      },
      {
        x: "methane",
        y: 91,
      },
      {
        x: "smoke",
        y: 190,
      },
      
    ],
  },
  {
    id: "4",
    color: tokens("dark").greenAccent[200],
    data: [
      {
        x: "hydrogen",
        y: 200,
      },
      {
        x: "lpg",
        y: 16,
      },
      {
        x: "methane",
        y: 191,
      },
      {
        x: "smoke",
        y: 390,
      },
      
    ],
  },
];

export const mockSensorData = [
  {
    hydrogen_concentration: "",
    lpg_concentration: "",
    methane_concentration: "",
    smoke_concentration: ""
  },
  
];

const colorSchema = [
  tokens("dark").greenAccent[500],
  tokens("dark").blueAccent[300],
  tokens("dark").redAccent[200],
  tokens("dark").greenAccent[200],
]


