import React from "react";
import styledComponents from "styled-components";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import Title from "./Title";
import { FormatQuoteSharp } from "@material-ui/icons";
import WomenTechCards from "./WomenTechCards";

function WomeninTech() {
  return (
    <WomenInTechStyled>
      <MainLayout>
        <Title title={"Women in Tech"} span={"Women in Tech"} />
        <InnerLayout>
          <div className="typography">
            <p>
              <FormatQuoteSharp style={{ transform: "rotate(180deg)" }} />
              Recognize and embrace your uniqueness...Being a Black woman, being
              a woman in general, on a team of all men, means that you are going
              to have a unique voice. It’s important to embrace that.
              <FormatQuoteSharp />
            </p>
          </div>
        <WomenTechCards />
        </InnerLayout>
      </MainLayout>
    </WomenInTechStyled>
  );
}
const WomenInTechStyled = styledComponents.section`
  width: 100%;
  height: 100vh;
  position: relative;
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 60%;
  }
`;
export default WomeninTech;
