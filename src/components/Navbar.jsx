import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Socials from "./Socials";
import logo from "../assets/img/logo.png";
import "../styles/Navbar.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export default function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const updateActiveLink = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Router>
      <Navbar
        expand="lg"
        className={`navbar ${expanded && "navbar-expanded"} ${
          scrolled && "scrolled"
        }`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" id="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-links">
              <Nav.Link
                href="#home"
                className={`nav-link ${activeLink == "home" && "active"}`}
                onClick={() => updateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={`nav-link ${activeLink == "skills" && "active"}`}
                onClick={() => updateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={`nav-link ${activeLink == "projects" && "active"}`}
                onClick={() => updateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <Socials />
              <a href="#connect">
                <button className="connect-btn">Let’s Connect</button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}
