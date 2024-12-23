import Head from "next/head";
import CompletedTodoList from "../../Components/Body/CompletedTodoList";
function CompletedTodosPage() {
    
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
    <CompletedTodoList/>
    </>
  );
}
export default CompletedTodosPage; 