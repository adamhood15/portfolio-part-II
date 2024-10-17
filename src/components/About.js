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
          I’m Adam Hood, a Junior Web Developer based in Houston, TX, with a passion for creating streamlined and effective digital solutions. Currently, I work at Love Advertising, where I’ve had the opportunity to develop and deploy hundreds of emails using HTML and CSS with a 98.5% success rate. I've also focused on team development by creating onboarding materials and helping train junior developers, helping to establish a smoother workflow for the email department.
<br></br>
<br></br>
My expertise spans a variety of frontend technologies, including HTML5, CSS, jQuery, JavaScript, Bootstrap, and MJML, while on the backend, I work with Node.js, Express, and C#. This combination of skills allows me to create robust, user-friendly applications and enhance email performance and engagement. Additionally, I have experience leveraging SQL to segment data extensions in Salesforce, optimizing email sends and targeting.
<br></br>
<br></br>
In my personal projects, I’ve built full-stack applications like a scalable web app for meal planning, which utilizes third-party APIs and a MySQL database to help users save time during meal preparation. I also enjoy working on Unity game design, where I develop interactive experiences using C#. Through all my projects, I strive to create solutions that are efficient, scalable, and tailored to user needs.
          </p>
        </div>
      </div>

      </div>
    );
  }