import { Row, Col } from "react-bootstrap";
import { LineChart, BarChart, LabelList, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
const EnergyDemand = () => {

    const energy_temp = [
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
            name: "T+2",
            load: 98450,
            generation: 72463,
        },
        {
            name: "T+3",
            load: 96450,
            generation: 75631,
        }


    ];

    const CustomizedLabelNetLoad = (props) => {
        const { x, y, stroke, value } = props;

        return (
            <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
                {value}
            </text>
        );
    };

    const renderCustomizedLabel = (props) => {
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
                    {data.find((d) => d.name === value)?.load}
                </text>
            </g>
        );
    };

    const renderCustomizedEvetLabel = (props) => {
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
                    {data.find((d) => d.name === value)?.generation}
                </text>
            </g>
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

    return (
        <>
            <Row>
                <Col >
                    <LineChart
                        width={800}
                        height={300}
                        data={energy_temp}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" name="Total RE Generation" dataKey="pv" stroke="#8884d8">
                            <LabelList content={<CustomizedLabelNetLoad />} />
                        </Line>
                        <Line type="monotone" name="Aggregate Load" dataKey="uv" stroke="#82ca9d">
                            <LabelList content={<CustomizedLabelNetLoad />} />
                        </Line>
                    </LineChart>

                </Col>
            </Row>
            <Row>
                <Col xs={6} md={4}>
                    <h5>Load Forecast(MWh)</h5>
                    <BarChart
                        width={300}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 0,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />

                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="load" name="Aggregated Load" fill="#FFA114">
                            <LabelList dataKey="name" content={renderCustomizedLabel} />

                        </Bar>
                        <Bar dataKey="generation" name="RE Generation" fill="#0C67CE" >
                            <LabelList dataKey="name" content={renderCustomizedEvetLabel} />

                        </Bar>
                    </BarChart>
                </Col>
                <Col xs={12} md={8}>
                    <LineChart
                        width={600}
                        height={300}
                        data={energy_temp}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 0,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" name="Total RE Generation" dataKey="pv" stroke="#8884d8">
                            <LabelList content={<CustomizedLabelNetLoad />} />
                        </Line>
                        <Line type="monotone" name="Aggregate Load" dataKey="uv" stroke="#82ca9d">
                            <LabelList content={<CustomizedLabelNetLoad />} />
                        </Line>
                    </LineChart>
                </Col>
            </Row>

        </>
    )
}
export default EnergyDemand;