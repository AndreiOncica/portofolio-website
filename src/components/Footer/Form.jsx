import React, { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { Button } from "../../assets/GlobalStyles";

const Confirmation = styled.div`
  position: fixed;
  bottom: 50px;
  left: 0px;
  display: flex;
  width: 100%;
  justify-content: center;
  z-index: 200000;
  transform: translateY(300%);
  opacity: 0;
  transition: 0.5s;

  & div {
    padding: 1rem;
    opacity: 1;
  }
`;

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export default function Form() {
  const formRef = useRef();
  const confirmationRef = useRef();

  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
    resetForm();
  };

  const resetForm = () => {
    formRef.current.reset();
    setFormData(initialValues);
  };

  const displayConfirmation = (isSuccess) => {
    confirmationRef.current.style.transform = "translateY(0)";
    confirmationRef.current.style.opacity = 1;
    confirmationRef.current.children[0].style.background = isSuccess ? "green" : "red";
    confirmationRef.current.children[0].innerText = isSuccess ? "Mesajul a fost trimis" : "Mesajul nu a fost trimis";
    setTimeout(() => {
      confirmationRef.current.style.transform = "translateY(200%)";
    }, 5000);
  };

  const sendEmail = () => {
    emailjs
      .sendForm("service_xqfmci4", "template_45kjubf", formRef.current, "RX6st1AHTWcB8mLMc")
      .then((response) => {
        console.log("Email sent successfully:", response);
        displayConfirmation(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        displayConfirmation(false);
      });
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          id="message"
          cols="30"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <Button type="submit">
          <img src="https://img.icons8.com/?size=50&id=43442&format=png" alt="" />
        </Button>
      </form>

      <Confirmation ref={confirmationRef}>
        <div></div>
      </Confirmation>
    </>
  );
}
