// import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Container } from "react-bootstrap"

const Header = () => {
    return (
        <Navbar className="header-page">
            <Container>

                <Navbar.Brand href="/">            <img 
          className="d-inline-block align-top"
           src={process.env.PUBLIC_URL + '/logo.png'} 
           alt="logo" /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <h1>Green Power</h1>
                        <h6>Helping Utilities Transition to Clean Energy</h6>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    )


}

export default Header