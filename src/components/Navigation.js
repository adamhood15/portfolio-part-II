import Projects from "./Projects";
import Resume from "./Resume";
import About from "./About";
import Contact from "./Contact";

export default function Navigation({ activePage }) {

  return (
    <div>
      {activePage === "About" ? (
        <About />
      ) : activePage === "Portfolio" ? (
        <Projects />
      ) : activePage === "Contact" ? (
        <Contact />
      ) : activePage === "Resume" ? (
        <Resume />
      ) : null}
    </div>
  );
}
