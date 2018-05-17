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
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio.
                  </h1>
                </Grow>
                <Grow in={this.state["2"]}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam. Sed nisi.
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
          <Container>
            <Row>
              <Col sm={12}>
                <h1>The Problem</h1>
                <Row>
                  <Col sm={8} offset={{ sm: 2 }}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio. Praesent libero. Sed cursus ante dapibus
                      diam. Sed nisi. Nulla quis sem at nibh elementum
                      imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
                      tellus sed augue semper porta. Mauris massa. Vestibulum
                      lacinia arcu eget nulla. Class aptent taciti sociosqu ad
                      litora torquent per conubia nostra, per inceptos
                      himenaeos.
                      <br />
                      <br />
                      Curabitur sodales ligula in libero. Sed dignissim lacinia
                      nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In
                      scelerisque sem at dolor. Maecenas mattis. Sed convallis
                      tristique sem. Proin ut ligula vel nunc egestas porttitor.
                      Morbi lectus risus, iaculis vel, suscipit quis, luctu.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="wii-hm">
          <Container>
            <Row>
              <Col sm={12}>
                <h1>Why it Matters</h1>
                <Row>
                  <Col sm={4}>
                    <div className="wii-item">
                      <i className="fal fa-balance-scale" />
                      <h2>Lorem ipsum dolor sit amet</h2>
                      <p>
                        Curabitur sodales ligula in libero. Sed dignissim
                        lacinia nunc. Curabitur tortor. Pellentesque nibh.
                        Aenean quam. In scelerisque sem at dolor.
                      </p>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div className="wii-item">
                      <i className="fal fa-balance-scale" />
                      <h2>Lorem ipsum dolor sit amet</h2>
                      <p>
                        Curabitur sodales ligula in libero. Sed dignissim
                        lacinia nunc. Curabitur tortor. Pellentesque nibh.
                        Aenean quam. In scelerisque sem at dolor.
                      </p>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div className="wii-item">
                      <i className="fal fa-balance-scale" />
                      <h2>Lorem ipsum dolor sit amet</h2>
                      <p>
                        Curabitur sodales ligula in libero. Sed dignissim
                        lacinia nunc. Curabitur tortor. Pellentesque nibh.
                        Aenean quam. In scelerisque sem at dolor.
                      </p>
                    </div>
                  </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <Row>
                  <Col sm={4}>
                    <div className="wii-item">
                      <i className="fal fa-balance-scale" />
                      <h2>Lorem ipsum dolor sit amet</h2>
                      <p>
                        Curabitur sodales ligula in libero. Sed dignissim
                        lacinia nunc. Curabitur tortor. Pellentesque nibh.
                        Aenean quam. In scelerisque sem at dolor.
                      </p>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div className="wii-item">
                      <i className="fal fa-balance-scale" />
                      <h2>Lorem ipsum dolor sit amet</h2>
                      <p>
                        Curabitur sodales ligula in libero. Sed dignissim
                        lacinia nunc. Curabitur tortor. Pellentesque nibh.
                        Aenean quam. In scelerisque sem at dolor.
                      </p>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div className="wii-item">
                      <i className="fal fa-balance-scale" />
                      <h2>Lorem ipsum dolor sit amet</h2>
                      <p>
                        Curabitur sodales ligula in libero. Sed dignissim
                        lacinia nunc. Curabitur tortor. Pellentesque nibh.
                        Aenean quam. In scelerisque sem at dolor.
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
                      <h2>Lorem ipsum dolor sit amet</h2>
                      <p>
                        Curabitur sodales ligula in libero. Sed dignissim
                        lacinia nunc. Curabitur tortor. Pellentesque nibh.
                        Aenean quam. In scelerisque sem at dolor.
                      </p>
                    </div>
                    <div className="carousel-item">
                      <h2>Lorem ipsum dolor sit amet</h2>
                      <p>
                        Curabitur sodales ligula in libero. Sed dignissim
                        lacinia nunc. Curabitur tortor. Pellentesque nibh.
                        Aenean quam. In scelerisque sem at dolor.
                      </p>
                    </div>
                    <div className="carousel-item">
                      <h2>Lorem ipsum dolor sit amet</h2>
                      <p>
                        Curabitur sodales ligula in libero. Sed dignissim
                        lacinia nunc. Curabitur tortor. Pellentesque nibh.
                        Aenean quam. In scelerisque sem at dolor.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="companies-hm">
          <h1 style={{textAlign:"center"}}>Companies</h1>
          <Container style={{ marginTop: 20 }}>
            <h1 />
            <Row>
              {companies.map(company => (
                <Col sm={4} key={company.name}>
                  <MediaCard
                    title={company.name}
                    description={company.description}
                    image={company.image}
                    link={company.link}
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
