import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AddNewTask from "./AddNewTask";
import AllTaskPage from "./TaskBox/AllTaskPage";
const AllTaskBox = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 80vh;
  overflow: auto;
`;
const TaskList = styled.div``;
const UnorderedList = styled.ul``;
const List = styled.li``;
const AllTask = () => {
  const items = useSelector((state) => state.allTask);

  const [addNewTaskVisibility, setAddNewTaskVisibility] = useState(false);
  const addNewTaskVisibilityHandler = () => {
    setAddNewTaskVisibility(true);
  };
  const addNewTaskVisibilityHide = () => {
    setAddNewTaskVisibility(false);
  };

  return (
    <AllTaskBox>
      <TaskList>
        <button onClick={addNewTaskVisibilityHandler}>Add</button>
        {addNewTaskVisibility && (
          <AddNewTask
            onClick={addNewTaskVisibilityHide}
            toHide={addNewTaskVisibilityHide}
          />
        )}
      </TaskList>
      {items.map((item) => {
        return <AllTaskPage key={item.id} item={item} />;
      })}
    </AllTaskBox>
  );
};

export default AllTask;
