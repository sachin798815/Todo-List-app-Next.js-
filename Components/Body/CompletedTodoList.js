import { Button, Container } from "react-bootstrap";

const CompletedTodoList = (props) => {
  
  const deleteButtonHandler=(todo)=>{
    fetch('',
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(todo),
          })
          console.log('deleted');
  }

  return (
   
    <Container className="border border-warning shadow p-3 mb-5 bg-white rounded">
      <ul>
        {props.TodoList.map((todo) =>
          todo.status !== "pending" ? (
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
