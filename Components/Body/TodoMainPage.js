import { Container } from "react-bootstrap";
import TodoForm from "./TodoForm";
import PendingTodoList from "./PendingTodoList";

const TodoMainPage = () => {
  return (
    <Container>
      {/* todoform and list will be shown here */}
      <TodoForm />
      <PendingTodoList/>
    </Container>
  );
};

export default TodoMainPage;
