import { Button, Container } from "react-bootstrap";
import styles from './CompletedTodoList.module.css';
import { useState } from "react";

const CompletedTodoList = (props) => {
    const [todosArray, setTodosArray] = useState(props.TodoList);

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
        setTodosArray(todosArray.filter(todos => todos.id !== todo.id));
    };

    return (
        <Container className={styles.container}>
            <ul className={styles.todoList}>
                {todosArray.map((todo) =>
                    todo.status !== "pending" ? (
                        <li key={todo.id} className={styles.todoListItem}>
                            <div className={styles.todoContent}>
                                <span className={styles.todoTitle}>{todo.title}</span>
                                {todo.description}
                            </div>
                            <div className={styles.todoButtons}>
                                <Button
                                    className={styles.deleteButton}
                                    onClick={() => deleteButtonHandler(todo)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </li>
                    ) : null
                )}
            </ul>
        </Container>
    );
};

export default CompletedTodoList;
