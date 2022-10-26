import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CompletedTask = (props) => {
  const completedTask = props.task;
  const { task, desc, date, id } = completedTask;
  const dispatch = useDispatch();
  const completeToPendingHandler = (task) => {
    dispatch({ type: "completeToPending", task: { ...completedTask } });
  };
  const deleteHandler = () => {
    dispatch({ type: "remover", task: { ...completedTask } });
  };
  return (
    <div>
      <ul>
        <li>
          <h1>{task}</h1>
          <p>{desc}</p>
          <p>{date}</p>
          <p>{id}</p>
          <button onClick={completeToPendingHandler}>Mark As Pending</button>
          <button onClick={deleteHandler}>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default CompletedTask;
