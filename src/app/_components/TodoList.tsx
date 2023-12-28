"use client";

import useConversationStore from "@/store/useConversationStore";
import { trpc } from "../_trpc/client";
import { IConversation } from "@/interfaces";

// import { trpc } from "../_trpc/trpc";

export default function TodoList() {
  const {
    data: conversations,
    isLoading,
  }: { data: IConversation[] | undefined; isLoading: boolean } =
    trpc.getTodos.useQuery();

  return (
    <div className="my-4">
      <h1>Todo List</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ul>
            {
              //   JSON.stringify(data?.todos)
              conversations?.map((con, index) => (
                <li key={index}>{con.name}</li>
              ))
            }
          </ul>
          {conversations?.length == 0 && <div>No data</div>}
        </>
      )}
    </div>
  );
}
