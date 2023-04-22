// This component is used to edit the task name
const EditDiv = ({ task, currentTaskOnEditId, editTaskName, setEditTaskName, handleNewTaskSubmit, setCurrentTaskOnEditId }) => {
  return (
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
  );
};

export default EditDiv;
