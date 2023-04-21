import './App.css';
import { useState } from 'react';
import Overview from './components/Overview';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [tasks, setTasks] = useState([]);
  const handleSubmit = (task) => {
    setTasks((prevTasks) => {
      return [...prevTasks, {id: uuidv4(), name: task}];
    });
  }

  const handleDelete = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  }

const handleEditTask = (id, newTask) => {
  setTasks((prevTasks) => {
    return prevTasks.map((task) => {
      if (task.id === id) {
        task.name = newTask;
      }
      return task;
    });
  });
}
  return (
    <div className="App">
      <form className="task-form" onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e.target.elements.task.value);
            e.target.reset();
          }}>
        <label htmlFor="task">New Task</label>
        <div>
          <input type="text" id="task" required/>
          <button type="submit" >Add</button>
        </div>
      </form>
      <Overview 
      tasks={tasks}
      onDelete={handleDelete}
      onEdit={handleEditTask}
      />
    </div>
  );
}

export default App;
