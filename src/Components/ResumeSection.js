import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import SmallTitle from "./SmallTitle";
import Title from "./Title";
import { Work } from "@material-ui/icons";
import { SchoolSharp } from "@material-ui/icons";
import ResumeItem from "./ResumeItem";
function ResumeSection() {
  const work = <Work />;
  const education = <SchoolSharp />;
  return (
    <ResumeSectionStyled>
      <Title title={"Resume"} span={"Resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={work} title={"Experiences"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"May'2022-Present"}
            title={"Technial Head"}
            subTitle={"ACM-W JMI, New Delhi"}
            text={
              "ACM-W JMI aims to provide social and professional support for women in computing, and its proposed activities include. With a motive to provide a common platform for Interdisciplinary technical activities of the college"
            }
          />
          <ResumeItem
            year={"April'2022-May'2022"}
            title={"Web Developement and Designing Intern"}
            subTitle={"The Sparks Foundation"}
            text={
              "Provides financial assistance to meritorious and deserving students. We provide prizes, motivating students to bring out their best."
            }
          />
          <ResumeItem
            year={"March'2022-Present"}
            title={"Web Developement Volunteer"}
            subTitle={"Aaghaaz-e-Taleem, New Delhi"}
            text={
              "Aaghaaz e Taleem (AeT) is a not for profit organization, designing interventions to reduce hunger and bridge the skills gaps in the slum children residing in underserved communities in Delhi."
            }
          />
          <ResumeItem
            year={"March'2022-Present"}
            title={"Web Developer"}
            subTitle={"IEEECS JMI, New Delhi"}
            text={
              "IEEE JMI is a student-run organization at Jamia Millia Islamia. Our agenda is to continuously learn, interact, innovate and facilitate students to be technical beyond their regular curriculum.              "
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={education} title={"Educations"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2020-2024"}
            title={"Bachelor of Technology"}
            subTitle={"Jamia Millia Islamia, New Delhi"}
          />
          <ResumeItem
            year={"2017-2019"}
            title={"Higher Secondary School"}
            subTitle={
              "O.P. Jindal School, Savitri Nagar, Tamnar Raigarh, (C.G.)"
            }
          />
          <ResumeItem
            year={"2015-2017"}
            title={"Senior Secondary School"}
            subTitle={"DAV Mukhya Mantri Public School, Raigarh, (C.G.)"}
          />
        </div>
      </InnerLayout>
    </ResumeSectionStyled>
  );
}

const ResumeSectionStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  .resume-content {
    border-left: 1px solid var(--border-color);
  }
`;
export default ResumeSection;
