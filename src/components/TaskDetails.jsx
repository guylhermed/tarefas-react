import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();
  const [observations, setObservations] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedObservations = localStorage.getItem(
      `observations_${params.taskId}`
    );
    const savedTaskTitle = localStorage.getItem(`taskTitle_${params.taskId}`);
    if (savedObservations) {
      setObservations(savedObservations);
    }
    if (savedTaskTitle) {
      setTaskTitle(savedTaskTitle);
    }
  }, [params.taskId]);

  const handleBackButtonClick = () => {
    history.goBack();
  };

  const handleSaveButtonClick = () => {
    localStorage.setItem(`observations_${params.taskId}`, observations);
    localStorage.setItem(`taskTitle_${params.taskId}`, taskTitle);
    setIsEditing(false);
  };

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{taskTitle}</h2>
        {isEditing ? (
          <input
            className="observations-input"
            type="text"
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
          />
        ) : (
          <p className="observation-text">{observations}</p>
        )}
        {isEditing ? (
          <Button onClick={handleSaveButtonClick}>Salvar</Button>
        ) : (
          <Button onClick={() => setIsEditing(true)}>Editar Observação</Button>
        )}
      </div>
    </>
  );
};

export default TaskDetails;
