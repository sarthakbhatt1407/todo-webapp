import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.jpeg";
const NavBar = styled.nav`
  background-color: black;
  display: flex;
  padding: 0.3rem 3rem;
  align-items: center;
  @media (max-width: 450px) {
    flex-direction: column;
    padding: 0.6rem 0 0 0;
  }
  @media only screen and (min-width: 451px) and (max-width: 1020px) {
    padding: 0 0.3rem;
  }
`;
const Logo = styled.img`
  width: 3rem;
  border-radius: 50%;
  @media (max-width: 1020px) {
    width: 2.7rem;
  }
`;
const LinksBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  margin-left: auto;
  align-items: center;
  @media (max-width: 450px) {
    width: 100%;
    justify-content: center;
    margin: auto;
    gap: 1rem;
  }
  @media only screen and (min-width: 451px) and (max-width: 1020px) {
    width: 80%;
    justify-content: center;
    margin-left: auto;
    gap: 1rem;
  }
`;
const Links = styled.p`
  font-weight: 700;
  letter-spacing: 0.06rem;
  @media (max-width: 450px) {
    font-weight: 500;
    letter-spacing: 0.04rem;
  }
  @media only screen and (min-width: 451px) and (max-width: 1020px) {
    font-weight: 600;
    letter-spacing: 0.05rem;
  }
`;
const Header = () => {
  return (
    <NavBar>
      <Logo src={logo} />
      {/* Links */}
      <LinksBox>
        <NavLink activeClassName="nav-active-link" to="/all-task">
          <Links>All Task</Links>
        </NavLink>
        <NavLink activeClassName="nav-active-link" to="/pending-task">
          <Links>Pending Task</Links>
        </NavLink>
        <NavLink activeClassName="nav-active-link" to="/completed-task">
          <Links>Completed Task</Links>
        </NavLink>
      </LinksBox>
    </NavBar>
  );
};

export default Header;
