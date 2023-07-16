import mealMatch from "../assets/images/mealMatch.png";
import eCommerce from "../assets/images/eCommerce.png";
import movieMatchMaker from "../assets/images/movieMatchMaker.png";
import readMeGenerator from "../assets/images/readMeGenerator.png";
import techBlog from "../assets/images/techBlog.png";
import weatherApp from "../assets/images/weatherApp.png";
// import weddingPhoto from "../assets/images/weddingPhoto.png";

export default function Projects() {
    let projects = [
      {
        title: "Meal Match",
        description:
          "Forget everything you know about Meal Planning. Gone are the days of spending the bulk of your Sunday afternoon trying to figure out what your family wants to eat. No more wasting time putting together a grocery list of all the ingredients you need for each recipe. Let us help you take back your time and never look back.",
        image: mealMatch,
        githubLink: "https://github.com/Phil-Pfister/HWP_Meal-Planner",
        deployedLink: "https://young-gorge-82099.herokuapp.com/",
      },
      {
        title: "Movie Match Maker",
        description:
          "This application is a movie recommendation engine. It uses the latest technologies to ensure that you are getting the best movie recommendations. This application uses React.js, Redux, and the MovieDB API to give you the best movie recommendations.",
        image: movieMatchMaker,
        githubLink: "https://github.com/adamhood15/movie-match-maker",
        deployedLink: "https://adamhood15.github.io/movie-match-maker/",
      },
      {
        title: "Tech Blog",
        description:
          "This application is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This application uses Express.js API and Sequelize to interact with a MySQL database.",
        image: techBlog,
        githubLink: "https://github.com/adamhood15/tech-blog",
        deployedLink: "https://immense-atoll-71315.herokuapp.com/",
      },
      {
        title: "Weather App",
        description:
          "This application is a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. It uses the OpenWeather API to retrieve weather data for cities. This application uses localStorage to store any persistent data.",
        image: weatherApp,
        githubLink: "https://github.com/adamhood15/weather-app",
        deployedLink: "https://adamhood15.github.io/weather-app/",
      },
      {
        title: "Read Me Generator",
        description:
          "This application is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package. This application uses the Inquirer package to prompt the user for their GitHub username and other information pertaining to the project the README is for.",
        image: readMeGenerator,
        githubLink: "https://github.com/adamhood15/readme-generator",
        deployedLink: "",
      },
      {
        title: "E-Commerce Back End",
        description:
          "This application is the back end for an e-commerce site. It uses the latest technologies to ensure that your e-commerce site is running smoothly and efficiently. This application uses Express.js API and Sequelize to interact with a MySQL database.",
        image: eCommerce,
        githubLink: "https://github.com/adamhood15/e-commerce-back-end",
        deployedLink: "",
      },
    ];

    function createProjectCards() {
      return projects.map((project, i) => {
        return (
          <div key={i} id="portfolio" className="card bg-dark text-white">
            <img key={project.image} className="card-img" src={project.image} alt={project.title}></img>
            <div key={project.title} className="card-img-overlay card-info overflow-auto">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <button type="button" className="btn btn-primary btn-sm btn-proj">
                <a className="button-link" target="_blank" href={project.githubLink}>GitHub</a>
              </button>
              <button type="button" className="btn btn-secondary btn-sm btn-proj">
                <a className="button-link" target="_blank" href={project.deployedLink}>Deployed</a>
              </button>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="portfolio" id="portfolio-section">
        <h1 className="portfolio-h1">Portfolio</h1>
        <div className="card-deck">{createProjectCards()}</div>
      </div>
    );
  }