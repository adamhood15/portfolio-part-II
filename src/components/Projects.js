import mealMatch from "../assets/images/mealMatch.png";
import eCommerce from "../assets/images/eCommerce.png";
import movieMatchMaker from "../assets/images/movieMatchMaker.png";
import readMeGenerator from "../assets/images/readMeGenerator.png";
import techBlog from "../assets/images/techBlog.png";
import weatherApp from "../assets/images/weatherApp.png";
import theMashUp from "../assets/images/theMashUp.png";

export default function Projects() {
    let projects = [
      {
        title: "Meal Match",
        id: "mealMatch",
        description:
          "Forget everything you know about Meal Planning. Gone are the days of spending the bulk of your Sunday afternoon trying to figure out what your family wants to eat. No more wasting time putting together a grocery list of all the ingredients you need for each recipe. Let us help you take back your time and never look back.",
        image: mealMatch,
        githubLink: "https://github.com/Phil-Pfister/HWP_Meal-Planner",
        deployedLink: "https://young-gorge-82099.herokuapp.com/",
      },
      {
        title: "Movie Match Maker",
        id: "movieMatchMaker",
        description:
          "This application is a movie recommendation engine. It uses the latest technologies to ensure that you are getting the best movie recommendations. This application uses React.js, Redux, and the MovieDB API to give you the best movie recommendations.",
        image: movieMatchMaker,
        githubLink: "https://github.com/adamhood15/movie-match-maker",
        deployedLink: "https://adamhood15.github.io/movie-match-maker/",
      },
      {
        title: "Tech Blog",
        id: "techBlog",
        description:
          "This application is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This application uses Express.js API and Sequelize to interact with a MySQL database.",
        image: techBlog,
        githubLink: "https://github.com/adamhood15/tech-blog",
        deployedLink: "https://immense-atoll-71315.herokuapp.com/",
      },
      {
        title: "Weather App",
        id: "weatherApp",
        description:
          "This application is a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. It uses the OpenWeather API to retrieve weather data for cities. This application uses localStorage to store any persistent data.",
        image: weatherApp,
        githubLink: "https://github.com/adamhood15/weather-app",
        deployedLink: "https://adamhood15.github.io/weather-app/",
      },
      {
        title: "Read Me Generator",
        id: "readMeGenerator",
        description:
          "This application is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package. This application uses the Inquirer package to prompt the user for their GitHub username and other information pertaining to the project the README is for.",
        image: readMeGenerator,
        githubLink: "https://github.com/adamhood15/readme-generator",
        deployedLink: "",
      },
      {
        title: "E-Commerce Back End",
        id: "eCommerce",
        description:
          "This application is the back end for an e-commerce site. It uses the latest technologies to ensure that your e-commerce site is running smoothly and efficiently. This application uses Express.js API and Sequelize to interact with a MySQL database.",
        image: eCommerce,
        githubLink: "https://github.com/adamhood15/e-commerce-back-end",
        deployedLink: "",
      },
      {
        title: "The Mash Up",
        id: "theMashUp",
        description: "This application is a e-commerce platform for users to buy and sell music items online. It uses the latest technologies to ensure that your e-commerce site is running smoothly and efficiently",
        image: theMashUp,
        githubLink: "https://github.com/Phil-Pfister/The-Mash-Up",
        deployedLink: "https://the-mash-up-b8a52234a88b.herokuapp.com/",
      }
    ];

    function createProjectCards() {
      return projects.map((project, i) => {
        return (
          
          <div key={i} id="portfolio" className="card bg-dark text-white">
            <img key={project.image} className="card-img" src={project.image} alt={project.title}></img>
            <div key={project.title} id={project.id} className="card-img-overlay card-info overflow-auto">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
                <a className="button-link" target="_blank" href={project.githubLink}><i id="portfolio-github" className="icon fa-brands fa-github"></i></a>
                <a className="button-link" target="_blank" href={project.deployedLink}><i className="fa-solid fa-display"></i></a>
            </div>
          </div>
          
        );
      });
    }

    return (
      <div>
      <div className="portfolio" id="portfolio-section">
        <h1 className="portfolio-h1">Portfolio</h1>
        <div className="cards">{createProjectCards()}</div>
        </div>
        <div className="separator-projects"></div>
      </div>
    );
  }