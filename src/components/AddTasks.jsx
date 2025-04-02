import { useState } from "react";
import Input from "./Input";
function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 bg-slate-200 p-4 rounded-lg mb-4 shadow flex flex-col gap-4">
      <Input
        type="text"
        placeholder="Digite um título para a tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite uma descrição para a tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="bg-slate-900 rounded-lg py-3 items-center font-bold cursor-pointer text-white"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Preencha todos os campos!");
            return;
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
