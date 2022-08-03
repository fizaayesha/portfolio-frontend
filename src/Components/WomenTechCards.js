import React, { useState } from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ServicesCards from "./ServicesCards";
import SmallTitle from "./SmallTitle";
import { AlbumOutlined } from "@material-ui/icons";
import { ImportantDevices } from "@material-ui/icons";
import womeninTech from "../data/womeninTech";
import Menu2 from "./Menu2";

function WomenTechCards() {
  const examples = <AlbumOutlined />;
  const about = <ImportantDevices />;
  const [menu, setMenu] = useState(womeninTech);

  return (
    <InnerLayout>
      <WomenTechCardsStyled>
        <div className="head">
          <SmallTitle icon={about} title={"About"} />
          <div className="services">
            <ServicesCards
              title={"Need"}
              paragraph={
                "Why we need more women in technology, is because they can provide a more balanced view to female gender and technology sector issues. 'When only one gender is being emphasised in the media, academic and industry sectors, issues that females can identify with, and address remain largely ignored              "
              }
            />
            <ServicesCards
              title={"Importance"}
              paragraph={
                "More roles being filled by females in information technology, as mentioned above, leads to better organizational outcomes. Job growth for women in tech could mean women are: More likely to influence their company and its culture. Better able to represent women and their needs as a consumer."
              }
            />
            <ServicesCards
              title={"Benefits"}
              paragraph={
                "Women help improve technical innovation. The inclusion of women in the technological fields helps reduce inequalities. It can achieve a higher rate of productivity and innovation. The fastest growing and high-paying jobs are those associated with technology.              "
              }
            />
          </div>
        </div>
        <div className="head">
          <SmallTitle icon={examples} title={"Examples"} />
          <br />
          <br />
          <Menu2 menu={menu} />
        </div>
      </WomenTechCardsStyled>
    </InnerLayout>
  );
}
const WomenTechCardsStyled = styled.section`
  .head {
    margin-top: 16%;
    @media screen and (max-width: 950px) {
      margin-top: 60%;
    }
    @media screen and (max-width: 650px) {
      margin-top: 90%;
    }
    .services {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1.5rem;
      @media screen and (max-width: 1000px) {
        flex-direction: column;
      }
      @media screen and (max-width: 950px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
export default WomenTechCards;
