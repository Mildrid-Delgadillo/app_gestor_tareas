import React, { useState } from "react";

function ScrumDashboard() {
  const [backlog, setBacklog] = useState([
    { id: 1, task: "Diseñar la interfaz de usuario", sprint: 1, status: "Pendiente" },
    { id: 2, task: "Desarrollar el módulo de pagos", sprint: 2, status: "Pendiente" },
    { id: 3, task: "Pruebas de funcionalidad", sprint: 4, status: "Pendiente" },
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newId = backlog.length + 1;
      setBacklog([...backlog, { id: newId, task: newTask, sprint: "Por asignar", status: "Pendiente" }]);
      setNewTask("");
    }
  };

  const updateStatus = (id, newStatus) => {
    setBacklog(
      backlog.map((task) => (task.id === id ? { ...task, status: newStatus } : task))
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 text-center">Scrum Dashboard</h1>

      <div className="mb-4 flex">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Agregar nueva tarea"
          className="border p-2 w-full"
        />
        <button onClick={addTask} className="ml-2 bg-blue-500 text-white p-2 rounded">
          Agregar
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {backlog.map((task) => (
          <div key={task.id} className="shadow-md p-4 border rounded">
            <h2 className="text-lg font-semibold">{task.task}</h2>
            <p><strong>Sprint:</strong> {task.sprint}</p>
            <p><strong>Status:</strong> {task.status}</p>
            <div className="mt-2">
              <button
                onClick={() => updateStatus(task.id, "En Progreso")}
                className="mr-2 bg-yellow-500 text-white p-2 rounded"
              >
                En Progreso
              </button>
              <button
                onClick={() => updateStatus(task.id, "Completado")}
                className="bg-green-500 text-white p-2 rounded"
              >
                Completado
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrumDashboard;

