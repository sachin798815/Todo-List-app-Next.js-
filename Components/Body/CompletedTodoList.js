import { Button, Container } from "react-bootstrap";

const CompletedTodoList = () => {
  
  const deleteButtonHandler=(todo)=>{
    console.log(todo);
  }

  return (
   
    <Container className="border border-warning shadow p-3 mb-5 bg-white rounded">
      <ul>
        {DummyTodos.map((todo) =>
          todo.status === "pending" ? (
            <li key={todo.id}>
              {todo.title} - {todo.description}
              <Button onClick={deleteButtonHandler}>Delete</Button>
            </li>
          ) : null
        )}
      </ul>
    </Container>
  );
};
export default CompletedTodoList;
