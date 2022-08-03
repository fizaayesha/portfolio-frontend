import React from "react";
import styled from "styled-components";
import ImageSection from "../Components/ImageSection";
// import ReviewSection from "../Components/ReviewSection";
import ServiceSections from "../Components/ServiceSections";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layouts";

function About() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
        <ServiceSections />
        {/* <ReviewSection /> */}
      </AboutStyled>
    </MainLayout>
  );
}
const AboutStyled = styled.section`
`;
export default About;
