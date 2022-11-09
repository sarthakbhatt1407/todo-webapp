import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.jpeg";
const NavBar = styled.nav`
  background-color: black;
`;

const MobileNavBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  align-items: center;
`;
const DesktopLinksBox = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 450px) {
    display: none;
  }
`;
const Logo = styled.img`
  width: 3rem;
  border-radius: 50%;
  @media (max-width: 1020px) {
    width: 2.7rem;
  }
`;
const NavButton = styled.button`
  display: none;
  padding: 0.2rem 0.3rem;
  border: none;
  background-color: transparent;
  div {
    width: 1rem;
    height: 0.1rem;
    background-color: white;
    margin: 0.2rem 0;
  }
  @media (max-width: 450px) {
    display: block;
  }
`;
const NavLinksBox = styled.div`
  animation: fadeInLeft;
  animation-duration: 0.3s;
`;

const Header = () => {
  const onClickHandler = () => {
    const navLinksBox = document.getElementById("navLinksBox");
    navLinksBox.classList.toggle("navActive");
    navLinksBox.classList.toggle("navHidden");
  };
  return (
    <NavBar>
      <MobileNavBox>
        <Logo src={logo} />
        <DesktopLinksBox>
          <NavLink activeClassName="nav-active-link" to="/all-task">
            All Task
          </NavLink>
          <NavLink activeClassName="nav-active-link" to="/pending-task">
            Pending Task
          </NavLink>
          <NavLink activeClassName="nav-active-link" to="/completed-task">
            Completed Task
          </NavLink>
        </DesktopLinksBox>
        <NavButton onClick={onClickHandler}>
          <div></div>
          <div></div>
          <div></div>
        </NavButton>
      </MobileNavBox>
      <NavLinksBox id="navLinksBox" className="navHidden ">
        <NavLink activeClassName="nav-active-link" to="/all-task">
          All Task
        </NavLink>
        <NavLink activeClassName="nav-active-link" to="/pending-task">
          Pending Task
        </NavLink>
        <NavLink activeClassName="nav-active-link" to="/completed-task">
          Completed Task
        </NavLink>
      </NavLinksBox>
    </NavBar>
  );
};

export default Header;

// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import styled from "styled-components";
// import logo from "../assets/logo.jpeg";
// const NavBar = styled.nav``;
// const LogoButtonBox = styled.div`
//   display: flex;
//   justify-content: space-between;
//   background-color: red;
//   padding: 0.2rem 0.9rem;
//   align-items: center;
//   @media (max-width: 450px) {
//   }
//   @media only screen and (min-width: 451px) and (max-width: 1020px) {
//   }
// `;
// const Logo = styled.img`
//   width: 3rem;
//   border-radius: 50%;
//   @media (max-width: 1020px) {
//     width: 2.7rem;
//   }
// `;

// const NavButton = styled.button`
//   display: none;

//   @media (max-width: 450px) {
//     display: flex;
//     flex-direction: column;
//   }
// `;
// const NavLinksBox = styled.div``;
// const Links = styled.p`
//   animation: fadeInLeft;
//   animation-duration: 0.8s;
// `;
// const DesktopLinks = styled.div``;
// const ButtonSpan = styled.span``;
// const Header = () => {
//   const onClickHandler = () => {
//     const navLinksBox = document.getElementById("navLinksBox");
//     navLinksBox.classList.toggle("navActive");
//     navLinksBox.classList.toggle("navHidden");
//   };
//   return (
//     <NavBar>
//       <LogoButtonBox>
//         <Logo src={logo} />
//         <NavButton onClick={onClickHandler}>X</NavButton>
//         <DesktopLinks>hi</DesktopLinks>
//       </LogoButtonBox>
//       <NavLinksBox id="navLinksBox" className="navHidden ">
//         <NavLink activeClassName="nav-active-link" to="/all-task">
//           <Links>All Task</Links>
//         </NavLink>
//         <NavLink activeClassName="nav-active-link" to="/pending-task">
//           <Links>Pending Task</Links>
//         </NavLink>
//         <NavLink activeClassName="nav-active-link" to="/completed-task">
//           <Links>Completed Task</Links>
//         </NavLink>
//       </NavLinksBox>
//     </NavBar>
//   );
// };

// export default Header;
