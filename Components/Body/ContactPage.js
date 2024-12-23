import { Container, Form, Button } from "react-bootstrap";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <Container className={styles.container}>
      <h1 className={styles.header}>Contact Us</h1>
      <p className={styles.description}>
        Have questions or need assistance? Feel free to reach out to us using
        the form below.
      </p>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label className={styles["form-label"]}>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            required
            className={styles["form-control"]}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label className={styles["form-label"]}>Your Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            required
            className={styles["form-control"]}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label className={styles["form-label"]}>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Write your message here"
            required
            className={styles["form-control"]}
          />
        </Form.Group>
        <Button type="submit" className={styles["button-primary"]}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactPage;
