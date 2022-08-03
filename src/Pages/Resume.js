import React from "react";
import ResumeSection from "../Components/ResumeSection";
import Skills from "../Components/Skills";
import { MainLayout } from "../styles/Layouts";

function Resume() {
  return (
    <MainLayout>
      <Skills />
      <ResumeSection />
    </MainLayout>
  );
}
export default Resume;
