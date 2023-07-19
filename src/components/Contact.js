import {validateEmail} from "../utils/helpers";
import React, { useState } from "react";

export default function Contact() {
   
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;

      inputType === "name"
        ? setName(inputValue)
        : inputType === "email"
        ? setEmail(inputValue)
        : setMessage(inputValue);
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      if (!validateEmail(email) || !name || !message) {
        alert("Please fill out all fields correctly.");
        setErrorMessage("Email, name, and message fields are required.");
        return;
      }

      console.log(name + ' your message was sent!');
      setName("");
      setEmail("");
      setMessage("");
    };

    return (
      <div>
      <div className="contact" id="contact">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="contact-h2">Contact</h2>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Name</label>
            <input
              type="name"
              value={name}
              name="name"
              onChange={handleChange}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Adam Hood"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={handleChange}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="adam@gmail.com"
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={message}
              onChange={handleChange}
              rows="5"
            >
              Type message here...
            </textarea>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            id="form-btn"
            className="btn "
          >
            Submit
          </button>
        </form>
      </div>
      <div className="separator-contact"></div>
      </div>
    );
  }