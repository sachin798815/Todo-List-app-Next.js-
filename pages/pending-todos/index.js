import Head from "next/head";
import PendingTodoList from "../../Components/Body/PendingTodoList";
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
    <PendingTodoList/>
    </>
  );
}
export default PendingTodosPage; 