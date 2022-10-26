import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AllTask from "./components/AllTask";
import CompletedTaskPage from "./components/CompletedTaskPage";
import PendingTaskPage from "./components/PendingTaskPage";
const AppOuterBox = styled.div``;
const AppMainHeading = styled.h1`
  text-align: center;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0;
`;
const ListAccessButton = styled.button`
  border: none;
  background-color: #007bff;
  color: white;
  padding: 0.6rem 1rem;
  font-size: 1.1rem;
  border-radius: 0.4rem;
`;
const App = () => {
  const dispatch = useDispatch();
  const [allTaskPageVisibility, setAllTaskPageVisibility] = useState(true);
  const [pendingTaskPageVisibility, setPendingTaskPageVisibility] =
    useState(false);
  const [completedTaskPageVisibility, setCompletedTaskPageVisibility] =
    useState(false);
  const visibilityHandler = (event) => {
    const elementId = event.target.id;
    if (elementId == "allTask") {
      setPendingTaskPageVisibility(false);
      setCompletedTaskPageVisibility(false);
      setAllTaskPageVisibility(true);
    } else if (elementId == "completedTask") {
      setPendingTaskPageVisibility(false);
      setCompletedTaskPageVisibility(true);
      setAllTaskPageVisibility(false);
    } else {
      setPendingTaskPageVisibility(true);
      setCompletedTaskPageVisibility(false);
      setAllTaskPageVisibility(false);
    }
  };

  const completeToPendingHandler = (task) => {
    dispatch({ type: "completeToPending", task: { ...task } });
  };

  return (
    <AppOuterBox>
      <AppMainHeading>To-Do App</AppMainHeading>
      <ButtonBox>
        <ListAccessButton id="allTask" onClick={visibilityHandler}>
          All Task
        </ListAccessButton>
        <ListAccessButton id="pendingTask" onClick={visibilityHandler}>
          Pending Task
        </ListAccessButton>
        <ListAccessButton id="completedTask" onClick={visibilityHandler}>
          Completed Task
        </ListAccessButton>
      </ButtonBox>
      {allTaskPageVisibility && <AllTask />}
      {pendingTaskPageVisibility && <PendingTaskPage />}
      {completedTaskPageVisibility && <CompletedTaskPage />}
    </AppOuterBox>
  );
};

export default App;
