import Projects from "./Projects";
import React, { useState } from "react";
import weddingPhoto from "../assets/images/weddingPhoto.jpeg";
import resume from "../assets/resume/resume.pdf";
import {validateEmail} from "../utils/helpers";

export default function Navigation({ pages, setActivePage, activePage }) {
  function About() {
    return (
      <div className="about-section" id="about">
        <img id="about-img" src={weddingPhoto} alt="Adam Hood" />
        <div className="about-info">
          <h1>About</h1>
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
    );
  }

  function Resume() {
    return (
      <div className="resume-section" id="resume">
        <h1>Resume</h1>
        <div className="resume-data">
          <ul className="list-group">
            Front End Proficiencies
            <li className="list-group-item list-group-item-success">HTML</li>
            <li className="list-group-item list-group-item-success">
              JavaScript
            </li>
            <li className="list-group-item list-group-item-success">CSS</li>
            <li className="list-group-item list-group-item-success">React</li>
            <li className="list-group-item list-group-item-success">
              Bootstrap
            </li>
            <li className="list-group-item list-group-item-success">jQuery</li>
            <li className="list-group-item list-group-item-success">
              Handlebars
            </li>
          </ul>
          <ul className="list-group">
            Back End Proficiencies
            <li className="list-group-item list-group-item-info">Node.js</li>
            <li className="list-group-item list-group-item-info">Express.js</li>
            <li className="list-group-item list-group-item-info">MySQL</li>
            <li className="list-group-item list-group-item-info">Sequelize</li>
            <li className="list-group-item list-group-item-info">MongoDB</li>
            <li className="list-group-item list-group-item-info">Mongoose</li>
            <li className="list-group-item list-group-item-info">GraphQL</li>
          </ul>
        </div>
        <button id="resume-btn" type="button" class="btn">
          <a id="resume-btn-link" href={resume} download="resume">
            Resume
          </a>
        </button>
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
    );
  }

  return (
    <div>
      {activePage === pages[0] ? (
        About()
      ) : activePage === pages[1] ? (
        <Projects />
      ) : activePage === pages[2] ? (
        Contact()
      ) : activePage === pages[3] ? (
        Resume()
      ) : null}
    </div>
  );
}
