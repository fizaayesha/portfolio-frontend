import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import { LinkOutlined } from "@material-ui/icons";
function Menu({ menu }) {
  return (
    <MenuStyled>
      {menu.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="projects-content">
              <div className="projects-image">
                <img src={item.image} alt="" />
                <ul>
                  <li>
                    <a href={item.code}>
                      <GitHubIcon />
                    </a>
                  </li>
                  <li>
                    <a href={item.visit}>
                      <LinkOutlined />
                    </a>
                  </li>
                </ul>
              </div>
              <h6> {item.title} </h6>
              <p> {item.text} </p>
            </div>
          </div>
        );
      })}
    </MenuStyled>
  );
}
const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .grid-item {
    .projects-content {
      display: block;
      position: relative;
      overflow: hidden;
      h6 {
        font-size: 1.5rem;
        color: var(--white-color);
      }
      img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
      }
      ul {
        transform: translateY(-600px);
        transition: all 0.4s ease-in-out;
        position: absolute;
        left: 50%;
        top: 40%;
        opacity: 0;
        li {
          background-color: var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          margin: 0 0.5rem;
          transition: all 0.4s ease-in-out;
          &:hover {
            background-color: var(--primary-color);
          }
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease-in-out;
          }
        }
      }
      .projects-image {
        &::before {
          content: "";
          position: absolute;
          left: 2%;
          top: 4%;
          height: 0;
          width: 0;
          transition: all 0.4s ease-in-out;
        }
      }
      .projects-image:hover {
        ul {
          transform: translateY(0);
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease-in-out;
          opacity: 1;
          li {
            transition: all 0.4s ease-in-out;
            &:hover {
              background-color: var(--primary-color);
            }
            a {
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.4s ease-in-out;
            }
          }
          li:hover {
            svg {
              color: var(--white-color);
            }
          }
          svg {
            font-size: 2rem;
          }
        }
        &::before {
          height: calc(100% - 32%);
          width: calc(100% - 4%);
          background-color: var(--glass-color);
          opacity: 0.9;
          transform-origin: left;

          transition: all 0.4s ease-in-out;
        }
      }
    }
  }
`;
export default Menu;
