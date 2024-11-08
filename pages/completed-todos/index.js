import Head from "next/head";
import CompletedTodoList from "../../Components/Body/CompletedTodoList";
function CompletedTodosPage() {
    
  return (
    <>
    <Head>
      <title>Add a meetup</title>
      <meta
      name="description"
      content="Add meetup info here"
      >
      </meta>
    </Head>
    <CompletedTodoList/>
    </>
  );
}
export default CompletedTodosPage; 