import { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";

const TodoForm = (props) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  const addTodoHandler = (e) => {
    e.preventDefault();

    const title = titleRef.current.value.trim();
    const description = descriptionRef.current.value.trim();
    const date = dateRef.current.value;
   
    const todoData = {
      title,
      description,
      date,
      status:"pending"
    };

    props.onAddTodo(todoData);
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <Container className="border border-warning shadow p-3 mb-5 bg-white rounded">
      <Form onSubmit={addTodoHandler}>
        <Form.Label className="fw-bold mb-3">Add Todo</Form.Label>
        <Form.Group className="mb-3" controlId="formTodoTitle">
          <Form.Label>Todo Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" ref={titleRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTodoDescription">
          <Form.Label>Todo Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            ref={descriptionRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTodoDate">
          <Form.Label>Todo Date</Form.Label>
          <Form.Control type="date" ref={dateRef} />
        </Form.Group>
        <Button type="submit" variant="warning">
          ADD TODO
        </Button>
      </Form>
    </Container>
  );
};

export default TodoForm;
