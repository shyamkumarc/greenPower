import React from "react";
import { Col, Row, Container } from "react-bootstrap"

import {
  BarChart,
  Bar,
  LabelList,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  LineChart
} from "recharts";

//Live Generation data
const live_generation = [
  {
    name: "01:00",
    pv: 480,
    uv: 1500,
  },
  {
    name: "02:00",
    pv: 720,
    uv: 1500,
  },
  {
    name: "03:00",
    pv: 900,
    uv: 1650,
  },
  {
    name: "04:00",
    pv: 1680,
    uv: 700,
  },
  {
    name: "05:00",
    pv: 1211,
    uv: 1690,
  },
  {
    name: "06:00",
    pv: 1141,
    uv: 1750,
  },
  {
    name: "07:00",
    pv: 1061,
    uv: 1932,
  },
  {
    name: "08:00",
    pv: 1291,
    uv: 1581,

  },
  {
    name: "09:00",
    pv: 1750,
    uv: 1932,
  },
  {
    name: "10:00",
    pv: 2032,
    uv: 1750,
  },
  {
    name: "11:00",
    pv: 2430,
    uv: 1850,
  },
  {
    name: "12:00",
    pv: 2610,
    uv: 2000,
  },
  {
    name: "13:00",
    pv: 3100,
    uv: 2040,
  },
  {
    name: "14:00",
    pv: 3241,
    uv: 2040,

  },
  {
    name: "15:00",
    pv: 3500,
    uv: 2040,
  },
  {

  }
];



const data = [
  {
    date: "2018",
    wind: 9,
    solar: 14,
    // amt: 2400
  },
  {
    date: "2019",
    wind: 12,
    solar: 16,
    // amt: 2210
  },
  {
    date: "2020",
    wind: 14,
    solar: 19,
    // amt: 2290
  },
  {
    date: "2021",
    wind: 15,
    solar: 22,
    // amt: 2000
  }
];
const renderCustomizedSolar = (props) => {
  const { x, y, width, value } = props;
  return (
    <g>
      <circle cx={x + width / 2} cy={y} fill="black" />
      <text
        x={x + width / 2}
        y={y}
        fill="black"
        textAnchor="middle"
        dominantBaseline="top"
      >
        {data.find((d) => d.date === value)?.solar}
      </text>
    </g>
  );
};

const renderCustomizedWind = (props) => {
  const { x, y, width, value } = props;
  return (
    <g>
      <circle cx={x + width / 2} cy={y} fill="black" />
      <text
        x={x + width / 2}
        y={y}
        fill="black"
        textAnchor="middle"
        dominantBaseline="top"
      >
        {data.find((d) => d.date === value)?.wind}
      </text>
    </g>
  );
};


// const monthTickFormatter = (tick) => {
//   const date = new Date(tick);

//   return date.getMonth() + 1;
// };


//Mothwise Generation Chart
const monthwise = [
  {

  },
  {
    name: "Oct",
    mg: 30,

  },
  {
    name: "Nov",
    mg: 28,

  },
  {
    name: "Dec",
    mg: 27,

  },
  {
    name: "Jan",
    mg: 27,

  },
  {
    name: "Feb",
    mg: 28,

  },
  {
    name: "Mar",
    mg: 29
  },
  {
    name: "Apr",
    mg: 30

  },
  {
    name: "May",
    mg: 32

  },
  {
    name: "Jun",
    mg: 33

  },
  {
    name: "July",
    mg: 34
  },
  {
    name: "Aug",
    mg: 33
  },
  {
    name: "Sep",
    mg: 25
  }

];

const CustomizedLabel = (props) => {
  const { x, y, stroke, value } = props;

  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};



export default function App() {
  return (

    <>
      <Container>
        <Row>
          <Col xs={6}>
            <h2>Live Generation - 3495 MW</h2>
            <h4>PV Generation Today</h4>
            <LineChart
              width={500}
              height={300}
              data={live_generation}
              margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
              <YAxis name="2nd Y-Axis" />
              <Tooltip />
              <Legend />
              <Line type="monotone" name="Actual" dataKey="pv" stroke="#4068CE">
                <LabelList content={<CustomizedLabel />} />
              </Line>
              <Line type="monotone" name="Forecast" dataKey="uv" stroke="#FFA114">
                <LabelList content={<CustomizedLabel />} />
              </Line>
            </LineChart>
          </Col>

          <Col >
            <h5>Installed Capacity PV - 22 GV</h5>
            <h5>Installed Capacity Wind - 15 GV</h5>
            <h4>Installed Capacity(GV)</h4>

            <BarChart
              width={300}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />

              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="solar" name="Solar" fill="#FFA114">
                <LabelList dataKey="date" content={renderCustomizedSolar} />

              </Bar>
              <Bar dataKey="wind" name="Wind" fill="#0C67CE" >
                <LabelList dataKey="date" content={renderCustomizedWind} />

              </Bar>
            </BarChart>
            <h6>Forecasted PV Peak Generation - 2150 MV</h6>
            <h6>Forecasted Wind Peak generation - 950 MV</h6>
          </Col>

          <Col>
            <h4>Current Weather</h4>
            <h3>24°C</h3>
            <h5>Solar Power</h5><br/>
            <h3>20.0</h3>
            <h3>W/m2</h3>
            <sub>*Based on a 4kWp PV array</sub>
            <p>Last update: 0 days ago</p>
            <h5>Avoided Emmisions</h5>
            <h5>36.5 Million Tones CO<sub>2</sub></h5>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col >
            <h4>PV Generation Today</h4>
            <LineChart
              width={500}
              height={300}
              data={live_generation}
              margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
              <YAxis  />
              <Tooltip />
              <Legend />
              <Line type="monotone" name="Actual" dataKey="pv" stroke="#4068CE">
                <LabelList content={<CustomizedLabel />} />
              </Line>
              <Line type="monotone" name="Forecast" dataKey="uv" stroke="#FFA114">
                <LabelList content={<CustomizedLabel />} />
              </Line>
            </LineChart>
          </Col>

          <Col>
            <h4>Monthwise Generation</h4>
            <LineChart
              width={400}
              height={300}
              data={monthwise}
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 10
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
              <YAxis />
              <Tooltip />
              <Legend />

              <Line type="monotone" dataKey="mg" stroke="#4068CE">
                <LabelList content={<CustomizedLabel />} />
              </Line>
            </LineChart>
          </Col>
        </Row>
      </Container>
    </>
  );
}

