import { Row, Col } from "react-bootstrap";
import { LineChart, LabelList, Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
const WindForecast = () => {

    const windgeneration1 = [
        {
            name: "01:00",
            pv: 400,

        },
        {
            name: "01:03",
            pv: 350,

        },
        {
            name: "02:00",
            pv: 850,

        },
        {
            name: "02:30",
            pv: 900,

        },
        {
            name: "03:00",
            pv: 750,

        },
        {
            name: "03:30",
            pv: 640
        },
        {
            name: "04:00",
            pv: 760

        },
        {
            name: "04:30",
            pv: 780

        },
        {
            name: "05:00",
            pv: 820

        },
        {
            name: "05:30",
            pv: 860
        },
        {
            name: "06:00",
            pv: 790
        },
        {
            name: "06:30",
            pv: 700
        },
        {
            name: "07:00",
            pv: 1000
        },
        {
            name: "07:30",
            pv: 1100
        },
        {
            name: "08:00",
            pv: 1200
        },
        {
            name: "08:30",
            pv: 1100
        }, {
            name: "09:00",
            pv: 950
        },
    ];

    const windforecast = [
        {
            name: "Wind - T+3",
            wind: 14200
        },
        {
            name: "Wind - T+4",
            wind: 16300
        },

    ];

    const windgeneration2 = [
        {
            name: "01:00",
            pv: 400,

        },
        {
            name: "01:03",
            pv: 350,

        },
        {
            name: "02:00",
            pv: 850,

        },
        {
            name: "02:30",
            pv: 900,

        },
        {
            name: "03:00",
            pv: 750,

        },
        {
            name: "03:30",
            pv: 640
        },
        {
            name: "04:00",
            pv: 760

        },
        {
            name: "04:30",
            pv: 780

        },
        {
            name: "05:00",
            pv: 820

        },
        {
            name: "05:30",
            pv: 860
        },
        {
            name: "06:00",
            pv: 790
        },
        {
            name: "06:30",
            pv: 700
        },
        {
            name: "07:00",
            pv: 1000
        },
        {
            name: "07:30",
            pv: 1100
        },
        {
            name: "08:00",
            pv: 1200
        },
        {
            name: "08:30",
            pv: 1100
        }, {
            name: "09:00",
            pv: 950
        },
    ];

    const CustomizedLabel = (props) => {
        const { x, y, stroke, value } = props;
      
        return (
          <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
            {value}
          </text>
        );
      };
    const CustomizedAxisWind1 = (props) => {
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
    };const CustomizedAxisWind2 = (props) => {
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
              {windforecast.find((d) => d.name === value)?.wind}
            </text>
          </g>
        );
      };
      



    return (
        <>
            <Row>
                <Col xs={12} md={8}>
                    <h3>Wind Generation T+1</h3>
                    <LineChart
                        width={600}
                        height={300}
                        data={windgeneration1}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 0,
                            bottom: 10
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" height={60} tick={<CustomizedAxisWind1 />} />
                        <YAxis />
                        <Tooltip />
                        <Legend />

                        <Line name="Generation(MW)" type="monotone" dataKey="pv" stroke="#E7823B">
                        <LabelList content={<CustomizedLabel />} />

                    </Line>
                    </LineChart>
                </Col>
                <Col xs={6} md={4}>
                    <h3>Wind Forecaste(MWh) - 3days</h3>
                    <BarChart width={250} height={250} data={windforecast} barSize={30}>
                        <XAxis dataKey="name" />
                        <CartesianGrid vertical={false} />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="wind" fill="#767171">
                        <LabelList dataKey="name" content={renderCustomizedWind} />

                            </Bar>
                    </BarChart>
                </Col>
            </Row>
            <Row>
            <Col xs={12} md={8}>
                    <h3>Wind Generation T+2</h3>
                    <LineChart
                        width={600}
                        height={300}
                        data={windgeneration2}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 0,
                            bottom: 10
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" height={60} tick={<CustomizedAxisWind2 />} />
                        <YAxis />
                        <Tooltip />
                        <Legend />

                        <Line name="Generation(MW)" type="monotone" dataKey="pv" stroke="#E7823B">
                        <LabelList content={<CustomizedLabel />} />

                            </Line>
                    </LineChart>
                </Col>
            </Row>
        </>
    )
}
export default WindForecast;