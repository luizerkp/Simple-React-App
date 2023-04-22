import { useState } from 'react';
import './Overview.css';
import TaskDiv from './TaskDiv';
import EditDiv from './EditDiv';

const Overview = ({ tasks, onDelete, onEdit }) => {
  const [currentTaskOnEditId, setCurrentTaskOnEditId] = useState(null);
  const [deleteBtnOnHoverId, setDeleteBtnOnHoverId] = useState(null);
  const [editTaskName, setEditTaskName] = useState('');

  const deleteBtnHovered = (taskId) => {
    setDeleteBtnOnHoverId(taskId);
  };

  const handleCurrentTaskOnEdit = (taskId, taskName) => {
    setCurrentTaskOnEditId(taskId);
    setEditTaskName(taskName);
  };

  const handleNewTaskSubmit = (taskId, newTask) => {
    setCurrentTaskOnEditId(null);
    onEdit(taskId, newTask);
  };

  return (
    <div className="Overview">
      <h2 className="tasks-header">Overview</h2>
      <p className="tasks-counter">There are {tasks.length} tasks in your list:</p>
      <ul className="tasks-list">
        {tasks.map((task, idx) => (
          <li className="task-item" key={task.id} datat-id={task.id}>
            <EditDiv
              task={task}
              currentTaskOnEditId={currentTaskOnEditId}
              editTaskName={editTaskName}
              setEditTaskName={setEditTaskName}
              handleNewTaskSubmit={handleNewTaskSubmit}
              setCurrentTaskOnEditId={setCurrentTaskOnEditId}
              handleCurrentTaskOnEdit={handleCurrentTaskOnEdit}
            />
            <TaskDiv
              task={task}
              idx={idx}
              deleteBtnOnHoverId={deleteBtnOnHoverId}
              deleteBtnHovered={deleteBtnHovered}
              onDelete={onDelete}
              handleCurrentTaskOnEdit = {handleCurrentTaskOnEdit} 
              currentTaskOnEditId={currentTaskOnEditId}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Overview;
