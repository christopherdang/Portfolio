import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {

    return(
        <footer className='mt=5'>
            <Container>
                <Row>
                    <Col className="p-0" md={3} sm={12}>
                        Christopher Dang
                    </Col>
                </Row>
            </Container>
        </footer>
    );
 
}

export default Footer;