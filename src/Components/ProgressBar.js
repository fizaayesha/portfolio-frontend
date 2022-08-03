import React from "react";
import styled from "styled-components";

function ProgressBar({ title, width, text }) {
  return (
    <ProgressStyled>
      <h6>{title}</h6>
      <div className="progress-bar">
        <p>{text}</p>
        <div className="progress">
          <span style={{ width: width }}></span>
        </div>
      </div>
    </ProgressStyled>
  );
}
const ProgressStyled = styled.section`
    h6 {
      color: var(--white-color);
    }
  .progress-bar {
    display: flex;
    align-items: center;
    p {
      padding-right: 1.2rem;
    }
    .progress {
      position: relative;
      width: 100%;
      height: 0.31rem;
      background-color: #3542416b;
      border-radius: 15px;
      span {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        background-color: var(--primary-color);
        border-radius: 15px;
      }
    }
  }
`;
export default ProgressBar;
