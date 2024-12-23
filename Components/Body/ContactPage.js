import { Container, Form, Button } from "react-bootstrap";

const ContactPage = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <Container className="border border-primary shadow p-4 my-4 bg-light rounded">
      <h1 className="mb-3">Contact Us</h1>
      <p className="text-muted">
        Have questions or need assistance? Feel free to reach out to us using
        the form below.
      </p>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Write your message here"
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactPage;
