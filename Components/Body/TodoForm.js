import { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";

const TodoForm = () => {
    const titleRef=useRef();
    const descriptionRef=useRef();
    const dateRef=useRef();
    
    const addTodoHandler=(e)=>{
        e.preventDefault();
        // const title

    }
  return (
    <>
      <Container className="border border-warning shadow p-3 mb-5 bg-white rounded">
        <Form>
          <Form.Label>Add todo here</Form.Label>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Todo Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" />
            <Form.Label>Todo Description</Form.Label>
            <Form.Control type="text" placeholder="Enter description" />
            <Form.Label>Todo Date</Form.Label>
            <Form.Control type="date" placeholder="Enter date" />
          </Form.Group>
          <Button type="submit" variant="warning" onClick={addTodoHandler}>
            ADD
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default TodoForm;
