import React, { Component } from 'react';
import { Container, Row, Col } from "react-grid-system";
import Card from './Card';
import { Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import muatasimqazi from '../assets/images/muatasimqazi.jpg';

class SourceView extends Component {
    render() {
        return (
            <div>
                <br /><br />
                <section className="mt-5">
                    <Container>
                        <Row className="mt-5 mb-4 text-center">
                            <Col sm={12}>
                                <Card>
                                    <Typography variant="display1" component="h4">
                                        Sources
                                    </Typography>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-4 text-center">
                            <Col sm={12}>
                                <Card>
                                // add ph1 tag
                                
                                </Card>
                            </Col>
                        </Row>

                    </Container>
                </section>
            </div>
        );
    }
}

export default SourceView;
