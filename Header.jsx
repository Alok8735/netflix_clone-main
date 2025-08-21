import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";


export default function Header(props) {
  const navigate = useNavigate();
  return (
    <StyledHeader className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button class="login" onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign In"}
      </button>
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
  padding: 0 7rem;
  .logo {
    img {
      height: 5rem;
    }
  }
  .login
   {
    display:block;
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;