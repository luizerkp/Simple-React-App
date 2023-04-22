// Description: This component is used to display a task in the list of tasks
const TaskDiv = ({ task, idx, deleteBtnOnHoverId, deleteBtnHovered, onDelete, handleCurrentTaskOnEdit, currentTaskOnEditId }) => {
  return (
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
  );
};

export default TaskDiv;
