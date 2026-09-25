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
          I'm Adam Hood, a Web Developer based in Houston, TX, with a focus on building delightful, modern, efficient, user-friendly digital experiences.
<br></br>
<br></br>
In addition to web development, I reworked and streamlined email templates to improve rendering across major clients, leading to a 32.9% increase in click rates and an 8.6% boost in open rates. I regularly run A/B tests and performance reviews on landing pages, which have helped improve conversion rates by an average of 7%.
<br></br>
<br></br>
Before Pyek, I worked at Love Advertising, where I developed over 180 emails with a 98.5% accuracy rate using HTML and CSS. I collaborated with designers and marketers to deliver award-winning campaigns for brands like Phillips 66 and Typhoon Texas. I also created onboarding guides and helped train junior developers, improving our team’s workflow and onboarding speed.
<br></br>
<br></br>
My skill set includes HTML5, CSS, JavaScript, jQuery, Bootstrap, MJML, Node.js, Express, C#, and SQL. I’ve also built full-stack apps for personal projects, like a meal planning platform that integrates third-party APIs and a MySQL database. In my spare time, I explore game design in Unity using C#, always looking for new ways to sharpen my problem-solving skills and build better digital experiences.
          </p>
        </div>
      </div>

      </div>
    );
  }