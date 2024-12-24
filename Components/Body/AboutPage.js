import { Container, Row, Col } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container className="border border-info shadow p-4 my-4 bg-light rounded">
      <Row className="mb-4">
        <Col>
          <h1 className="text-primary mb-3">About Us</h1>
          <p className="text-muted">
            Welcome to our platform! We are committed to providing exceptional
            services and creating a seamless experience for our users. Our
            mission is to innovate and deliver solutions that make your life
            easier.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2 className="text-secondary">Our Vision</h2>
          <p>
            We aim to be a leader in our industry by continuously pushing the
            boundaries of innovation and ensuring customer satisfaction is at
            the heart of everything we do.
          </p>
        </Col>
        <Col md={6}>
          <h2 className="text-secondary">Our Team</h2>
          <p>
            Our team consists of passionate and skilled professionals dedicated
            to achieving excellence in every project. We believe in fostering a
            collaborative and supportive work environment.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
