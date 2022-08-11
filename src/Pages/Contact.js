import React, { useState } from "react";
import styled from "styled-components";
import ContactItem from "../Components/ContactItem";
import Title from "../Components/Title";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import { Email, Home, PhoneInTalk } from "@material-ui/icons";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async (event) => {
    console.log(name, email, subject);
    event.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
        }),
      });
      console.log(res);
      if (res.status === 400 || !res) {
        window.alert("Message not sent, try again later");
      } else {
        window.alert("Message Sent");
        setName("");
        setEmail("");
        setSubject("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const phone = <PhoneInTalk />;
  const home = <Home />;
  const emailI = <Email />;
  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get in Touch</h4>
            </div>
            <form className="form">
              <div className="form-filling">
                <label htmlFor="name">Enter your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="form-filling">
                <label htmlFor="email">Enter your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-filling">
                <label htmlFor="subject">Enter your Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </div>
              <div className="form-filling f-button">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="submitButton"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              icon={phone}
              title={"Phone"}
              contact={"+91-7489171187"}
            />
            <ContactItem
              icon={emailI}
              title={"Email"}
              contact={"fizaayesha696@gmail.com"}
            />
            <ContactItem
              icon={home}
              title={"Address"}
              contact={"Raigarh, Chattisgarh, India"}
            />
          </div>
        </InnerLayout>
      </ContactStyled>
    </MainLayout>
  );
}
const ContactStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-filling {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
      .submitButton {
        background-color: var(--primary-color);
        padding: 0.6rem 1rem;
        cursor: pointer;
        color: white;
        display: inline-block;
        font-size: 1rem;
        position: relative;
        transition: all 0 0.4s ease-in;
        &:after {
          content: "";
          position: absolute;
          width: 0;
          height: 0.2rem;
          transition: all 0.4s ease-in-out;
          left: 0;
          bottom: 0;
          opacity: 0.9;
        }
        &:hover::after {
          width: 100%;
          background-color: var(--white-color);
          font-weight: 500;
        }
      }
    }
  }
`;
export default Contact;
