"use client";
import { trpc } from "../_trpc/client";
import { useState } from "react";

export default function TextList() {
  const [conversation, setConversation] = useState("");
  const utils = trpc.useUtils();
  const { mutate: addConversation } = trpc.addData.useMutation({});

  const handleMutation = async () => {
    addConversation(
      { text: conversation },
      {
        onSuccess: (data) => {
          setConversation("");
          utils.getTodos.fetch();
        },
      }
    );
  };

  return (
    <div className="my-4 text-center">
      {/* {data?.message} */}
      <h1>Agregar conversacion</h1>
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          className="border-2 border-gray-500 h-10  outline-none px-2 rounded "
          onChange={(e) => {
            setConversation(e.target.value);
          }}
          value={conversation}
        />
        <button
          className="
        bg-blue-500 
        hover:bg-blue-700 
        text-white 
        font-bold 
        py-2 px-4 
        rounded
      "
          onClick={() => handleMutation()}
        >
          Add
        </button>
      </div>
      {/* {data?.message} */}
    </div>
  );
}
