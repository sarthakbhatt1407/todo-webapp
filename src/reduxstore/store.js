import { logDOM } from "@testing-library/react";
import { createStore } from "redux";
const defaultState = {
  allTask: [],
};

const storeReducer = (state = defaultState, action) => {
  let updatedList;
  if (action.type === "add") {
    updatedList = [...state.allTask, action.task];

    return {
      ...state,
      allTask: updatedList,
    };
  }

  if (action.type === "completeToPending") {
    const existingTaskIndex = state.allTask.findIndex((item) => {
      return item.id == action.task.id;
    });
    const existingElement = state.allTask[existingTaskIndex];

    const updatedTask = { ...existingElement, status: "pending" };

    updatedList = [...state.allTask];
    updatedList[existingTaskIndex] = updatedTask;

    return {
      ...state,
      allTask: updatedList,
    };
  }
  if (action.type === "pendingToComplete") {
    const existingTaskIndex = state.allTask.findIndex((item) => {
      return item.id == action.task.id;
    });
    const existingElement = state.allTask[existingTaskIndex];

    const updatedTask = { ...existingElement, status: "completed" };

    updatedList = [...state.allTask];
    updatedList[existingTaskIndex] = updatedTask;

    return {
      ...state,
      allTask: updatedList,
    };
  }
  if (action.type === "remover") {
    updatedList = state.allTask.filter((item) => {
      return item.id != action.task.id;
    });
    console.log(updatedList);
    return {
      ...state,
      allTask: updatedList,
    };
  }
  return state;
};

export const store = createStore(storeReducer);
