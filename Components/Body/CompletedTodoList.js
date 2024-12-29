import { Button, Container } from "react-bootstrap";

const CompletedTodoList = (props) => {
  
  const deleteButtonHandler = async (todo) => {
    try {
      const response = await fetch("/api/delete-todo", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: todo.id }),
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  return (
   
    <Container className="border border-warning shadow p-3 mb-5 bg-white rounded">
      <ul>
        {props.TodoList.map((todo) =>
          todo.status !== "pending" ? (
            <li key={todo.id}>
              {todo.title} - {todo.description}
              <Button onClick={() => deleteButtonHandler(todo)}>Delete</Button>
            </li>
          ) : null
        )}
      </ul>
    </Container>
  );
};
export default CompletedTodoList;
