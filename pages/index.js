import { Container } from "react-bootstrap";
import TodoHomePage from '../Components/Body/TodoMainPage';
import Head from "next/head";
import { MongoClient } from "mongodb";


function TodoHomePage() {
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
      <h1>The TodoHomePage</h1>
      <TodoMainPage/>
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
