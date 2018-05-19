import React, { Component } from 'react';
import { Container, Row, Col } from "react-grid-system";
import Card from './Card';
import { Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import muatasimqazi from '../assets/images/muatasimqazi.jpg';

const teamMembers = [
    {
        name: "Erica Eaton",
        photo: '',
        contributions: ['a, b, c'],
        documents: ['a, b, c']

    },
    {
        name: "Luca Vaccarini",
        photo: '',
        contributions: ['a, b, c'],
        documents: ['a, b, c']

    },
    {
        name: "Muatasim Qazi",
        photo: muatasimqazi,
        contributions: ['a, b, c'],
        documents: ['a, b, c']
    },
    {
        name: "Somesh Harshavardhan",
        photo: '',
        contributions: ['a, b, c'],
        documents: ['a, b, c']
    }

]

class TeamView extends Component {
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
                                        Team Members
                                    </Typography>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            {
                                teamMembers.map(member => {
                                    return (
                                        <Col className="mb-4" sm={6} key={member.name}>
                                            <Card>
                                                <Row>
                                                    <Col md={3} sm={4}>
                                                        {
                                                            member.photo
                                                                ?
                                                                <Avatar
                                                                    alt={member.name}
                                                                    src={member.photo}
                                                                    style={{ 'width': 100, 'height': 100 }}
                                                                />
                                                                :
                                                                <Avatar style={{ 'width': 100, 'height': 100, fontSize: 60 }}>{member.name[0]}</Avatar>
                                                        }

                                                    </Col>
                                                    <Col md={9} sm={6}>
                                                        <Typography variant="headline" component="h3">
                                                            {member.name}
                                                        </Typography>
                                                        <hr />
                                                        <Typography variant="subheading" component="h3">
                                                            Contributions
                                                        </Typography>

                                                        {
                                                            member.contributions.map(cont => {
                                                                return (
                                                                    <li key={cont}>cont</li>
                                                                );
                                                            })
                                                        }


                                                        <Typography variant="subheading" component="h3">
                                                            Documents
                                                        </Typography>
                                                        {
                                                            member.documents.map(doc => {
                                                                return (
                                                                    <li key={doc}>doc</li>
                                                                );
                                                            })
                                                        }
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                    );
                                })
                            }

                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

export default TeamView;