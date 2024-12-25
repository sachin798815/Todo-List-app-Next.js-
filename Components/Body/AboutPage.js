import { Container, Row, Col } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container className="border border-info shadow-lg p-5 my-5 bg-light rounded">
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 text-primary">About Us</h1>
          <p className="">
            Discover who we are and what drives us to excel every day. Our mission is to create impactful experiences for our users worldwide.
          </p>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col md={6} className="mb-4">
          <h2 className="text-secondary">Our Vision</h2>
          <p>
            Our vision is to lead the way in innovation and redefine industry standards. We strive to create value for our users by ensuring excellence in all we do.
          </p>
        </Col>
        <Col md={6} className="mb-4">
          <h2 className="text-secondary">Our Team</h2>
          <p>
            Our team is a group of dedicated professionals who bring creativity, expertise, and passion to the table. Together, we aim to achieve remarkable results.
          </p>
        </Col>
      </Row>

      <Row className="text-center mt-5">
        <Col>
          <h3 className="text-success">Join Us on Our Journey</h3>
          <p>
            Be a part of something bigger. Together, we can shape the future and make a lasting impact. Stay tuned for updates and new opportunities.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
