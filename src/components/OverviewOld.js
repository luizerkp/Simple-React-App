import { useState } from 'react';
import './Overview.css';

// Old Overview component before refactoring to use TaskDiv and EditDiv components
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
            <div className={`edit-div ${currentTaskOnEditId === task.id ? '' : 'inactive'}`}>
              <input
                type="text"
                className="edit-task-input"
                value={editTaskName}
                onChange={(e) => setEditTaskName(e.target.value)}
              />
              <div className="actions-div">
                <span
                  className="material-icons re-submit-btn"
                  onClick={(e) => {
                    const newTask = editTaskName.trim();
                    if (newTask === '' || newTask === task.name) {
                      setCurrentTaskOnEditId(null);
                      setEditTaskName('');
                      return;
                    }
                    handleNewTaskSubmit(task.id, newTask);
                    setEditTaskName('');
                  }}
                >
                  check
                </span>
                <span className="material-icons cancel-btn" onClick={() => {
                  setCurrentTaskOnEditId(null);
                  setEditTaskName('');
                }}>
                  cancel
                </span>
              </div>
            </div>
            <div className={`task-div ${currentTaskOnEditId === task.id ? 'inactive' : ''}`}>
              <p className={`task-text ${deleteBtnOnHoverId === task.id ? 'delete-task-text-decoration' : ''}`}>{`${idx + 1}. ${task.name}`}</p>
              <div className="actions-div">
                <span className="material-icons edit-btn" onClick={() => handleCurrentTaskOnEdit(task.id, task.name)}>
                  edit
                </span>
                <span
                  className="material-icons delete-btn"
                  onMouseEnter={() => deleteBtnHovered(task.id)}
                  onMouseLeave={() => deleteBtnHovered(null)}
                  onClick={() => onDelete(task.id)}
                >
                  delete_forever
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Overview;