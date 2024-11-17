import { Button, Container } from "react-bootstrap";

const CompletedTodoList = () => {
  const DummyTodos = [
    {
      id: 1,
      title: "Dummy Todo 1",
      description: "This is a dummy todo 1",
      status: "pending",
    },
    {
      id: 2,
      title: "Dummy Todo 2",
      description: "This is a dummy todo 2",
      status: "pending",
    },
    {
      id: 3,
      title: "Dummy Todo 3",
      description: "This is a dummy todo 3",
      status: "pending",
    },
  ];
  const deleteButtonHandler=(todo)=>{
    console.log(todo);
  }

  const editButtonHandler=(todo)=>{
    console.log(todo);
  }
  return (
   
    <Container className="border border-warning shadow p-3 mb-5 bg-white rounded">
      <ul>
        {DummyTodos.map((todo) =>
          todo.status === "pending" ? (
            <li key={todo.id}>
              {todo.title} - {todo.description}
              <Button onClick={editButtonHandler}>Edit</Button>
              <Button onClick={deleteButtonHandler}>Delete</Button>
            </li>
          ) : null
        )}
      </ul>
    </Container>
  );
};
export default CompletedTodoList;
