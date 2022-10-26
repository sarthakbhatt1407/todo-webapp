import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Modal from "../UI/Modal";
const TaskBox = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem 0;
  overflow-y: auto;
`;

const InpBox = styled.input`
  background-color: #ffffff;
  border: 1px solid #c6c6c6;
  padding: 0.5rem 0.4rem;
  display: block;
  border-radius: 0.3rem;
  width: 90%;
  margin: 0.4rem 0;
`;
const LabelBox = styled.label`
  color: black;
`;
const Button = styled.button`
  width: 30%;
  margin: 0.3rem 0;
  padding: 0.4rem 0;
  border: none;
  background-color: #f54749;
  border-radius: 0.3rem;
  color: white;
  font-size: 16px;
`;
const Textarea = styled.textarea`
  border: 1px solid #c6c6c6;
  margin: 0.6rem 0 0 0;
  width: 92%;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
`;
const AddTaskHeading = styled.h1`
  text-align: center;
`;

const AddNewTask = (props) => {
  const defaultInpFields = {
    task: "",
    desc: "",
    date: "",
    status: "pending",
    id: "",
  };
  const dispatch = useDispatch();

  const [inputFields, setInputFields] = useState(defaultInpFields);

  const onChangeHandler = (e) => {
    const field = e.target.id;
    const value = e.target.value;

    if (value.trim().length > 0) {
      const element = document.getElementById(field);
      element.style.border = "1px solid #c6c6c6";
      element.placeholder = "";
    }
    setInputFields({
      ...inputFields,
      [field]: value,
    });
  };

  const onBlurHandler = (e) => {
    const field = e.target.id;
    const value = e.target.value;
    if (value.trim().length < 1) {
      const element = document.getElementById(field);
      element.style.border = "2px solid red";
      if (field == "task") {
        element.placeholder = "Enter Valid Task";
      } else if (field == "desc") {
        element.placeholder = "Enter Valid Desc";
      }
    }
  };
  const submitHandler = () => {
    const task = document.getElementById("task").value;
    const desc = document.getElementById("desc").value;
    const date = document.getElementById("date").value;
    if (task.trim().length > 0 && desc.trim().length > 0) {
      return true;
    } else {
      return false;
    }
  };
  const onSubmitHandler = () => {
    if (submitHandler()) {
      dispatch({
        type: "add",
        task: { ...inputFields, id: parseInt(Math.random() * 100000) },
      });
      setInputFields(defaultInpFields);
    } else {
      alert("Wrong input");
    }
    props.toHide();
  };

  return (
    <Modal onClick={props.onClick}>
      <AddTaskHeading>Add a new Task</AddTaskHeading>
      <TaskBox>
        <InputContainer>
          <LabelBox htmlFor="task">Task</LabelBox>
          <InpBox
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            type="text"
            id="task"
            value={inputFields.task}
          />
        </InputContainer>
        <InputContainer>
          <LabelBox htmlFor="desc">Description</LabelBox>
          <Textarea
            rows={5}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            type="text"
            id="desc"
            value={inputFields.desc}
          />
        </InputContainer>
        <InputContainer>
          <LabelBox htmlFor="task">Date</LabelBox>
          <InpBox
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            type="date"
            id="date"
            value={inputFields.date}
          />
        </InputContainer>
        <InputContainer>
          <Button onClick={onSubmitHandler}>Submit</Button>
        </InputContainer>
      </TaskBox>
    </Modal>
  );
};

export default AddNewTask;
