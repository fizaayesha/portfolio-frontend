import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ReviewItem from "./ReviewItem";
import Title from "./Title";

function ReviewSection() {
  return (
    <ReviewStyledSection>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem
            text={
              "I can develop new user-facing features, determine the structure and design of web pages, build reusable codes, optimize page loading times, and use a variety of markup languages to create the web pages"
            }
          />
          <ReviewItem
            text={
              "I can build server-side web application logic and integration of the work front-end developers do. I  usually write the web services and APIs used by front-end developers."
            }
          />
        </div>
      </InnerLayout>
    </ReviewStyledSection>
  );
}

const ReviewStyledSection = styled.section`
  .reviews {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    width: 100%;
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export default ReviewSection;
