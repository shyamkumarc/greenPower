import { Form, FormControl, Button, ListGroup, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import data from '../data/windData'

const MonitorWind = () => {
    

    return (
        <>
            <Row>
                <Col>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    {data.map(datas =>
                        <ListGroup id="monitorlist" defaultActiveKey={datas.id}>
                            <Link to={'/winddashboard/' + datas.id}>
                                <ListGroup.Item action >

                                    <h1>{datas.name}</h1>
                                    <h5>Capacity: {datas.capacity}</h5>
                                    <h5>Peak Generation:{datas.peak_generation}</h5>

                                </ListGroup.Item>
                            </Link>
                        </ListGroup>
                    )}
                </Col>

            </Row>

        </>
    )
}
export default MonitorWind;