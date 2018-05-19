//@ts-check
import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import MediaCard from "./MediaCard";
import { companies } from "../companies";
import "../assets/main.css";
import Grow from "@material-ui/core/Grow";

class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      1: false,
      2: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    let x = 1,
      y = setInterval(() => {
        if (x > 2) {
          clearInterval(y);
        } else {
          this.setState(
            {
              [x]: true
            },
            () => {
              x++;
            }
          );
        }
      }, 400);
  }

  handleScroll = event => {
    let topofWindow = window.scrollY;
  };

  render() {
    return (
      <div>
        <section className="home-banner">
          <Container>
            <Row>
              <Col sm={7}>
                <Grow in={this.state["1"]}>
                  <h1>The Gender Divide in Tech Related Fields</h1>
                </Grow>
                <Grow in={this.state["2"]}>
                  <p>
                    Women represent less than 25% of employees in the tech field
                    due to several factors ranging from implicit biases, lack of
                    mentors, and family responsibilities. These issues have led
                    to what we call the gender divide.
                  </p>
                </Grow>
              </Col>
            </Row>
          </Container>
          {/* <div className="arrow bounce">
            <i className="fas fa-angle-double-down" />
          </div> */}
        </section>
        <section className="problem-hm mid">
          <span className="anchor" id="problem"></span>
          <Container>
            <Row>
              <Col sm={12}>
                <h1>The Problem</h1>
                <Row>
                  <Col sm={8} offset={{ sm: 2 }}>
                    <p>
                      Since the late 1900's there has been an ongoing issue with
                      diversity in the workplace, one specific issue being the
                      dominance of males in the tech industry. Roughly right
                      now, the tech field is made up of 75% men, and in more
                      senior positions there are even more men filling those
                      roles. To understand this context a little bit better We
                      have to look at why there is such a gender divide in the
                      work place.
                      <br />
                      <br />
                      Often times people mention the reason for the gender
                      divide is the culture of the company, the culture of the
                      field, and naturally how unappealing it is to join a field
                      dominated by males. However, this isn't necessarily true.
                      There are several reasons for this issue, stemming from
                      schools not providing adequate resources for women to go
                      into tech, gender biases in reviews, promotions, and
                      interviews, lack of mentors, etc.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="wii-hm">
          <span className="anchor" id="matters"></span>
          <Container>
            <Row>
              <Col sm={12}>
                <h1>Why it Matters</h1>
                <Row>
                  <Col sm={4}>
                    <div className="wii-item">
                      <i className="fal fa-balance-scale" />
                      <h2>Biases</h2>
                      <p>
                        Biases have developed towards women in the tech field,
                        resulting in biased reviews, interviews, and promotions.
                        Causing a lack of interest in the field.
                      </p>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div className="wii-item">
                      <i className="fal fa-money-bill-alt" />
                      <h2>Unfair Pay</h2>
                      <p>
                        There is a known wage gap to occur between males and
                        females in tech. Such a gap is unfair to pay differently
                        based on gender.
                      </p>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div className="wii-item">
                      <i className="fal fa-burn" />
                      <h2>High Turnover</h2>
                      <p>
                        Companies that show little to know flexibility in their
                        policies for different genders and scenarios often have
                        a high turnover rate.
                      </p>
                    </div>
                  </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <Row>
                  <Col sm={4} offset={{ sm: 2 }}>
                    <div className="wii-item">
                      <i className="fal fa-chart-line" />
                      <h2>Promotion Rates</h2>
                      <p>
                        Currently men are promoted at 30% higher rates than
                        women, showing the growing issue of gender inequality
                        when it comes to job reviews.
                      </p>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div className="wii-item">
                      <i className="fal fa-times-octagon" />
                      <h2>Hostile Environments</h2>
                      <p>
                        According to a study, 50% of women in STEM will leave
                        because of the work environment.
                        <br /> <br />
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="features-hm">
          <Container>
            <Row>
              <Col sm={8} offset={{ sm: 2 }}>
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className="active"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <h2>Companies Adjusting</h2>
                      <p>
                        This issue has grown the attention of all major
                        companies resulting in new policies such as more
                        maternity leave and better benefits for women.
                        <br /><br />
                      </p>
                    </div>
                    <div className="carousel-item">
                      <h2>Support Groups &amp; Networks</h2>
                      <p>
                        The issue of such little women in engineering has
                        created several women in engineering company groups and
                        networks, created a peer to peer mentoring and
                        networking system for a more inclusive environment.
                      </p>
                    </div>
                    <div className="carousel-item">
                      <h2>The Growing Issue</h2>
                      <p>
                        The growing issue puts pressure on companies to increase
                        their diversity efforts, thus creating more emphasis on
                        their activity in colleges, minority groups, etc.
                        <br /><br />
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="companies-hm">
          <span className="anchor" id="companies"></span>
          <h1 style={{ textAlign: "center" }}>Companies</h1>
          <Container style={{ marginTop: 20 }}>
            <h1 />
            <Row>
              {companies.map((company, index) => (
                <Col sm={4} key={index}>
                  <MediaCard
                    title={company.name}
                    description={company.description}
                    image={company.image}
                    link={`info402-project${company.link}`}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default MainView;
