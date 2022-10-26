import React from "react";
import { useDispatch } from "react-redux";

const PendingTask = (props) => {
  const dispatch = useDispatch();
  const pendingTask = props.pendingTask;
  const { task, desc, date, id } = props.pendingTask;
  const markAsDoneHandler = () => {
    dispatch({ type: "pendingToComplete", task: { ...pendingTask } });
  };

  const deleteHandler = () => {
    dispatch({ type: "remover", task: { ...pendingTask } });
  };

  return (
    <div>
      <ul>
        <li>
          <h1>{task}</h1>
          <p>{desc}</p>
          <p>{date}</p>
          <p>{id}</p>
          <button onClick={markAsDoneHandler}>Mark As Done</button>
          <button onClick={deleteHandler}>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default PendingTask;
