import { Container } from "react-bootstrap";
import Head from "next/head";
import { MongoClient } from "mongodb";
import PendingTodoList from "../Components/Body/PendingTodoList";
import TodoForm from "../Components/Body/TodoForm";


function TodoHomePage() {

  async function addTodoHandler(enteredTodoData){
    const response = await fetch("/api/new-todo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify(enteredTodoData),
          }
    )
    const data = await response.json();
    console.log(data);
  }

  return (<>
  <Head>
      <title>Todos</title>
      <meta
      name="description"
      content="Easy todo management"
      >
      </meta>
    </Head>
    <Container className="border border-warning shadow p-3 mb-5 bg-white rounded">
      <PendingTodoList/>
      <TodoForm onAddTodo={addTodoHandler}/>
    </Container>
  </>
  );
}
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://test:test@cluster0.qnlqt.mongodb.net/Todolist?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollection = db.collection("");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map(data=>({
        id: data._id.toString(),
      }))
    },
    revalidate: 10,
  };
}
export default TodoHomePage;
