import React, { Component } from 'react';
import { Container, Row, Col } from "react-grid-system";
import Card from './Card';
import { Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import muatasimqazi from '../assets/images/muatasimqazi.jpg';

const teamMembers = [
    {
        name: "Erica Eaton",
        photo: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/29511286_889492704565576_1574037852361199471_n.jpg?_nc_cat=0&oh=0608260c11b8322e27674639c8faee29&oe=5B9805D5',
        contributions: ['a, b, c'],
        documents: ['a, b, c']

    },
    {
        name: "Luca Vaccarini",
        photo: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/27867926_10210568876528671_8026972088660661734_n.jpg?_nc_cat=0&oh=80de5e8c9888d5d58983d550995ca64a&oe=5B983B02',
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
        photo: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-1/25182039_1665307006822855_2087445070178243283_o.jpg?_nc_cat=0&oh=79d8f1b02636083af5085dc54b6fbfe3&oe=5B80F186',
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