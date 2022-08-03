import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.jpg";
function Navbar() {
  // const portfolio = <LaptopSharp/>
  return (
    <NavbarStyles>
      <div className="avatar">
        <img src={logo} alt="avatar" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeclassname="active-class" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeclassname="active-class" exact>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeclassname="active-class" exact>
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" activeclassname="active-class" exact>
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs" activeclassname="active-class" exact>
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeclassname="active-class" exact>
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>&#169; 2022 Ayesha</p>
      </footer>
    </NavbarStyles>
  );
}

const NavbarStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img {
      width: 70%;
      border-radius: 100%;
      border: 8px solid var(--border-color);
      background-color: #000;
    }
  }
  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color);
      color: white;
    }
    li {
      display: block;
      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        font-weight: bold;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        letter-spacing: 1px;
        &:active,
        &:focus {
          background-color: var(--primary-color);
          color: initial;
        }
        &:hover {
          cursor: pointer;
          background-color: var(--primary-color);
          color: initial;
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 53%;
          transition: All 0.4s ease-in-out;
          z-index: -1;
          opacity: 0.21;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 2rem 0;
      font-weight: bold;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
`;

export default Navbar;
