import { Container } from "react-bootstrap";
import Head from "next/head";
import PendingTodoList from "../Components/Body/PendingTodoList";
import TodoForm from "../Components/Body/TodoForm";
import { MongoClient } from "mongodb";


function TodoHomePage(props) {

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
      <PendingTodoList TodoList={props.TodoList}/>
      <TodoForm onAddTodo={addTodoHandler}/>
    </Container>
  </>
  );
}
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://test:test@cluster0.qnlqt.mongodb.net/TodoDB?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const TodosCollection = db.collection("TodoDBList");
  const TodoList = await TodosCollection.find().toArray();
  client.close();
  return {
    props: {
      TodoList: TodoList.map(todo=>({
        id: todo._id.toString(),
        title: todo.title,
        description: todo.description,
        date: todo.date,
        status:todo.status
      }))
    },
    revalidate:10,
  };
}
export default TodoHomePage;
