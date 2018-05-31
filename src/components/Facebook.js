import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Container, Row, Col } from "react-grid-system";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../assets/company.css";

const context = [
  {
    title: "Company Size",
    text: "25,000 employees"
  },
  {
    title: "Monthly Users",
    text: "2.2 billion users"
  },
  {
    title: "Most Recent Revenue",
    text: "15.9 billion USD"
  },
  {
    title: "Female Employees",
    text: "35%"
  },
  {
    title: "Male Employees",
    text: "65%"
  },
  {
    title: "Female Employee Increase",
    text: "2%"
  }
];

class Facebook extends Component {
  scroll() {
    document.getElementById("scroll").scrollIntoView({ behavior: "smooth" });
  }
  render() {
    return (
      <div>
        <section
          className="cmp-bn mid"
          style={{
            backgroundImage:
              "url(http://gianlucavaccarini.com/images/facebook3.jpg)"
          }}
        >
          <h1>Facebook</h1>
          <div className="arrow bounce" onClick={this.scroll}>
            <i className="fas fa-angle-double-down" />
          </div>
        </section>

        <section className="cmp-context" id="scroll">
          <h1>Company Statistics and Facts</h1>
          <Container>
            <Grid container spacing={16}>
              {context.map(x => {
                return (
                  <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} style={{ marginBottom: "3pc" }}>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="headline"
                          component="h3"
                        >
                          {x.title}
                        </Typography>
                        <Typography component="p">{x.text}</Typography>
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

        <section class="cmp-diversity">
          <Container>
            <h1>Diversity Trends at Facebook</h1>
            <br />
            <br />
            <p>
              At Facebook, just like most tech companies, diversity is low.
              There is a constant battle to recruit more diverse employees,
              especially women in a grossly male dominated field. Facebook has taken
              several steps to increase their diversity efforts, and the results
              are slowly paying off with a 2% increase in female tech
              workers at their company. They've opened "Facebook
              University" where they bring interns in and train them to become
              well established developers in order to recruit them for full
              time. Thye also attend different conferences such as Grace Hopper Conference
              in order to recruit more women into their company.
            </p>
            <br />
            <br />
            <p>
              Facebook also has many events and programs in order to recruit
              more women for their tech related roles and to encourage them to
              apply to Facebook. One of these events is called Women's
              Leadership Day which is an opportunity along the idea of "A time to share, connect, and
              inspire each other on a journey to 'lead with purpose'." They also
              have a leadership network like most companies for college students
              to help support women in Engineering and mentor them in getting a
              career in the tech related field.
            </p>
          </Container>
        </section>

        <section className="cmp-benefits">
          <h1>Policies</h1>
          <br />
          <br />
          <Container>
            <Grid container spacing={16}>
              <Grid xs={12} sm={6} md={4} item>
                <Paper elevation={2} className="cd-pd">
                  <i className="fas fa-snowflake" />
                  <br />
                  <h3>Egg Freezing</h3>
                  <p>
                    Facebook allows female employees to freeze their eggs to
                    have children at a later period in life if they opt in to.
                    <br />
                    <br />
                  </p>
                </Paper>
              </Grid>
              <Grid xs={12} sm={6} md={4} item>
                <Paper elevation={2} className="cd-pd">
                  <i className="fas fa-child" />
                  <br />
                  <h3>Maternity Leave</h3>
                  <p>
                    Facebook gives their employees over 4 months of paid
                    maternity leave and they are given the option have having 10
                    weeks more of unpaid maternity leave.
                  </p>
                </Paper>
              </Grid>
              <Grid xs={12} sm={6} md={4} item>
                <Paper elevation={2} className="cd-pd">
                  <i className="fas fa-money-bill-alt" />
                  <br />
                  <h3>Baby Cash</h3>
                  <p>
                    Facebook gives $4,000 in baby cash for new families to help
                    support them through having a child. They also offer
                    financial assistance for adoption fees.
                  </p>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </section>

        <section className="cmp-graph">
          <h2>Diversity Trends</h2>
          <Container>
            <img className="img-fluid" src="http://gianlucavaccarini.com/images/facebook-graph.png" />
          </Container>
        </section>

        <section className="cmp-con">
          <Container>
            <h2>Conclusion</h2>
            <p>
              Overall Facebook has been putting in an effort to increase the
              amount of women they employ and increase the balance between
              male and female engineers and in leadership. They have made efforts by
              reaching out to students, creating neetworking programs, and
              creating benefits to help encourage women to join their company.
              Overall, from the graph you can see an increase in the amount of
              women at the company over the years which means that Facebook as a
              company is slowly succeeding in diversifying their company.
            </p>
          </Container>
        </section>
      </div>
    );
  }
}

export default Facebook;
