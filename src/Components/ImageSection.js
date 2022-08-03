import React from "react";
import styled from "styled-components";
import Ayesha from "../Assets/Ayesha.jpeg";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={Ayesha} alt="" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Ayesha Khan</span>
        </h4>
        <p className="paragraph">
          I am 2<sup style={{ fontSize: ".8rem" }}>nd</sup> year Electrical
          Engineering student from Jamia Millia Islamia, New Delhi. Highly
          interested in technical field. From the past few months I started
          learning techinal skills. Currently learning Backend Web Developement
          and Data Structure and Algorithms, also enhancing Frontend
          Developement skills. Whenever I learned a new skill, it boosts my
          confidence.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Name</p>
            <p>College</p>
            <p>Email</p>
            <p>Contact No</p>
            <p>Address</p>
          </div>
          <div className="info">
            <p>: Ayesha Khan</p>
            <p>: JMI Delhi</p>
            <p>: fizaayesha696@gmail.com</p>
            <p>: +91-7489171187</p>
            <p>: Raigarh, Chattisgarh</p>
          </div>
        </div>
        <a href="https://links.cuvette.tech/student/62682541560dedda80c0cfd2">
          <PrimaryButton title={"Download Cv"} />
        </a>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
      @media screen and (max-width: 1000px) {
        width: 100%;
      }
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
