import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import AllTask from "./components/AllTask";
import CompletedTaskPage from "./components/CompletedTaskPage";
import Header from "./components/Header";
import PendingTaskPage from "./components/PendingTaskPage";

const AppOuterBox = styled.div``;
const AppMainHeading = styled.h1`
  text-align: center;
`;

const App = () => {
  return (
    <AppOuterBox>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Redirect to="/all-task" />
        </Route>
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
