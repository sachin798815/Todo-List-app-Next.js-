import { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";

const TodoForm = () => {
    const titleRef=useRef();
    const descriptionRef=useRef();
    const dateRef=useRef();

    const addTodoHandler=(e)=>{
        e.preventDefault();
        const title=titleRef.current.value;
        const description=descriptionRef.current.value;
        const date=dateRef.current.value;
        
        const todoData = {
          title: enteredTitle,
          description: enteredDescription,
          date: enteredDate
        };
    
        props.onAddTodo(todoData);

    }
  return (
    <>
      <Container className="border border-warning shadow p-3 mb-5 bg-white rounded">
        <Form>
          <Form.Label>Add todo here</Form.Label>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Todo Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" ref={titleRef}/>
            <Form.Label>Todo Description</Form.Label>
            <Form.Control type="text" placeholder="Enter description" ref={descriptionRef}/>
            <Form.Label>Todo Date</Form.Label>
            <Form.Control type="date" placeholder="Enter date" ref={dateRef}/>
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
