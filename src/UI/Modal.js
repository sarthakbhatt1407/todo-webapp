import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";

import ReactDOM from "react-dom";
const BackdropEle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;
const slideDown = keyframes`
from {
    opacity: 0;
    transform: translateY(-3rem);
}
to {
    opacity: 1;
    transform: translateY(0);
}
`;
const ModalEle = styled.div`
  position: fixed;
  top: 13vh;
  left: 18%;
  width: 60%;
  height: 70vh;
  background-color: white;
  padding: rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  border-radius: 0.8rem;

  overflow-x: auto;
  animation: ${slideDown} 300ms ease-out forwards;
`;
const Backdrop = (props) => {
  return <BackdropEle onClick={props.onClick} />;
};
const ModalOverlay = (props) => {
  return (
    <ModalEle>
      <div>{props.children}</div>
    </ModalEle>
  );
};
const portalEle = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalEle)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEle
      )}
    </Fragment>
  );
};

export default Modal;
