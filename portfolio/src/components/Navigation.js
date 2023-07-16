import Header from './Header';
import Footer from './Footer';
import Projects from './Projects';
import React, { useState } from "react";

export default function Navigation() {
  const [page, setPage] = useState('About');
  

  function About() {
    let page = "About";
    return (
      <div className="about-section" id="about">
        <img src="https://via.placeholder.com/150" alt="Adam Hood" />
        <h1>About</h1>
        <p className="about-text">
          Hey there! My name is Adam Hood and I am a Full Stack Web Developer. I
          am currently a student at Rice University's Full Stack Coding Bootcamp
          and will be earning my certificate at the beginning of August 2023.
          <br></br>
          My passion for web development started in the Summer of 2022 when I
          decided to make my own video game. I jumped head first into learning
          C# and after a full summer of learning I decided I wanted to switch
          careers from teaching and go full time into web development.
          <br></br>
          I'm experienced in HTML, CSS, C#, and JavaScript. I've also built
          multiple full stack web applications incorporating Node.js, MySQL,
          Sequelize, and building those applications using a Model View
          Controller architecture. I am an excellent communicator, an extremely
          hard worker, and am eager to learn everything I can about web
          development. Come and take a look at all the great work I've done!
        </p>
      </div>
    );
  }
  

  function Resume() {
    let page = "Resume";
    return (
      <div className="resume-section" id="resume">
        <h1>Resume</h1>
      </div>
    );
  }


function Contact(props) {
  let page = "Contact";

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value} = e.target;
  
    return name === 'name' ? setName(value) : name === 'email' ? setEmail(value) : setMessage(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    props.onSubmit({
      name: name,
      email: email,
      message: message,
    });

    setName('');
    setEmail('');
    setMessage('');
  }

    return (
      <div className="contact" id="contact">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact</h2>
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
            <textarea className="form-control" id="message" name="message" value={message} onChange={handleChange} rows="5">Type message here...</textarea>
          </div>
          <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
};

  return (
    <div>
      <Header page="About"/>
      {page === "Home" && <Home />}
      {page === "About" && About()}
      {page === "Projects" && <Projects />}
      {page === "Resume" && Resume()}
      {page === "Contact" && Contact()}
      <Footer />
    </div>
  );
 

}
