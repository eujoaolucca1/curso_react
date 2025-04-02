import { ChevronRightIcon, Trash } from "lucide-react";
import { Navigate, useNavigate } from "react-router";
function Tasks({ tasks, onTaskClick, taskDelete }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate("/tasks?" + query.toString());
  }
  return (
    <ul className="space-y-4 bg-slate-200 p-4 rounded-lg">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`w-full bg-slate-400 text-white p-3 rounded-lg cursor-pointer text-start ${
              task.completed ? "line-through" : ""
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 text-white p-2 rounded-lg cursor-pointer"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => taskDelete(task.id)}
            className="bg-slate-400 text-white p-2 rounded-lg cursor-pointer"
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
