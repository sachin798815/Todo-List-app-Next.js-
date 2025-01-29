import Head from "next/head";
import CompletedTodoList from "../../Components/Body/CompletedTodoList";
import { MongoClient } from "mongodb";
function CompletedTodosPage(props) {
    
  return (
    <>
    <Head>
      <title>Completed todos</title>
      <meta
      name="description"
      content="see done todos here"
      >
      </meta>
    </Head>
    <CompletedTodoList TodoList={props.TodoList}/>
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
        status:todo.status
      }))
    },
    revalidate:10,
  };
}
export default CompletedTodosPage; 