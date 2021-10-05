import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Row } from 'react-bootstrap';
import Header from './nav/Header'
import SolarForecast from './component/SolarForecast';
import MonitorSolar from './component/MonitorSoloar';
import WindForecast from './component/WindForecast';
import MonitorWind from './component/MonitorWind';
import Menupage from './nav/Menupage';
import EnergyDemand from './component/EnergyDemand';
import EnergyResurces from './component/EnergyResources';
import SolarDashboard from './component/SolarDashboard';
import WindDashboard from './component/WindDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'

ReactDOM.render(
  <React.StrictMode>
   <Router>
   <Header />
   
   <Container fluid>
        <Row>
        <Col xs={3} >
      <Menupage />
      </Col>
        <Col  >
          <Switch>
            <Route exact path="/greenPower" component={App} />
            <Route path="/solarforecast" component={SolarForecast} />
            <Route path="/monitorsolar" component={MonitorSolar} />
            <Route path="/windforecast" component={WindForecast} />
            <Route path="/monitorwind" component={MonitorWind} />
            <Route path="/energydemand" component={EnergyDemand} />
            <Route path="/energyresources" component={EnergyResurces} />
            <Route path="/solardashboard/:id" component={SolarDashboard} />
            <Route path="/winddashboard/:id" component={WindDashboard} />
          </Switch>
         </Col>
        </Row>
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
