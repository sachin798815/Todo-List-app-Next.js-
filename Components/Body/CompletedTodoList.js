import { Button, Container } from "react-bootstrap";
import styles from './CompletedTodoList.module.css';  // Importing CSS module

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
    <Container className={styles.container}>
      <ul className={styles.todoList}>
        {props.TodoList.map((todo) =>
          todo.status !== "pending" ? (
            <li key={todo.id} className={styles.todoListItem}>
              <div className={styles.todoContent}>
                <span className={styles.todoTitle}>{todo.title}</span>{todo.description}
                <div className={styles.todoButtons}>
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

export default CompletedTodoList;
