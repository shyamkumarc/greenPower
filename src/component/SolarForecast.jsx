import { Col, Row } from "react-bootstrap"
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Line, LineChart, Legend, LabelList } from "recharts";

const pvforecast = [
    {
        name: "PV - T+3",
        pv: 15600
    },
    {
        name: "PV - T+4",
        pv: 14800
    },

];

//PV Generation Chart
const pvgeneration1 = [

    {
        name: "01:00",
        pv: 0,

    },
    {
        name: "01:03",
        pv: 0,

    },
    {
        name: "02:00",
        pv: 0,

    },
    {
        name: "02:30",
        pv: 0,

    },
    {
        name: "03:00",
        pv: 0,

    },
    {
        name: "03:30",
        pv: 350
    },
    {
        name: "04:00",
        pv: 500

    },
    {
        name: "04:30",
        pv: 650

    },
    {
        name: "05:00",
        pv: 941

    },
    {
        name: "05:30",
        pv: 1120
    },
    {
        name: "06:00",
        pv: 950
    },
    {
        name: "06:30",
        pv: 670
    },
    {
        name: "07:00",
        pv: 500
    },
    {
        name: "07:30",
        pv: 300
    },
    {
        name: "08:00",
        pv: 0
    },
    {
        name: "08:30",
        pv: 0
    },
];

const pvgeneration2 = [
    {
        name: "01:00",
        pv: 0,

    },
    {
        name: "01:03",
        pv: 0,

    },
    {
        name: "02:00",
        pv: 0,

    },
    {
        name: "02:30",
        pv: 0,

    },
    {
        name: "03:00",
        pv: 0,

    },
    {
        name: "03:30",
        pv: 431
    },
    {
        name: "04:00",
        pv: 631

    },
    {
        name: "04:30",
        pv: 761

    },
    {
        name: "05:00",
        pv: 911

    },
    {
        name: "05:30",
        pv: 1011
    },
    {
        name: "06:00",
        pv: 810
    },
    {
        name: "06:30",
        pv: 670
    },
    {
        name: "07:00",
        pv: 420
    },
    {
        name: "07:30",
        pv: 270
    },
    {
        name: "08:00",
        pv: 0
    },
    {
        name: "08:30",
        pv: 0
    },
];

const CustomizedLabel = (props) => {
    const { x, y, stroke, value } = props;

    return (
        <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="left">
            {value}
        </text>
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
          {pvforecast.find((d) => d.name === value)?.pv}
        </text>
      </g>
    );
  };

const CustomizedAxisTickPV1 = (props) => {
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

const CustomizedLabelPV2 = (props) => {
    const { x, y, stroke, value } = props;
  
    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  };
  
  const CustomizedAxisTickPV2 = (props) => {
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


const SolarForecast = () => {
    return (
        <>
            <Row>
                <Col xs={12} md={8}>
                    <h3>PV Generation T+1</h3>
                    <LineChart
                        width={600}
                        height={300}
                        data={pvgeneration1}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 0,
                            bottom: 10
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTickPV1 />} />
                        <YAxis />
                        <Tooltip />
                        <Legend />

                        <Line type="monotone" name="forecast" dataKey="pv" stroke="#EEB183"> 
                        <LabelList content={<CustomizedLabel />} />
                        </Line>
                    </LineChart>
                </Col>
                <Col xs={6} md={4}>
                    <h3>PV Forecaste(MWh) - 3days</h3>
                    <BarChart width={250} height={250} data={pvforecast} barSize={55}>
                        <XAxis dataKey="name" />
                        <CartesianGrid vertical={false} />
                        <YAxis />
                        <Tooltip />
                        <Bar name="PV" dataKey="pv" fill="#EEB183" >
                        <LabelList dataKey="name" content={renderCustomizedWind} />

                            </Bar>
                    </BarChart>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8}>
                    <h3>PV Generation T+2</h3>
                    <LineChart
                        width={600}
                        height={300}
                        data={pvgeneration2}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 0,
                            bottom: 10
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTickPV2 />} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#EEB183">
                            <LabelList content={<CustomizedLabelPV2 />} />
                        </Line>
                    </LineChart>
                 


                </Col>
            </Row>
        </>
    )
}
export default SolarForecast;

