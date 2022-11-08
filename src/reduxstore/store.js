import { logDOM } from "@testing-library/react";
import { createStore } from "redux";
const defaultState = {
  allTask: [],
};

const storeReducer = (state = defaultState, action) => {
  let updatedList;
  if (action.type === "reload") {
    return {
      allTask: action.item,
    };
  }
  if (action.type === "add") {
    updatedList = [...state.allTask, action.task];
    localStorage.setItem("tasks", JSON.stringify(updatedList));
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
    localStorage.setItem("tasks", JSON.stringify(updatedList));
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
    localStorage.setItem("tasks", JSON.stringify(updatedList));
    return {
      ...state,
      allTask: updatedList,
    };
  }
  if (action.type === "remover") {
    updatedList = state.allTask.filter((item) => {
      return item.id != action.task.id;
    });
    if (updatedList.length == 0) {
      localStorage.clear();
    }
    return {
      ...state,
      allTask: updatedList,
    };
  }
  return state;
};

export const store = createStore(storeReducer);
