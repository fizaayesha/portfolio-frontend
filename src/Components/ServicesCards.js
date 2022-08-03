import React from "react";
import styled from "styled-components";

function ServicesCards({ photo, title, paragraph }) {
  return (
    <ServiceCardStyled>
      <div className="container">
        <img src={photo} alt="" />
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </ServiceCardStyled>
  );
}
const ServiceCardStyled = styled.div`
  background-color: var(--background-dark-grey);
  border-top: 8px solid var(--border-color);
  transition: all 0.4s ease-in-out;
  &:hover {
    border-top: 8px solid var(--primary-color);
    transform: translateY(3px);
  }
  .container {
    padding: 1.2rem;
    img {
      width: 64px;
    }
    h4 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding: 1rem 0;
      position: relative;
      &::after {
        content: "";
        width: 4rem;
        background-color: var(--border-color);
        height: 4px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px;
      }
    }
    p {
      padding: 0.8rem 0;
      font-size: 1rem;
    }
  }
`;
export default ServicesCards;
