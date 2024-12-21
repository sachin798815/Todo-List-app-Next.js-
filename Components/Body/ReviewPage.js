import { useRef } from "react";
import { Button, Form, Container } from "react-bootstrap";

const ReviewPage = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();

  const addReviewHandler = (e) => {
    e.preventDefault();

    const reviewTitle = titleRef.current.value.trim();
    const reviewDescription = descriptionRef.current.value.trim();

    if (!reviewTitle || !reviewDescription) {
      alert("Please fill out both fields before submitting!");
      return;
    }

    console.log(
      `Title: ${reviewTitle}, Description: ${reviewDescription}`
    );

    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <Container className="border border-primary shadow p-4 my-4 bg-light rounded">
      <h1 className="mb-3">Reviews</h1>
      <p className="text-muted">Please write your reviews below:</p>
      <Form onSubmit={addReviewHandler}>
        <Form.Group className="mb-3" controlId="formReviewTitle">
          <Form.Label>Review Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the title of your review"
            ref={titleRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formReviewDescription">
          <Form.Label>Review Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter a detailed description"
            ref={descriptionRef}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit Review
        </Button>
      </Form>
    </Container>
  );
};

export default ReviewPage;
