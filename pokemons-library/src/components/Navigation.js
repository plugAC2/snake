import React from "react";
import {Link} from "react-router-dom";
import {Col, Container, Row, ThemeProvider} from "react-bootstrap";


function Navigation() {
    return (
        <Container fluid="md">
            <Row>
                    <nav>

                            <h1>App</h1>
                            <ul>
                                <Col>
                                    <li><Link to="">Home</Link></li>
                                </Col>
                                <Col>
                                    <li><Link to="contact">Contacts</Link></li>
                                </Col>
                            </ul>

                    </nav>
            </Row>

        </Container>
    )
}

export default Navigation;