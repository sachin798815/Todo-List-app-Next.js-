import { Container } from "react-bootstrap";
import TodoHomePage from '../Components/Body/TodoMainPage';

function TodoHomePage() {
  return (
    <Container className="border border-warning shadow p-3 mb-5 bg-white rounded">
      <h1>The TodoHomePage</h1>
      <TodoMainPage/>
    </Container>
  );
}
export default TodoHomePage;
