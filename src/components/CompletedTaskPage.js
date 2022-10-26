import React from "react";
import { useSelector } from "react-redux";
import CompletedTask from "./TaskBox/CompletedTask";

const CompletedTaskPage = (props) => {
  const tasks = useSelector((state) => state.allTask);

  return (
    <div>
      {tasks.map((task) => {
        if (task.status === "completed") {
          return <CompletedTask key={task.id} task={task} />;
        }
      })}
    </div>
  );
};

export default CompletedTaskPage;
