import React, { useState } from "react";
import styled from "styled-components";
import ContactItem from "../Components/ContactItem";
import PrimaryButton from "../Components/PrimaryButton";
import Title from "../Components/Title";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import { Email, Home, PhoneInTalk } from "@material-ui/icons";

function Contact() {
  const [msg, setMsg] = useState({
    name: "",
    phone: "",
    subject: "",
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setMsg({ ...msg, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, phone, subject } = msg;
    try {
      const res = await fetch("http://localhost:5000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          subject,
        }),
      });
      if (res.status === 400 || !res) {
        window.alert("Message not sent, try again later");
      } else {
        window.alert("Message Sent");
        setMsg({
          name: "",
          phone: "",
          subject: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const phone = <PhoneInTalk />;
  const home = <Home />;
  const email = <Email />;
  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get in Touch</h4>
            </div>
            <form className="form" onSubmit={handleSubmit} method="POST">
              <div className="form-filling">
                <label htmlFor="name">Enter your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={msg.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-filling">
                <label htmlFor="email">Enter your Email</label>
                <input
                  type="email"
                  id="email"
                  name="phone"
                  value={msg.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-filling">
                <label htmlFor="subject">Enter your Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={msg.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-filling f-button">
                <PrimaryButton title={"Send"} type="submit" />
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
              icon={email}
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
    }
  }
`;
export default Contact;
