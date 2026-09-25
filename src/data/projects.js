import mealMatch from "../assets/images/mealMatch.png";
import eCommerce from "../assets/images/eCommerce.png";
import movieMatchMaker from "../assets/images/movieMatchMaker.png";
import readMeGenerator from "../assets/images/readMeGenerator.png";
import techBlog from "../assets/images/tech-blog.png";
import weatherApp from "../assets/images/weatherApp.png";
import theMashUp from "../assets/images/theMashUp.png";
import calendarPrimary from "../assets/images/tth-calendar/calendar-00.jpg";
import calendar01 from "../assets/images/tth-calendar/calendar-01.jpg";
import calendar02 from "../assets/images/tth-calendar/calendar-02.jpg";
import calendar03 from "../assets/images/tth-calendar/calendar-03.jpg";
import promo01 from "../assets/images/promos/promo-01.jpg";
import promo02 from "../assets/images/promos/promo-02.jpg";
import promo03 from "../assets/images/promos/promo-03.jpg";
import daytonaPrimary from "../assets/images/daytona/daytona-redesign-00.jpg";
import daytona01 from "../assets/images/daytona/daytona-redesign-01.jpg";
import daytona02 from "../assets/images/daytona/daytona-redesign-02.jpg";
import daytona04 from "../assets/images/daytona/daytona-redesign-04.jpg";
import daytona05 from "../assets/images/daytona/daytona-redesign-05.jpg";
import pyekPrimary from "../assets/images/pyek/pyek-website-00.jpg";
import pyek01 from "../assets/images/pyek/pyek-website-01.jpg";
import pyek02 from "../assets/images/pyek/pyek-website-02.jpg";
import pyek03 from "../assets/images/pyek/pyek-website-03.jpg";
import pyek04 from "../assets/images/pyek/pyek-website-04.jpg";
import pyek05 from "../assets/images/pyek/pyek-website-05.jpg";
import pyek06 from "../assets/images/pyek/pyek-website-06.jpg";
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
    stat: { value: "1,000+", label: "New SMS Subscribers" },
    story: [
      {
        heading: "The Challenge",
        icon: "fa-solid fa-bullseye",
        quote: "Not a sign-up form. An experience worth signing up for.",
        paragraphs: [
          "In 2026, Typhoon Texas wanted to expand the ways we connected with our guests by reaching them through the channels they actually preferred.",
          "We were already using Mailchimp for email marketing, so SMS was a natural next step. But we didn't want to launch the program with a giant sign that essentially said, \"Please sign up for our text messages—we promise they're worth your time!\"",
          "We wanted to give people a real reason to sign up—something engaging, unexpected, and genuinely fun.",
        ],
      },
      {
        heading: "The Idea",
        icon: "fa-solid fa-lightbulb",
        quote: "It wasn't pretty — but it proved the concept.",
        paragraphs: [
          "I've always been an avid gamer, and building my own video game had been something I wanted to tackle for years.",
          "This campaign gave me the perfect opportunity.",
          "Instead of simply asking guests to join our SMS list, what if we gave them access to a Typhoon Texas game in return?",
          "Working in tandem with AI, I started building a prototype for what would eventually become Stampede: Wild Rush.",
          "The first version wasn't particularly pretty or polished—but it worked. That was enough to prove the concept, and from there, I got to work turning a simple prototype into a complete experience.",
        ],
      },
      {
        heading: "The Build",
        icon: "fa-solid fa-code",
        quote: "One canvas. Infinite slide. Zero frameworks.",
        paragraphs: [
          "The entire game was built from scratch using HTML, CSS, and JavaScript.",
        ],
        bullets: [
          "A 2D canvas layers PNG assets while continuously generating new sections of waterslide — creating the illusion of racing down one long, uninterrupted slide",
          "Every run is randomized: obstacles, collectibles, and other riders differ each time, so no two runs play the same",
          "Scores submit to a custom-built Redis leaderboard hosted on Railway, where players can see how they stack up",
          "Combined game development, UI/UX, illustration, animation, backend development, and AI-assisted workflows into a single experience",
        ],
      },
      {
        heading: "The Results",
        icon: "fa-solid fa-chart-line",
        quote: "1,000+ subscribers in two weeks — and a brand experience nobody expected.",
        paragraphs: [
          "The campaign went off without a hitch. Within the first two weeks of launch, more than 1,000 people joined the Typhoon Texas SMS program — but the project accomplished more than growing a subscriber list.",
        ],
        bullets: [
          "Guests got something immediate in return, not just the promise of future marketing messages: a unique, interactive experience built specifically for the Typhoon Texas brand",
          "What began as a new way to grow our SMS audience became something bigger — a chance to combine marketing, development, design, gaming, and AI into an experience our guests had never seen from us before",
        ],
      },
    ],
    tech: ["JavaScript", "HTML5 Canvas", "Node.js", "Express", "Redis", "WordPress"],
    skills: [
      "Game Development",
      "UI/UX Design",
      "Illustration & Animation",
      "AI-Assisted Development",
      "Backend Development",
      "QA & Test Automation",
    ],
    deployedLink: "https://typhoontexas.com/stampede-wild-rush/play/",
    githubLink: "https://github.com/adamhood15/stampede",
  },
  {
    title: "Daytona Lagoon Website Redesign",
    date: "June 2026",
    id: "daytonaLagoonWebsiteRedesign",
    thumbnail: daytonaPrimary,
    images: [daytona02, daytona01, daytona04, daytona05],
    description:
      "When Pyek acquired Daytona Lagoon, we had one month to completely reimagine its website — from information architecture to launch.",
    stat: { value: "+37K", label: "Active Users" },
    story: [
      {
        heading: "The Challenge",
        icon: "fa-solid fa-bullseye",
        quote: "One acquisition. One month. One completely new website.",
        paragraphs: [
          "Early in 2026, we learned that Pyek was in the process of acquiring Daytona Lagoon, a waterpark in Daytona Beach, Florida.",
          "By May, conversations had gotten serious—and things started moving fast.",
          "I was pulled into my boss's office and told point blank: the acquisition was happening, and we needed to completely overhaul the park's website in one month.",
          "After picking my jaw up off the floor, I got to work.",
          "The existing website was built in Squarespace and had some major challenges. It was difficult to navigate, lacked a clear information hierarchy, and visually didn't reflect the experience we wanted guests to associate with the park.",
          "We had one month to rethink it from the ground up.",
        ],
      },
      {
        heading: "The Strategy",
        icon: "fa-solid fa-lightbulb",
        quote: "\"Man, this park looks incredible. Let's grab our tickets.\"",
        paragraphs: [
          "Before touching the design, I needed to figure out exactly what this website needed to accomplish.",
          "I started asking questions—and lots of them.",
        ],
        bullets: [
          "What information should guests see immediately on the homepage?",
          "How should pages and content be organized?",
          "What structure makes sense for both traditional search engines and the growing number of AI platforms driving discovery and referrals?",
        ],
      },
      {
        heading: "The Build",
        icon: "fa-solid fa-code",
        quote: "Consistency wasn't just easier to build — it was easier for the whole team to maintain.",
        paragraphs: [
          "Once the structure and visual direction were established, it was time to move fast.",
          "I rebuilt Daytona Lagoon's website on WordPress, keeping it consistent with the rest of our website ecosystem. That familiarity was important—not just for development, but so other members of our team could confidently make updates when something needed to change on the fly.",
        ],
        bullets: [
          "Clearer navigation and stronger visual storytelling",
          "Better content hierarchy across every page",
          "A much more modern representation of the park",
        ],
      },
      {
        heading: "QA & Launch",
        icon: "fa-solid fa-rocket",
        quote: "Every page. Every image. Every line of copy.",
        paragraphs: [
          "Before launch, I created a QA process that allowed our team to review every page, image, and line of copy across multiple screen sizes.",
          "While the broader team focused on brand consistency, imagery, and copy, I worked through the technical side of the launch.",
        ],
        bullets: [
          "Reviewed accessibility against WCAG standards",
          "Implemented Google Analytics tracking",
          "Tested responsive behavior across screen sizes",
          "Made final adjustments to get the site launch-ready",
        ],
      },
      {
        heading: "The Results",
        icon: "fa-solid fa-chart-line",
        quote: "+37K active users. +30K new users. +700K tracked events.",
        paragraphs: [
          "The impact was immediate. Within the first month after launch, compared with the prior period, the new Daytona Lagoon website saw a surge across every core metric.",
        ],
        bullets: [
          "+37K active users",
          "+30K new users",
          "+700K tracked events",
        ],
      },
    ],
    tech: ["WordPress", "HTML", "CSS", "JavaScript"],
    skills: ["Web Design", "WordPress Development", "Brand Implementation", "Project Management"],
    deployedLink: "https://daytonalagoon.com/",
  },
  {
    title: "Typhoon Texas Events Calendar",
    date: "February 2025",
    id: "typhoonTexasEventsCalendar",
    thumbnail: calendarPrimary,
    images: [calendar01, calendar02, calendar03],
    description:
      "A custom-built, full-featured events and operations calendar for Typhoon Texas Waterparks, dynamically pulling event and operating-hours data.",
    highlights: [
      "Responsive, rolling calendar interface built with PHP, HTML, CSS, and JavaScript",
      "Updates in real time based on seasonal schedules and special events",
      "Optimized for both desktop and mobile, built with maintainability in mind",
    ],
    tech: ["PHP", "HTML", "CSS", "JavaScript"],
    skills: ["Full-Stack Development", "UX Research & Testing", "API Integration", "Responsive Design"],
    deployedLink: "https://typhoontexas.com/houston/hours-and-location/",
  },
  {
    title: "Pyek Group Website Expansion",
    date: "December 2024",
    id: "pyekGroupWebsiteExpansion",
    thumbnail: pyekPrimary,
    images: [pyek05, pyek04, pyek03, pyek02, pyek01, pyek06],
    description:
      "In 2024, Pyek Group absorbed two additional divisions — Pyek Capital and Pyek Financial. Our team incorporated both into a single, unified web experience.",
    highlights: [
      "Expanded the site from a single landing page to a near 50-page unified experience in 2 months",
      "Increased traffic to the Pyek Corporate site by 40%",
      "Met every deadline while exceeding performance and UX targets",
    ],
    tech: ["WordPress", "HTML", "CSS", "JavaScript"],
    skills: [
      "Web Development",
      "Information Architecture",
      "Cross-Team Collaboration",
      "Performance Optimization",
    ],
    deployedLink: "https://pyek.com/",
  },
  {
    title: "Typhoon Texas Promotion Page Redesign",
    date: "November 2024",
    id: "typhoonTexasPromotionPageRedesign",
    thumbnail: promo01,
    images: [promo02, promo03],
    description:
      "A complete redesign of the Typhoon Texas promotion page to improve user engagement and conversion rates.",
    highlights: [
      "Drove a 37% increase in conversion rates from 2024 to 2025",
      "Modernized, mobile-friendly interface built for fast seasonal turnaround",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    skills: ["Conversion Rate Optimization", "UI Design", "A/B Testing", "Rapid Prototyping"],
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
