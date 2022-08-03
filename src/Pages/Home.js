import React from "react";
import styled from "styled-components";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Home() {
  return (
    <HomeStyled>
      <div className="typography">
        <h1>
          Hi I'm <span> Ayesha Khan</span>
        </h1>
        <p>
          Welcome to my Personal Portfolio this website depicts all of the work
          that I have completed. It displays the growth and progress that I have
          made. I am excited to continue developing my skills and gaining
          valuable experiences.
        </p>
        <div className="icons">
          <a href="https://github.com" className="icon i-github">
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/ayesha-khan-129434219"
            className="icon i-linkedin"
          >
            <LinkedInIcon />
          </a>
          <a
            href="http://instagram.com/ayesha__19__"
            className="icon i-instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </HomeStyled>
  );
}
const HomeStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        &:hover {
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
    }
  }
`;
export default Home;
