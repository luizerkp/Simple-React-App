import React from 'react';
import { useState } from 'react';
import './Overview.css';

const Overview = ({tasks, onDelete, onEdit}) => {
  const [editMode, setEditMode] = useState(false);
  
  const deleteBtnHovered = (e) => {
    e.target.parentElement.parentElement.classList.toggle('delete-task-text-decoration');
  }

  const handleTaskEdit = () => {
    console.log("edit mode: ", editMode);
    setEditMode(!editMode);
  }
  return (
    <div className="Overview">
      <h2 className="tasks-header">Overview</h2>
      <p className="tasks-counter">There are {tasks.length} tasks :</p>
      <ul className="tasks-list">
        {tasks.map((task, idx) => (
          <li className="task-item" key = {task.id} datat-id = {task.id}>
            <input type="text" className= {`edit-task-input ${editMode ? "active" : null}`} defaultValue={task.name} />
            {`${idx + 1}. ${task.name}`}
            <div className="actions-div">    
            <span className="material-icons edit-btn" onClick={editMode ? handleTaskEdit(): (e) => {
              onEdit(task.id, e.target.parentElement.parentElement.firstChild.value);
              handleTaskEdit();
              }}>{editMode ? "check": "edit"}</span>
              <span 
              className="material-icons delete-btn"           
              onMouseEnter={deleteBtnHovered} 
              onMouseLeave={deleteBtnHovered}
              onClick={() => onDelete(task.id)}
              >
                delete_forever
              </span>

            </div>

            </li>
        ))}
      </ul>
    </div>
  );
}

export default Overview;