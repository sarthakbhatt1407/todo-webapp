import React from "react";
import { useSelector } from "react-redux";
import PendingTask from "./TaskBox/PendingTask";

const PendingTaskPage = (props) => {
  const tasks = useSelector((state) => state.allTask);

  return (
    <div>
      {tasks.map((task) => {
        if (task.status === "pending") {
          return <PendingTask key={task.id} pendingTask={task} />;
        }
      })}
    </div>
  );
};

export default PendingTaskPage;
