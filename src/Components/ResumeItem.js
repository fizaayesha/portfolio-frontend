import React from "react";
import styled from "styled-components";

function ResumeItem({ year, title, subTitle, text }) {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h4>{title}</h4>
        <h6>{subTitle}</h6>
        <p>{text}</p>
      </div>
    </ResumeItemStyled>
  );
}
const ResumeItemStyled = styled.div`
  display: flex;
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    width: 12%;
    padding-left: 20px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 3px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--primary-color);
    }
    p {
      display: inline-block;
      margin-top: 1px;
    }
  }
  .right-content {
    padding-left: 5rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      height: 2px;
      width: 3rem;
      background-color: var(--border-color);
    }
    h4 {
      color: var(--primary-color);
      font-size: 1.5rem;
      padding-bottom: 0.4rem;
    }
    h6 {
      padding-bottom: 0.6rem;
      color: var(--white-color);
    }
    //utilities
    /* .last-section{
        margin-bottom: ;
    } */
  }
`;
export default ResumeItem;
