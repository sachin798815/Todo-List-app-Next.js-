import { Form } from "react-bootstrap";

const ReviewPage=()=>{
    const addReviewHandler=()=>{
        e.preventDefault();
        const reviewTitle=titleRef.current.value;
        console.log("Review Added");
    }
    return(
        <>
        <h1>Reviews</h1>
        <p>Please write your reviews here</p>
        <Form>
        <Form.Label>Add todo here</Form.Label>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Review Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" ref={titleRef}/>
            <Form.Label>Review Description</Form.Label>
            <Form.Control type="text" placeholder="Enter detailed description" ref={descriptionRef}/>
          </Form.Group>
          <Button type="submit" variant="warning" onClick={addReviewHandler}>
            ADD
          </Button>
        </Form>
        </>
    )
}

export default ReviewPage;