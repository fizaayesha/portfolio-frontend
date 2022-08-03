import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import blogs from "../data/Blogs";
import { InnerLayout, MainLayout } from "../styles/Layouts";
function Blogs() {
  return (
    <BlogsStyled>
      <MainLayout>
        <Title title={"Blogs"} span={"Blogs"} />
        <InnerLayout className={"blog"}>
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className={"blog-item"}>
                <div className="image">
                  <img src={blog.image} alt="" />
                </div>
                <div className="title">
                  <a href={blog.link}>{blog.title}</a>
                </div>
              </div>
            );
          })}
        </InnerLayout>
      </MainLayout>
    </BlogsStyled>
  );
}
const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    @media screen and (max-width: 770px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .blog-item {
      background-color: var(--glass-color-2);
      padding: 2rem 2rem;
      &:hover {
        background-color: var(--glass-color-3);
      }
    }
    .image {
      width: 100%;
      overflow: hidden;
      padding-bottom: 0.5rem;
      img {
        width: 100%;
        height: 90%;
        object-fit: cover;
      }
    }
    .title {
      a {
        font-weight: bold;
        font-size: 1rem;
        padding: 2rem 0;
        color: var(--white-color);
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;
export default Blogs;
