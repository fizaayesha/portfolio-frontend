import React from "react";
import styled from "styled-components";

function PrimaryButton({ title }) {
  return <PrimaryStyled>{title}</PrimaryStyled>;
}
const PrimaryStyled = styled.a`
  background-color: var(--primary-color);
  padding: 0.6rem 1rem;
  cursor: pointer;
  color: white;
  display: inline-block;
  font-size: 1rem;
  position: relative;
  transition: all 0 0.4s ease-in;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity:.9;
  }
  &:hover::after {
    /* content: "";
    position: absolute; */
    width: 100%;
    background-color: var(--white-color);
    /* left: 0;
    bottom: 0; */
    /* background-color: var(--border-color); */
    /* color: var(--primary-color); */
    font-weight: 500;
  }
`;

export default PrimaryButton;
