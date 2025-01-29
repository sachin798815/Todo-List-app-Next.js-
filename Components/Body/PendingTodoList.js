import { Button, Container } from "react-bootstrap";
import styles from './PendingTodoList.module.css';

const PendingTodoList = (props) => {
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
      window.location.reload();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const doneButtonHandler = async (todo) => {
    try {
      const response = await fetch("/api/update-todo", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: todo.id }),
      });
      const data = await response.json();
      console.log(data.message);
      window.location.reload();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <Container className={styles.container}>
      <ul className={styles.todoList}>
        {props.TodoList.map((todo) =>
          todo.status === "pending" ? (
            <li key={todo.id}>
              <div className={styles.todoContent}>
                <div className={styles.todoText}>
                  <span className={styles.todoTitle}>{todo.title}</span> - {todo.description}
                </div>
                <div className={styles.todoButtons}>
                  <Button
                    className={styles.doneButton}
                    onClick={() => doneButtonHandler(todo)}
                  >
                    Done
                  </Button>
                  <Button
                    className={styles.deleteButton}
                    onClick={() => deleteButtonHandler(todo)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </li>
          ) : null
        )}
      </ul>
    </Container>
  );
};

export default PendingTodoList;
