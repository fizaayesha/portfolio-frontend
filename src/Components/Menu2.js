import React from "react";
import styled from "styled-components";

function Menu2({ menu }) {
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
                    <p> {item.text} </p>
                  </li>
                </ul>
              </div>
              <h6> {item.title} </h6>
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
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          width: 13rem;
          height: 10rem;
          margin: 0 0.5rem;
          transition: all 0.4s ease-in-out;
          p {
            font-size: .8rem;
            color: var(--white-color);
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
      .projects-image:hover{
        cursor: pointer;
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
          }
        }
        &::before {
          height: calc(100% - 22%);
          width: calc(100% - 4%);
          background-color: black;
          opacity: 0.9;
          transform-origin: left;
          transition: all 0.4s ease-in-out;
        }
      }
    }
  }
`;

export default Menu2;
