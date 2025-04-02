import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function taskDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="max-w-screen min-h-screen p-6 flex bg-gray-700 text-white justify-center items-center">
      <div className="w-[500px]">
        <h1 className="text-xl font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <div className="App">
          <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        </div>
        {tasks.length > 0 && (
          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            taskDelete={taskDelete}
          />
        )}
      </div>
    </div>
  );
}

export default App;
