"use client";

import { trpc } from "../_trpc/client";

// import { trpc } from "../_trpc/trpc";


export default function TodoList() {
  const { data, isLoading } = trpc.getTodos.useQuery();

  return (
    <div>
      <h1>Todo List</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {
            //   JSON.stringify(data?.todos)
            data?.todos.map((todo, index) => (
              <li key={todo.id}>
                {index + 1}. {todo.text}
              </li>
            ))
          }
        </ul>
      )}
    </div>
  );
}
