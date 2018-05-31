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
    text: "566,000 employees"
  },
  {
    title: "Web Visits",
    text: "2.4 billion"
  },
  {
    title: "Most Recent Revenue",
    text: "178 billion USD"
  },
  {
    title: "Female Employees",
    text: "37%"
  },
  {
    title: "Male Employees",
    text: "63%"
  },
  {
    title: "Female Employee Increase",
    text: "NA"
  }
];

class Amazon extends Component {
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
              "url(http://gianlucavaccarini.com/images/amazon.jpg)"
          }}
        >
          <h1>Amazon</h1>
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
            <h1>Diversity Trends at Amazon</h1>
            <br />
            <br />
            <p>
              Being one of the largest employers in the entire world, Amazon has
              over 500,000 employees. Of those employees, women make up roughly
              67% of that number, however there is an unknown number of women in
              tech related fields. As far as leadership goes for Amazon, women
              make up 18 of the 120 senior leaders at Amazon, one of the lowest
              numbers in the tech industry. This number has led to accusations
              of gender bias when it comes to leadership roles, promotions, and
              job reviews. So what is Amazon doing to handle this situation?
            </p>
            <br />
            <br />
            <p>
              Amazon has created a few groups as networks for women in
              technology. One is the Amazon Women in Engineering, where
              employees have networking, training, leadership, and business
              opportunities available to them. They also send people down to the
              Grace Hopper event to celebrate women in computing every year.
              Aamzon also has a group called Women At Amazon which is primarily
              focused on peer mentoring to help further ones careers. Amazon is trying to make stride to make their company a more
              inclusive and diverse company.
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
                  <h3>Fairness</h3>
                  <p>
                    Amazon gives all employees bias training to avoid gender
                    related biases in the interview process.
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
                    Amazon gives their employees 4 weeks of paid maternity leave
                    before the baby is due and then an additional 10 weeks after
                    the baby has been born.
                  </p>
                </Paper>
              </Grid>
              <Grid xs={12} sm={6} md={4} item>
                <Paper elevation={2} className="cd-pd">
                  <i className="fas fa-money-bill-alt" />
                  <br />
                  <h3>Adoption Fees</h3>
                  <p>
                    Amazon assists in paying for all adoption fees such as legal
                    fees, travel fees, and court fees.
                    <br />
                    <br />
                  </p>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </section>

        <section className="cmp-graph">
          <h2>Diversity Trends</h2>
          <Container>
            <img
              className="img-fluid"
              src="http://gianlucavaccarini.com/images/amazon-graph2.png"
              style={{ width: "70%" }}
            />
            <br />
            <br />
            <img
              className="img-fluid"
              src="http://gianlucavaccarini.com/images/amazon-graph.png"
              style={{ width: "70%" }}
            />
          </Container>
        </section>

        <section className="cmp-con">
          <Container>
            <h2>Conclusion</h2>
            <p>
              Overall, Amazon's numbers for women in their company are
              high in general, however they do lack women in their high end
              senior roles. For senior level management, women make up
              25% and for their executive directors, women make up an even
              smaller percentage. I think Amazon does a fair job diversifying
              their talent, however they need to focus on giving an equal
              opportunity to both genders when it comes to higher level jobs.
            </p>
          </Container>
        </section>
      </div>
    );
  }
}

export default Amazon;
