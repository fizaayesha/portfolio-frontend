import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ProgressBar from "./ProgressBar";
import Title from "./Title";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"Skills"} span={"Skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"HTML"} width={"90%"} text={"90%"} />
          <ProgressBar title={"CSS"} width={"70%"} text={"70%"} />
          <ProgressBar title={"JavaScript"} width={"60%"} text={"80%"} />
          <ProgressBar title={"Reactjs"} width={"50%"} text={"50%"} />
          <ProgressBar title={"Nodejs"} width={"65%"} text={"65%"} />
          <ProgressBar title={"Expressjs"} width={"65%"} text={"65%"} />
          <ProgressBar title={"MongoDB"} width={"65%"} text={"70%"} />
          <ProgressBar title={"Java"} width={"50%"} text={"50%"} />
          <ProgressBar title={"C"} width={"75%"} text={"75%"} />
          <ProgressBar title={"C++"} width={"75%"} text={"75%"} />
          <ProgressBar title={"Python"} width={"30%"} text={"30%"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}
const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export default Skills;
