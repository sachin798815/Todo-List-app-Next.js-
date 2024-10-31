import { Container } from "react-bootstrap";
import TodoHomePage from '../Components/Body/TodoMainPage';
import NavComponent from '../Components/Header/NavComponent';
import Head from "next/head";

function TodoHomePage() {
  return (<>
  <Head>
      <title>Meetups</title>
      <meta
      name="description"
      content="Best meetups in your city"
      >
      </meta>
    </Head>
    <Container className="border border-warning shadow p-3 mb-5 bg-white rounded">
      <NavComponent/>
      <h1>The TodoHomePage</h1>
      <TodoMainPage/>
    </Container>
  </>
  );
}
export default TodoHomePage;
