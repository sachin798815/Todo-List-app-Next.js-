import { Container } from "react-bootstrap";
import TodoForm from "./TodoForm";
import PendingTodoList from "./PendingTodoList";
import classes from './TodoMainPage.module.css';

const TodoMainPage = () => {
  return (
    <Container className={classes.container}>
      <div className={classes["section-spacing"]}>
        <TodoForm />
      </div>
      <PendingTodoList />
    </Container>
  );
};

export default TodoMainPage;
