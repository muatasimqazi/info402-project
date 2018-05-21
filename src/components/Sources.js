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
                        <Row className="mt-5 mb-4">
                            <Col sm={12}>
                                <Card>
                                    <h6>US Benefits at Microsoft</h6>
                                    <p>(2017). U.S. benefits at Microsoft. Microsoft. Retrieved from https://careers.microsoft.com/us/en/usbenefits</p>

                                    <h6>Diversity and inclusion at Uber</h6>
                                    <p>(2018). Diversity and inclusion. Uber. Retrieved from https://www.uber.com/about/diversity/</p>

                                    <h6>Microsoft Global Diversity and Inclusion: Inside Microsoft</h6>
                                    <p>(2018). Inside Microsoft. Microsoft Global Diversity and Inclusion. Retrieved from https://www.microsoft.com/en-us/diversity/inside-microsoft/default.aspx#epgDivFocusArea</p>

                                    <h6>Microsoft Global Diversity and Inclusion: Parents</h6>
                                    <p>(2018). Parents at Microsoft. Microsoft Global Diversity and Inclusion. Retrieved from https://www.microsoft.com/en-us/diversity/inside-microsoft/parents-at-microsoft/default.aspx</p>

                                    <h6>Women at Microsoft</h6>
                                    <p>(2018). Women at Microsoft. Microsoft Global Diversity and Inclusion. Retrieved from https://www.microsoft.com/en-us/diversity/inside-microsoft/women-at-microsoft/default.aspx</p>

                                    <h6>Amazon Circles</h6>
                                    <p>(n.d.). Amazon circles. Amazon. Retrieved from https://amazon-mentoring.chronus.com/p/p6/about</p>

                                    <h6>diversity of Amazon</h6>
                                    <p>(n.d.). Diversity at Amazon. Amazon. Retrieved from https://www.amazon.com/b?ie=UTF8&node=10080092011</p>

                                    <h6>MentorNet: Mission</h6>
                                    <p>(n.d.). Our mission. MentorNet. Retrieved from http://mentornet.org/organization/index.html</p>

                                    <h6>Google Workplace Diversity</h6>
                                    <p>(n.d.). Our workplace. Google Diversity. Retrieved from https://diversity.google/commitments/</p>

                                    <h6>Google Diversity: Talent engagement </h6>
                                    <p>(n.d.). Talent engagement. Google Diversity. Retrieved from https://diversity.google/commitments/talent-engagement/</p>

                                    <h6>Amazon Jobs: US benefits and stock</h6>
                                    <p>(n.d.). US benefits and stock. Amazon Jobs. Retrieved from https://www.amazon.jobs/en/benefits</p>

                                    <h6>Why so few?: AAUW</h6>
                                    <p>AAUW (2010). Why so few?: women in science, technology, engineering, and mathematics. Washington, DC: Hill, Catherine, Corbett, Christianne, & St. Rose, Andresse.</p>

                                    <h6>Recoding Gender</h6>
                                    <p>Abbate, J. (2012). Recoding gender: women’s changing participation in computing. Cambridge, Massachusetts: MIT Press.</p>

                                    <h6>Best Parental Leave Policies</h6>
                                    <p>Adamczyk, A. (2015, Nov 4). These are the companies with the best parental leave policies. Money. Retrieved from http://time.com/money/4098469/paid-parental-leave-google-amazon-apple-facebook/</p>

                                    <h6>Microsoft Ceilings and failure at the firm</h6>
                                    <p>Day, M. (2018, Apr 15). Microsoft ceilings: why the tech pioneer has failed to hire and keep women in its workforce. The Seattle Times, pp. A1, A14, A15.</p>

                                    <h6>Facebook Diversity Update</h6>
                                    <p>Facebook Newsroom (2017, Aug 2). Facebook diversity update: building a more diverse, inclusive workforce. Retrieved from https://fbnewsroomus.files.wordpress.com/2017/08/fb_diversity_2017_final.pdf</p>

                                    <h6>Wall Street Journal: Computer programming is a trade</h6>
                                    <p>Mims, C. (2014, Aug 3). Computer programming is a trade; let’s act like it. Wall Street Journal. Retrieved from https://www.wsj.com/articles/computer-programming-is-a-trade-lets-act-like-it-1407109947?mod=e2fb</p>

                                    <h6>Women in Technology: NCWIT</h6>
                                    <p>National Center for Women & Information Technology (2016). Women in tech: the facts. Ashcraft, Catherine, McLain, Brad, & Eger,</p>

                                    <h6>NCWIT Resources</h6>
                                    <p>Elizabeth. Retrieved from https://www.ncwit.org/sites/default/files/resources/ncwit_women-in-it_2016-full-report_final-web06012016.pdf
</p>

                                    <h6>Paid Leave Policies</h6>
                                    <p>National Partnership for Women & Families (2018, Apr.). Leading on leave: companies with new or expanded paid leave policies (2015-2018). Washington, DC. Retrieved from http://www.nationalpartnership.org/research-library/work-family/paid-leave/new-and-expanded-employer-paid-family-leave-policies.pdf
</p>

                                    <h6>Potential for progress</h6>
                                    <p>Nelson, O. (2017, May). Potential for progress: implicit bias training’s journey to making change. Retrieved from University of Pennsylvania ScholarlyCommons. (https://repository.upenn.edu/cgi/viewcontent.cgi?referer=https://www.google.com/&httpsredir=1&article=1030&context=joseph_wharton_scholars)</p>

                                    <h6>Algorithms of Oppression</h6>
                                    <p>
                                        Noble, S. U. (2018). Algorithms of Oppression: How Search Engines Reinforce Racism. New York, NY: New York University Press.</p>

                                    <h6>Black and Latina women being mistaken at workplace</h6>
                                    <p>
                                        Schulte, B. (2015, Feb 6). Black and Latina women scientists sometimes mistaken for janitors. The Washington Post. Retrieved from https://www.washingtonpost.com/news/local/wp/2015/02/06/black-and-latina-women-scientists-sometimes-mistaken-for-janitors/?utm_term=.1fb723af831e</p>

                                    <h6>Google benefits or vice versa?</h6>
                                    <p>Stabile, S. J. (2008). Google benefits or Google’s benefit? Journal of Business & Technology Law, 3. Retrieved from http://digitalcommons.law.umaryland.edu/cgi/viewcontent.cgi?article=1093&context=jbtl</p>

                                    <h6>Facebook diversity update: Building a more incl workforce</h6>
                                    <p>
                                        Williams, M. (2017, Aug 2). Facebook diversity update: building a more diverse, inclusive workforce. Facebook Newsroom. Retrieved from https://newsroom.fb.com/news/2017/08/facebook-diversity-update-building-a-more-diverse-inclusive-workforce/</p>
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
