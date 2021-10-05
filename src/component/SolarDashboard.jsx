import { useParams } from "react-router-dom";
import { ResponsiveContainer, LabelList, LineChart, ComposedChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend, Line } from "recharts";
import { Row, Col, Card, CardGroup, Container } from "react-bootstrap";
import { BsFillGrid3X3GapFill, BsCaretUpFill } from "react-icons/bs";
import { ImScissors } from "react-icons/im";
import { FiHexagon } from "react-icons/fi";
import { BiTachometer } from "react-icons/bi";
import data from '../data/solarData'


const SolarDashboard = () => {
    let { id } = useParams();
    const performaceratio = [
        {},
        {
            name: "Feb",
            uv: 20,
            pv: 14,
        },
        {
            name: "Mar",
            uv: 21,
            pv: 24,
        },
        {
            name: "Apr",
            uv: 22,
            pv: 26,
        },
        {
            name: "May",
            uv: 21,
            pv: 29,
        },
        {
            name: "June",
            uv: 18,
            pv: 28,
        },
        {
            name: "July",
            uv: 20,
            pv: 26,
        }, {
            name: "Aug",
            uv: 22,
            pv: 22,
        }, {
            name: "Sep",
            uv: 24,
            pv: 24,
        }, {

        }
    ];

    const energy_temp = [
        {
            name: "01:00",
            pv: 60,
            uv: 0,
        },
        {
            name: "02:00",
            pv: 65,
            uv: 0,
        },
        {
            name: "03:00",
            pv: 59,
            uv: 0,
        },
        {
            name: "04:00",
            pv: 55,
            uv: 500,
        },
        {
            name: "05:00",
            pv: 57,
            uv: 600,
        },
        {
            name: "06:00",
            pv: 62,
            uv: 700,
        },
        {
            name: "07:00",
            pv: 64,
            uv: 750,
        },
        {
            name: "08:00",
            pv: 64,
            uv: 750,

        },
        {
            name: "09:00",
            pv: 66,
            uv: 760,
        },
        {
            name: "10:00",
            pv: 68,
            uv: 789,
        },
        {
            name: "11:00",
            pv: 69,
            uv: 840,
        },
        {
            name: "12:00",
            pv: 68,
            uv: 780,
        },
        {
            name: "13:00",
            pv: 70,
            uv: 800,
        },
        {
            name: "14:00",
            pv: 75,
            uv: 800,

        },
        {
            name: "15:00",
            pv: 80,
            uv: 700,
        },
        {

        }
    ];

    const CustomizedLabel = (props) => {
        const { x, y, stroke, value } = props;

        return (
            <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="bottom">
                {value}
            </text>
        );
    };

    const renderCustomizedAV = (props) => {
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
                    {performaceratio.find((d) => d.name === value)?.pv}
                </text>
            </g>
        );
    };
    const plant = data.filter(dataItem=>dataItem.id==id);

  
    return (
        <>
            <h5>PV Farm {plant[0].name} - Monitoring Dashboard</h5>
            <Container>
                <Row>
                    <Col xs={4}>
                        <CardGroup>
                            <Card>
                                <Card.Body>
                                    <Card.Title><h2>Panel Info</h2></Card.Title>
                                    <Card.Text>
                                        <h6> Panel Id - PV 1344U </h6>
                                        <br /><br />
                                        <h2> <BsFillGrid3X3GapFill /> 290 <BsCaretUpFill /> </h2>
                                        <h5>MW, Generation Capacity - {plant[0].capacity}</h5>
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        </CardGroup>
                    </Col>
                    <Col>
                        <CardGroup>
                            <Card>
                                <Card.Body>
                                    <Card.Title><h2>Disconnect PC System</h2></Card.Title>
                                    <Card.Text>
                                        <h4> Remotely managed PV </h4>
                                        <h1> <BsFillGrid3X3GapFill /> </h1>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                    <Col >
                        <CardGroup>
                            <Card>
                                <Card.Body>
                                    <Card.Title><h2>PV Curtailment Current Month(MWh)</h2></Card.Title>
                                    <Card.Text>
                                        <h1> <ImScissors />560 </h1>
                                        <h5> MWh, 5 mins ago </h5>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                    <Col>
                        <CardGroup>
                            <Card>
                                <Card.Body>
                                    <Card.Title><h2>PV Curtailment Year Till Date(MWh)</h2></Card.Title>
                                    <Card.Text>
                                        <h1> <ImScissors />4620 </h1>
                                        <h5> MWh </h5>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <iframe title="solarmap" src={plant[0].location} width="350" height="300" allowfullscreen="" loading="lazy"></iframe>

                    </Col>
                    <Col xs={6} md={6}>
                        <ResponsiveContainer width={"100%"} height={300}>
                            <ComposedChart
                                width={750}
                                height={400}
                                data={performaceratio}
                                margin={{
                                    top: 5,
                                    right: 10,
                                    left: 0,
                                    bottom: 5
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" height={60} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" name="Av Daily Performance Ration(PR)%" barSize={15} fill="#005EB8">
                                    <LabelList dataKey="name" content={renderCustomizedAV} />
                                </Bar>
                               
                                <Line type="monotone" name="Av Daily Ambient Temp"
                                     dataKey="uv" stroke="#FF8C00">
                                    <LabelList content={<CustomizedLabel />} />
                                </Line>
                            </ComposedChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col xs={6} md={2}>
                        <CardGroup>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        <h2>Total Energy(MWh)</h2>
                                        <h5>Past 1 month</h5>
                                    </Card.Title>
                                    <Card.Text>
                                        <h1> <FiHexagon />4620 </h1>
                                        <h5> MWh, 5 min ago </h5>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>

                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={2}>
                        <CardGroup>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        <h2>Last Energy Reading</h2>
                                    </Card.Title>
                                    <Card.Text>
                                        <h1> <FiHexagon />34.1 </h1>
                                        <h5> MWh, 5 min ago </h5>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                    <Col md={2}>
                        <CardGroup>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        <h2>Total Energy(MWh)</h2>
                                    </Card.Title>
                                    <Card.Text>
                                        <h1> <FiHexagon />260 </h1>
                                        <h5> MWh, 5 min ago </h5>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                    <Col md={6}>
                        <LineChart
                            width={500}
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
                            <XAxis dataKey="name" />
                            <YAxis yAxisId="left" />
                            <YAxis yAxisId="right" orientation="right" />
                            <Tooltip />
                            <Legend />
                            <Line
                                yAxisId="left"
                                name="Temperature"
                                type="monotone"
                                dataKey="pv"
                                stroke="#8884d8"
                                activeDot={{ r: 8 }}
                            >
                                <LabelList content={<CustomizedLabel />} />

                            </Line>
                            <Line yAxisId="right" name="Power" type="monotone" dataKey="uv" stroke="#FF8C00">
                                <LabelList content={<CustomizedLabel />} />

                            </Line>

                        </LineChart>

                    </Col>
                    <Col md={2}>
                        <CardGroup>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        <h2>Device</h2>
                                        <h3>Manage Device</h3>
                                    </Card.Title>
                                    <Card.Text>
                                        <h1> <BiTachometer />5 </h1>
                                        <h4> Connected Device </h4>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>

                    </Col>


                </Row>
            </Container>
        </>
    )
}
export default SolarDashboard;