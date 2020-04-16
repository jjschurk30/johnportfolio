import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';


function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                       John Schurk
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={5}>
                    <SocialIcon url="https://github.com/jjschurk30"  />
                    <SocialIcon url="https://www.linkedin.com/in/john-schurk-89993271/"  />
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;