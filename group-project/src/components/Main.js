//@ts-check
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import MediaCard from './MediaCard';
import { companies } from '../companies';

class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Container style={{ marginTop: 20 }}>
                <Row>
                    {
                        companies.map(company =>
                            <Col sm={4} key={company.name}>
                                <MediaCard
                                    title={company.name}
                                    description={company.description}
                                    image={company.image}
                                    link={company.link}
                                />
                            </Col>
                        )
                    }
                </Row>
            </Container>
        );
    }
}

export default MainView;
