import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
  background: #0d1d2b;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.9rem; /* Increased font size */
  color: white; /* Black text color */
`;

const NavMenu = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  margin-right: 2rem;
`;

const NavItem = styled(Link)`
  margin-left: 2rem;
  height: 80px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white; /* Black text color */
  font-weight: bold;
`;

// ... (your existing imports)

const Navbar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <Nav>
          <h1
            style={{
              textAlign: "center",
              marginLeft: "50px",
              color: "white"
            }}
          >
            Welcome to Traverse!
          </h1>
          <NavMenu>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <NavItem to="/RegistrationForm">Login</NavItem>
            <NavItem to="/RegisterForm">Register</NavItem>
          </NavMenu>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
