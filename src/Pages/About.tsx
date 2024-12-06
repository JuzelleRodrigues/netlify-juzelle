import React from "react";
import { Card, Button, Row, Col, ListGroup } from "react-bootstrap";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-me-container">
      {/* Blog Header Section */}
      <div className="blog-header">
        <div className="image-container">
          {/* Background image for the header */}
          <img
            className="background-image"
            src="fastfashion.jpg"
            alt="Background"
          />
        </div>
        <div className="overlay" />
        <div className="content-container">
          {/* Title and Subtitle of the blog */}
          <div className="title">
            Insights about my personal and work life, and the in-betweens
          </div>
          <div className="subtitle">20 October 2024 - PERSONAL BLOG</div>
        </div>
      </div>

      {/* Main Content Section */}
      <Row className="justify-content-center">
        <Col lg={8} md={10}>
          {/* About Me Card */}
          <Card className="about-me-card">
            <Card.Body>
              <Card.Title className="text-center about-me-title">
                A Little About Me
              </Card.Title>
              <Card.Text className="about-me-description">
                {/* About Me Description */}
                I am currently pursuing a Master's in Interaction and Experience
                Design at the University of Limerick, building on my diverse
                background in the design industry, which includes experience in
                fashion, writing, graphics, and UI/UX. This program is a crucial
                stepping-stone for me to deepen my expertise in the expansive
                field of user-centered design. I am eager to learn, refine my
                craft, and continuously develop my skills while contributing to
                the Irish market. With my varied experience and strong attention
                to detail, I aim to leverage my unique skill set to create
                innovative, user-focused solutions that meet industry needs and
                drive meaningful impact.
              </Card.Text>
              {/* Button to connect with the person */}
              <Button variant="outline-primary" className="about-me-button">
                Download CV
              </Button>
            </Card.Body>
          </Card>

          {/* Work Experience Section */}
          <Row className="mt-4">
            {/* First Work Experience Card */}
            <Col md={6}>
              <Card className="work-experience-card">
                <Card.Body>
                  <Card.Title className="text-center">
                    Work Experience
                  </Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h5>UX/UI Designer at Infomatics</h5>
                      <span>Jan’24 - May’24</span>
                      <p>
                        Redesigned web pages for Mutual Fund portals, focusing
                        on usability and information architecture for a fintech
                        software company.
                      </p>
                      <p>
                        Created interactive elements for data visualization
                        charts to enhance user understanding and engagement with
                        complex data.
                      </p>
                      <p>
                        Designed banner graphics in alignment with creative copy
                        to ensure brand consistency and user-centric visual
                        communication.
                      </p>
                      <p>
                        Developed user flow for a Mutual Fund investment mobile
                        application from scratch.
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            {/* Second Work Experience Card */}
            <Col md={6}>
              <Card className="work-experience-card">
                <Card.Body>
                  <Card.Title className="text-center">
                    Work Experience
                  </Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h5>
                        Creative Designer at Advanced Integration Technologies
                      </h5>
                      <span>Apr’23 - Dec’23</span>
                      <p>
                        Employed design thinking principles to redesign website
                        content for a company specializing in advanced
                        integration solutions.
                      </p>
                      <p>
                        Conducted user research (e.g., competitor analysis, user
                        personas) to understand target audience needs and inform
                        content strategy.
                      </p>
                      <p>
                        Presented content recommendations, focusing on
                        information hierarchy and user journeys to improve user
                        experience.
                      </p>
                      <p>
                        Contributed to the development of the brand's visual
                        identity by creating cohesive design elements.
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            {/* Third Work Experience Card */}
            <Col md={6}>
              <Card className="work-experience-card">
                <Card.Body>
                  <Card.Title className="text-center">
                    Work Experience
                  </Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h5>Digital Writer at Elle India</h5>
                      <span>Sept’22 - Dec’22</span>
                      <p>
                        Content creation: Developed engaging and informative
                        blog posts, social media stories, and posts while
                        maintaining a consistent brand voice.
                      </p>
                      <p>
                        Content management: Regularly updated blog posts and
                        imagery on the website via WordPress, maintaining the
                        flow of fresh content.
                      </p>
                      <p>
                        Managed the official Instagram handle, posting and
                        updating stories for audience engagement.
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            {/* Education Section */}
            <Col md={6}>
              <Card className="education-card">
                <Card.Body>
                  <Card.Title className="text-center">Education</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h5>
                        Masters in Interaction & Experience Design |
                        Sept’24-Aug’25
                      </h5>
                      <span>University of Limerick</span>
                      <p>
                        Modules: Interactive Media Design, Foundations of
                        Interaction and Experience Design, Electives: Virtual
                        and Augmented Reality Design, Digital Modelling and
                        animation, Applied Interaction Design, 3D Modelling and
                        Digital Fabrication
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h5>EDIT Institute | Jan’23-May’23</h5>
                      <span>University of Limerick</span>
                      <p>
                        Diploma in User Experience, User Interface & Web Design
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h5>
                        Bachelor of Design (B.Des) in Fashion Design |
                        Jul’17-Jun’21
                      </h5>
                      <span>Karnavati University, UID, Gujarat</span>
                      <p>
                        Modules: Fashion Photography, Sketching, CAD Designs,
                        Pattern Making, Draping, Digital Media
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h5>Certifications</h5>
                      <ul>
                        <li>Google UX Design Professional Certificate</li>
                        <li>
                          Interaction Design Foundation – UX Design Fundamentals
                        </li>
                        <li>HTML5 & CSS Web Development Certification</li>
                      </ul>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default About;
