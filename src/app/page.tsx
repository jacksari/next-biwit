import TextList from "./_components/TextList";
import TodoList from "./_components/TodoList";
import { MenuHeader } from "./_components/ui/MenuHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
      <MenuHeader />

      <div className="flex-1 bg-gray- flex flex-col items-center justify-center">
        <TodoList />
        <TextList />
      </div>
    </main>
  );
}
