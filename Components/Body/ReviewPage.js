import { useRef } from "react";
import { Form } from "react-bootstrap";

const ReviewPage=()=>{
    const titleRef=useRef();
    const descriptionRef=useRef();

    const addReviewHandler=()=>{
        e.preventDefault();
        const reviewTitle=titleRef.current.value;
        const reviewDescription=descriptionRef.current.value;
        console.log("title is "+reviewTitle+"and description is "+reviewDescription);
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