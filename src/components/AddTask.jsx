import { useState } from "react";
import Input from "./Input";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={() => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={() => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          //verificar se o titulo e descrição estão preenchidas
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o titulo e a descrição da tarefa.");
          }
          onAddTaskSubmit(title, description);
          setDescription("");
          setTitle("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
