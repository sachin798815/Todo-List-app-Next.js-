import { Container } from "react-bootstrap";
import TodoForm from "./TodoForm";
import PendingTodoList from "./PendingTodoList";

const TodoMainPage = () => {
  return (
    <Container className="border border-warning shadow p-3 mb-5 bg-white rounded">
      {/* todoform and list will be shown here */}
      <TodoForm />
      <PendingTodoList/>
    </Container>
  );
};

export default TodoMainPage;
