import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import AllTask from "./components/AllTask";
import CompletedTaskPage from "./components/CompletedTaskPage";
import Header from "./components/Header";
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

  return (
    <AppOuterBox>
      <Header />
      <Switch>
        <Route path="/all-task">
          <AllTask />
        </Route>
        <Route path="/pending-task">
          <PendingTaskPage />
        </Route>
        <Route path="/completed-task">
          <CompletedTaskPage />
        </Route>
      </Switch>
    </AppOuterBox>
  );
};

export default App;
