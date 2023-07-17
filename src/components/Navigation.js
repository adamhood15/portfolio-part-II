import Projects from "./Projects";
import React, { useState } from "react";
import headshot from "../assets/images/headshot.jpg";
import resume from "../assets/resume/resume.pdf";
import {validateEmail} from "../utils/helpers";

export default function Navigation({ activePage }) {
  function About() {
    return (
      <div>
      <div className="separator-about"></div>
      <div className="about-section" id="about">
        <img id="about-img" src={headshot} alt="Adam Hood" />
        <div className="about-info">
          <h1 id="about-h1">About</h1>
          <p className="about-text">
            Hey there! My name is Adam Hood and I am a Full Stack Web Developer.
            I am currently a student at Rice University's Full Stack Coding
            Bootcamp and will be earning my certificate at the beginning of
            August 2023.
            <br></br>
            <br></br>
            My passion for web development started in the Summer of 2022 when I
            decided to make my own video game. I jumped head first into learning
            C# and after a full summer of learning I decided I wanted to switch
            careers from teaching and go full time into web development.
            <br></br>
            <br></br>
            I'm experienced in HTML, CSS, C#, and JavaScript. I've also built
            multiple full stack web applications incorporating Node.js, MySQL,
            Sequelize, and building those applications using a Model View
            Controller architecture. I am an excellent communicator, an
            extremely hard worker, and am eager to learn everything I can about
            web development. Come and take a look at all the great work I've
            done!
          </p>
        </div>
      </div>

      </div>
    );
  }

  function Resume() {
    return (
      <div>
      <div className="resume-section" id="resume">
        <h1 className="resume-h1">Resume</h1>
        <div className="resume-data">
          <ul className="list-group">
            Front End Proficiencies
            <li className="list-group-item">HTML</li>
            <li className="list-group-item">
              JavaScript
            </li>
            <li className="list-group-item">CSS</li>
            <li className="list-group-item">React</li>
            <li className="list-group-item">
              Bootstrap
            </li>
            <li className="list-group-item">jQuery</li>
            
          </ul>
          <ul className="list-group">
            Back End Proficiencies
            <li className="list-group-item ">Node.js</li>
            <li className="list-group-item ">Express.js</li>
            <li className="list-group-item ">MySQL</li>
            <li className="list-group-item ">Sequelize</li>
            <li className="list-group-item ">MongoDB</li>
            <li className="list-group-item ">Mongoose</li>
          </ul>
        </div>
        <button id="resume-btn" type="button" className="btn">
          <a id="resume-btn-link" href={resume} download="resume">
            Resume
          </a>
        </button>
      </div>
      <div className="separator"></div>
      </div>
    );
  }

  function Contact() {
   
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

  return (
    <div>
      {activePage === "About" ? (
        About()
      ) : activePage === "Portfolio" ? (
        <Projects />
      ) : activePage === "Contact" ? (
        Contact()
      ) : activePage === "Resume" ? (
        Resume()
      ) : null}
    </div>
  );
}
