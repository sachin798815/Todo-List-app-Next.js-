import Head from "next/head";
import CompletedTodoList from "../../Components/Body/CompletedTodoList";
function PendingTodosPage() {
    
  return (
    <>
    <Head>
      <title>Todos</title>
      <meta
      name="description"
      content="Add todo here"
      >
      </meta>
    </Head>
    <CompletedTodoList/>
    </>
  );
}
export default PendingTodosPage; 