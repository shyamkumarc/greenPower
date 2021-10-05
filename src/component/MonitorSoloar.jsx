import { Form, FormControl, Button, ListGroup, Row, Col } from "react-bootstrap"
import {Link } from "react-router-dom"
import data from '../data/solarData'

const MonitorSolar = () => {
    
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
                <Link to={'/solardashboard/'+datas.id}>

                    {/* <ListGroup.Item  action href={'/solardashboard/'+datas.id}> */}
                    <ListGroup.Item  action >

                        <h1>{datas.name}</h1>
                        <h5>Capacity: {datas.capacity}</h5>
                        <h5>Peak Generation:{datas.peak_generation}</h5>
                       
                    </ListGroup.Item>
                    </Link>
                    </ListGroup>

                    )}
                    {/* <ListGroup.Item  action href="#link2">
                        Link 2
                    </ListGroup.Item>
                    <ListGroup.Item  action href="#link3" >
                        This one is a button
                    </ListGroup.Item> */}
                </Col>

            </Row>

        </>
    )
}
export default MonitorSolar;