import TextList from "./_components/TextList";
import TodoList from "./_components/TodoList";

export default function Home() {
  // const hello = trpc.hello.useQuery({ text: 'client' });
  // if (!hello.data) {
  //   return <div>Loading...</div>;
  // }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
    
      <TodoList/>
      <TextList/>
    </main>
  )
}
