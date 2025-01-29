import { Container } from "react-bootstrap";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <Container className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <p className={styles.description}>
        Have questions or need assistance? Feel free to reach out to us using the contact details below.
      </p>
      <div className={styles.contactInfo}>
        <p><strong>Phone: </strong> +91 9996667771</p>
        <p><strong>Email: </strong> contact@todolistcorp.com</p>
        <p><strong>Address: </strong> Building No. 5, Delhi, India</p>
      </div>
    </Container>
  );
};

export default ContactPage;
