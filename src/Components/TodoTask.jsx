import React, { useState } from "react";

const TodoTask = ({ task, completeTask, updateTask }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(task.taskName);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = () => {
    updateTask(task.taskName, updatedTaskName);
    setIsEditing(false);
  };

  return (
    <div className="task">
      {!isEditing ? (
        <div className="content">
          <span id="taskName">{task.taskName}</span>
          <span id="deadLine">{task.deadline} days</span>
        </div>
      ) : (
        <div className="editForm">
          <input
            type="text"
            value={updatedTaskName}
            onChange={(e) => setUpdatedTaskName(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
      <button onClick={() => completeTask(task.taskName)}>Complete</button>
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
    </div>
  );
};

export default TodoTask;
