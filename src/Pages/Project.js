import React, { useState } from "react";
import Title from "../Components/Title";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import projects from "../data/projects";
import Menu from "../Components/Menu";
import Button from "../Components/Button";

const allButtons = ["All", ...new Set(projects.map((item) => item.category))];

function Projects() {
  const [menu, setMenu] = useState(projects);
  const [button, setButton] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenu(projects);
      return;
    }
    const filteredData = projects.filter((item) => item.category === button);
    setMenu(filteredData);
  };
  return (
    <MainLayout>
      <Title title={"Projects"} span={"Projects"} />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menu={menu} />
      </InnerLayout>
    </MainLayout>
  );
}

export default Projects;
