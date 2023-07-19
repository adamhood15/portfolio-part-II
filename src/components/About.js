import headshot from "../assets/images/headshot.jpg";

export default function About() {
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