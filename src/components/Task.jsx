import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    localStorage.setItem(`taskTitle_${task.id}`, task.title); // Armazenando o título da tarefa
    history.push(`/tarefas-react/${task.id}`);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    handleTaskDeletion(task.id);
  };

  return (
    <div
      onClick={() => handleTaskClick(task.id)}
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title">{task.title}</div>

      <div className="buttons-container">
        <button className="remove-task-button" onClick={handleDeleteClick}>
          <CgClose />
        </button>
        <button
          className="see-task-details-button"
          onClick={handleTaskDetailsClick}
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default Task;