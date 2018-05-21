
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Container } from "react-grid-system";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../assets/company.css";
import { companies } from '../companies';


class CompanyView extends Component {
    scroll() {
        document.getElementById("scroll").scrollIntoView({ behavior: "smooth" });
    }
    render() {

        let companyName = this.props.match.params.companyName[0].toUpperCase() + this.props.match.params.companyName.substring(1);
        let index = companies.findIndex(company => company["name"] === companyName);
        let company = companies[index];

        return (
            <div>
                {index === -1 ?
                    <div className="text-center mt-5">
                        <h1>No Data Available for {companyName}</h1>
                        <a href="/">Return to Home Page</a>
                    </div>
                    :
                    <div>
                        <section
                            className="cmp-bn mid"
                            style={{
                                backgroundImage: `url(${company.backgroundImage}), linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
                                backgroundBlendMode: 'overlay'

                            }}
                        >
                            <h1>{companyName}</h1>
                            <div className="arrow bounce" onClick={this.scroll}>
                                <i className="fas fa-angle-double-down" />
                            </div>
                        </section>

                        <section className="cmp-context" id="scroll">
                            <h1>Company Statistics and Facts</h1>
                            <Container>
                                <Grid container spacing={16}>
                                    {
                                        company.context.map((item, index) => {
                                            return (

                                                <Grid item xs={12} sm={6} md={4} key={index}>
                                                    <Paper elevation={3} style={{ marginBottom: "1pc" }}>
                                                        <CardContent>
                                                            <Typography
                                                                gutterBottom
                                                                variant="headline"
                                                                component="h3"
                                                            >
                                                                {item.title}
                                                            </Typography>
                                                            <Typography component="p">{item.text}</Typography>
                                                        </CardContent>
                                                    </Paper>
                                                </Grid>
                                            );
                                        })}
                                </Grid>
                            </Container>
                            <br />
                            <br />
                        </section>

                        <section className="cmp-diversity">
                            <Container>
                                <h1>Diversity Trends at {companyName}</h1>
                                {
                                    company.trends.map((text, index) => {
                                        return (
                                            <p key={index}>{text}</p>
                                        );
                                    })
                                }

                            </Container>
                        </section>

                        <section className="cmp-benefits">
                            <h1>Policies</h1>
                            <br />
                            <br />
                            <Container>
                                <Grid container spacing={16}>
                                    {
                                        company.policies.map((policy, index) => {
                                            return (
                                                <Grid xs={12} sm={6} md={4} item key={index}>
                                                    <Paper elevation={2} className="cd-pd">
                                                        <i className={policy.icon} />
                                                        <br />
                                                        <h3>{policy.name}</h3>
                                                        <p>
                                                            {policy.text}
                                                            <br />
                                                            <br />
                                                        </p>
                                                    </Paper>
                                                </Grid>
                                            );
                                        })
                                    }
                                </Grid>
                            </Container>
                        </section>

                        <section className="cmp-graph">
                            <h2>Diversity Trends</h2>
                            <Container>
                                {
                                    company.infographs 
                                    ?
                                    <div>
                                    <img src={company.infographs[0]} alt="" />
                                    <hr/>
                                    <img src={company.infographs[1]} alt="" />
                                    <hr/>
                                    <img src={company.infographs[2]} alt="" />
                                    </div>
                                    :
                                    <img src={company.infograph} alt="" />
                                }
                               
                            </Container>
                        </section>

                        <section className="cmp-con">
                            <Container>
                                <h2>Conclusion</h2>
                                <p>{company.conclusion}</p>
                            </Container>
                        </section>
                    </div>
                }
            </div>
        );
    }
}

export default CompanyView;
