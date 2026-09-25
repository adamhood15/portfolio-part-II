import mealMatch from "../assets/images/mealMatch.png";
import eCommerce from "../assets/images/eCommerce.png";
import movieMatchMaker from "../assets/images/movieMatchMaker.png";
import readMeGenerator from "../assets/images/readMeGenerator.png";
import techBlog from "../assets/images/tech-blog.png";
import weatherApp from "../assets/images/weatherApp.png";
import theMashUp from "../assets/images/theMashUp.png";
import tthCalendar from "../assets/images/tth-calendar.jpeg";
import ttPromoPage from "../assets/images/typhoon-texas-promotions-page.png";
import daytonaHero from "../assets/images/daytona-hero.jpg";
import daytonaWelcome from "../assets/images/daytona-welcome.jpg";
import daytonaTicketsPasses from "../assets/images/daytona-tickets-passes.jpg";
import daytonaTicketsDay from "../assets/images/daytona-tickets-day.jpg";
import daytonaEventsDeals from "../assets/images/daytona-events-deals.jpg";
import daytonaFaq from "../assets/images/daytona-faq.jpg";
import daytonaNewsletterFooter from "../assets/images/daytona-newsletter-footer.jpg";
import pyekHero from "../assets/images/pyek-hero.jpg";
import pyekServices from "../assets/images/pyek-services.jpg";
import pyekActionPhoto from "../assets/images/pyek-action-photo.jpg";
import pyekQuote from "../assets/images/pyek-quote.jpg";
import pyekBrandsFooter from "../assets/images/pyek-brands-footer.jpg";
import pyekAboutHero from "../assets/images/pyek-about-hero.jpg";
import pyekLeadershipIntro from "../assets/images/pyek-leadership-intro.jpg";
import pyekTeam from "../assets/images/pyek-team.jpg";
import pyekContactFooter from "../assets/images/pyek-contact-footer.jpg";
import stampedeHero from "../assets/images/stampede-wild-rush.png";
import stampedePlaying1 from "../assets/images/stampede-wild-rush-playing-1.png";
import stampedePlaying2 from "../assets/images/stampede-wild-rush-playing-02.png";
import stampedePlaying3 from "../assets/images/stampede-wild-rush-playing-03.png";
import stampedePlaying4 from "../assets/images/stampede-wild-rush-playing-04.png";

const professionalProjectsRaw = [
  {
    title: "Stampede Wild Rush Video Game",
    date: "August 2026",
    id: "stampedeWildRushVideoGame",
    images: [stampedeHero, stampedePlaying1, stampedePlaying2, stampedePlaying3, stampedePlaying4],
    description:
      "A browser-based water-slide runner game built as a promotional, lead-gen piece for Typhoon Texas water park, gated behind an email/SMS signup funnel.",
    highlights: [
      "Vanilla JavaScript + HTML5 Canvas — no framework, single-file architecture (~2,400 lines) handling rendering, physics, animation, audio, and HUD",
      "Node/Express + Redis leaderboard service deployed on Railway",
      "Custom WordPress plugin powering the signup-gate funnel with Mailchimp-backed lead capture",
      "25+ custom headless Chrome test scripts for real browser automation of gameplay, audio, and leaderboard behavior",
    ],
    tech: ["JavaScript", "HTML5 Canvas", "Node.js", "Express", "Redis", "WordPress"],
    deployedLink: "https://typhoontexas.com/stampede-wild-rush/play/",
    githubLink: "https://github.com/adamhood15/stampede",
  },
  {
    title: "Daytona Lagoon Website Redesign",
    date: "June 2026",
    id: "daytonaLagoonWebsiteRedesign",
    images: [
      daytonaHero,
      daytonaWelcome,
      daytonaTicketsPasses,
      daytonaTicketsDay,
      daytonaEventsDeals,
      daytonaFaq,
      daytonaNewsletterFooter,
    ],
    description:
      "A complete redesign of the Daytona Lagoon web experience from the ground up after Pyek Group took over the Daytona Lagoon Family Entertainment Center in June 2026.",
    highlights: [
      "Rebuilt the site end-to-end under Pyek Group's new ownership and branding",
    ],
    tech: ["WordPress", "HTML", "CSS", "JavaScript"],
    deployedLink: "https://daytonalagoon.com/",
  },
  {
    title: "Typhoon Texas Events Calendar",
    date: "February 2025",
    id: "typhoonTexasEventsCalendar",
    images: [tthCalendar],
    description:
      "A custom-built, full-featured events and operations calendar for Typhoon Texas Waterparks, dynamically pulling event and operating-hours data.",
    highlights: [
      "Responsive, rolling calendar interface built with PHP, HTML, CSS, and JavaScript",
      "Updates in real time based on seasonal schedules and special events",
      "Optimized for both desktop and mobile, built with maintainability in mind",
    ],
    tech: ["PHP", "HTML", "CSS", "JavaScript"],
    deployedLink: "https://typhoontexas.com/houston/hours-and-location/",
  },
  {
    title: "Pyek Group Website Expansion",
    date: "December 2024",
    id: "pyekGroupWebsiteExpansion",
    images: [
      pyekHero,
      pyekServices,
      pyekActionPhoto,
      pyekQuote,
      pyekBrandsFooter,
      pyekAboutHero,
      pyekLeadershipIntro,
      pyekTeam,
      pyekContactFooter,
    ],
    description:
      "In 2024, Pyek Group absorbed two additional divisions — Pyek Capital and Pyek Financial. Our team incorporated both into a single, unified web experience.",
    highlights: [
      "Expanded the site from a single landing page to a near 50-page unified experience in 2 months",
      "Increased traffic to the Pyek Corporate site by 40%",
      "Met every deadline while exceeding performance and UX targets",
    ],
    tech: ["WordPress", "HTML", "CSS", "JavaScript"],
    deployedLink: "https://pyek.com/",
  },
  {
    title: "Typhoon Texas Promotion Page Redesign",
    date: "November 2024",
    id: "typhoonTexasPromotionPageRedesign",
    images: [ttPromoPage],
    description:
      "A complete redesign of the Typhoon Texas promotion page to improve user engagement and conversion rates.",
    highlights: [
      "Drove a 37% increase in conversion rates from 2024 to 2025",
      "Modernized, mobile-friendly interface built for fast seasonal turnaround",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    deployedLink: "https://typhoontexas.com/promotions/tth-stampede-wild-rush/",
  },
];

export const professionalProjects = [...professionalProjectsRaw].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

export const personalProjects = [
  {
    title: "The Mash Up",
    date: "June 2022",
    id: "theMashUp",
    description: "The Mash Up is an e-commerce application that allows users to sign up, login, shop for music related products, add them to their cart, and checkout. As well as post user generated items for sale. The application is built using React, Vite, Apollo Server, and GraphQL.",
    image: theMashUp,
    githubLink: "https://github.com/adamhood15/the-mash-up",
    deployedLink: "",
  },
  {
    title: "Movie Match Maker",
    date: "March 2022",
    id: "movieMatchMaker",
    description:
      "This application is a movie recommendation engine. It uses the latest technologies to ensure that you are getting the best movie recommendations. This application uses React.js, Redux, and the MovieDB API to give you the best movie recommendations.",
    image: movieMatchMaker,
    githubLink: "https://github.com/adamhood15/movie-match-maker",
    deployedLink: "https://adamhood15.github.io/movie-match-maker/",
  },
  {
    title: "Meal Match",
    date: "May 2022",
    id: "mealMatch",
    description:
      "Forget everything you know about Meal Planning. Gone are the days of spending the bulk of your Sunday afternoon trying to figure out what your family wants to eat. No more wasting time putting together a grocery list of all the ingredients you need for each recipe. Let us help you take back your time and never look back.",
    image: mealMatch,
    githubLink: "https://github.com/Phil-Pfister/HWP_Meal-Planner",
    deployedLink: "",
  },
  {
    title: "Tech Blog",
    date: "March 2022",
    id: "techBlog",
    description:
      "This application is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This application uses Express.js API and Sequelize to interact with a MySQL database.",
    image: techBlog,
    githubLink: "https://github.com/adamhood15/tech-blog",
    deployedLink: "",
  },
  {
    title: "Weather App",
    date: "February 2022",
    id: "weatherApp",
    description:
      "This application is a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. It uses the OpenWeather API to retrieve weather data for cities. This application uses localStorage to store any persistent data.",
    image: weatherApp,
    githubLink: "https://github.com/adamhood15/weather-app",
    deployedLink: "https://adamhood15.github.io/weather-app/",
  },
  {
    title: "Read Me Generator",
    date: "March 2022",
    id: "readMeGenerator",
    description:
      "This application is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package. This application uses the Inquirer package to prompt the user for their GitHub username and other information pertaining to the project the README is for.",
    image: readMeGenerator,
    githubLink: "https://github.com/adamhood15/readme-generator",
    deployedLink: "",
  },
  {
    title: "E-Commerce Back End",
    date: "April 2022",
    id: "eCommerce",
    description:
      "This application is the back end for an e-commerce site. It uses the latest technologies to ensure that your e-commerce site is running smoothly and efficiently. This application uses Express.js API and Sequelize to interact with a MySQL database.",
    image: eCommerce,
    githubLink: "https://github.com/adamhood15/e-commerce-back-end",
    deployedLink: "",
  },
];

export const allProjects = [
  ...professionalProjects.map((project) => ({ ...project, category: "professional" })),
  ...personalProjects.map((project) => ({
    ...project,
    category: "personal",
    images: [project.image],
  })),
].sort((a, b) => new Date(b.date) - new Date(a.date));
