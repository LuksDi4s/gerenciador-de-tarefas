import { useEffect, useState } from "react";
import AddTasks from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  // informaçoes fica salvo no localstorage

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //se quiser pode chamar uma API para puxar tarefas
  //useEffect(() => {
  //const fetchTasks = async () => {
  //chamar API
  // const response = await fetch(
  //   "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //    {
  //      method: "GET",
  //     }
  // );
  // PEGAR DADOS QUE ELA RETORNA
  //  const data = await response.json();

  // ARMAZENAR E PERSISTIR ESSES DADOS NO STATE
  //  setTasks(data);
  //};

  //fetchTasks();
  //}, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // preciso atualziar essa tarefa
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      // não preciso atualizar essa tarefa
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3x1 text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
