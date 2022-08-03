import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ServicesCards from "./ServicesCards";
import Title from "./Title";
import Frontend from "../Assets/Frontend.png";
import Backend from "../Assets/Backend.png";

function ServiceSections() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"Services"} />
        <div className="services">
          <ServicesCards
            photo={Frontend}
            title={"Frontend Developement"}
            paragraph={
              "I can develop new user-facing features, determine the structure and design of web pages, build reusable codes, optimize page loading times, and use a variety of markup languages to create the web pages"
            }
          />
          <div className="mid-card">
            <ServicesCards
              photo={Backend}
              title={"Backend Developement"}
              paragraph={
                "I can build server-side web application logic and integration of the work front-end developers do. I  usually write the web services and APIs used by front-end developers."
              }
            />
          </div>
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}
const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
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
`;
export default ServiceSections;
