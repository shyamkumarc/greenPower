// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from "react-router-dom";
import { Col, Accordion, ListGroup } from "react-bootstrap"

const Menupage = () => {
  //assigning location variable
  const location = useLocation();
  console.log(location)

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (

    <Col>

      <ListGroup as="ul">
        <ListGroup.Item as="li" className={splitLocation[1] === "" ? "active" : ""} >
          <Link to='/greenPower'>Home</Link>
        </ListGroup.Item>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Solar</Accordion.Header>
            <Accordion.Body>
              <ListGroup.Item as="li" className={splitLocation[1] === "solarforecast" ? "active" : ""}>
                <Link to='/solarforecast'>Solar Generation Forecast</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className={splitLocation[1] === "monitorsolar" ? "active" : ""}>
                <Link to='/monitorsolar'>Monitor Solar Farm</Link>
              </ListGroup.Item>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Wind</Accordion.Header>
            <Accordion.Body>
              <ListGroup.Item as="li" className={splitLocation[1] === "windforecast" ? "active" : ""}>

                <Link to='/windforecast'>Wind Generation Forecast</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className={splitLocation[1] === "monitorwind" ? "active" : ""}>

                <Link to='/monitorwind'>Monitor Wind Farm</Link>
              </ListGroup.Item>

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <ListGroup.Item as="li" className={splitLocation[1] === "energydemand" ? "active" : ""}>
          <Link to='/energydemand'>Energy Demand</Link>
        </ListGroup.Item>
        <ListGroup.Item as="li" className={splitLocation[1] === "energyresources" ? "active" : ""}>
          <Link to='/energyresources'>Distributed Energy Resources</Link>

        </ListGroup.Item>
      </ListGroup>


   </Col>


  )
}

export default Menupage;



