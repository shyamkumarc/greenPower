import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import { BsPeopleFill, BsFillLightningFill } from "react-icons/bs";

const EnergyResurces = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <CardGroup>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        <h2>Average Load Profile</h2>
                                        <h4>Load Profile</h4>
                                        <br />
                                    </Card.Title>
                                    <Card.Text>
                                        <h1> <BsPeopleFill />  2550 </h1>
                                        <h5> MWh, 5 min ago </h5>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                    <Col>
                    <CardGroup>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        <h2>Total Generation</h2>
                                        <h4>Total Generation</h4>
                                        <br />
                                    </Card.Title>
                                    <Card.Text>
                                        <h1> <BsFillLightningFill />  3200 </h1>
                                        <h5> MWh, 5 min ago </h5>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                    <Col><CardGroup>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        <h2>Total Storage</h2>
                                        <h4>Operational Storage</h4>
                                        <br />
                                    </Card.Title>
                                    <Card.Text>
                                        <h1> <BsFillLightningFill />  160 </h1>
                                        <h5> MWh, 0 min ago </h5>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup></Col>
                </Row>
            </Container>
        </>
    )
}
export default EnergyResurces;