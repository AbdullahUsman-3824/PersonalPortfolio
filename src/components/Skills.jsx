import { Container, Row, Col } from "react-bootstrap";
import "../styles/Skills.css";
import colorSharp from "../assets/img/color-sharp.png";

// Logos import
import htmlLogo from "../assets/img/logos/html.png";
import cssLogo from "../assets/img/logos/css.png";
import jsLogo from "../assets/img/logos/js.png";
import reactLogo from "../assets/img/logos/react.png";
import bootstrapLogo from "../assets/img/logos/bootstrap.png";
import tailwindLogo from "../assets/img/logos/tailwind.png";
import MUILogo from "../assets/img/logos/MUI.png";
import nodeLogo from "../assets/img/logos/node.png";
import expressLogo from "../assets/img/logos/express.png";
import mongodbLogo from "../assets/img/logos/mongodb.png";
import gitLogo from "../assets/img/logos/git.png";
import githubLogo from "../assets/img/logos/github.png";
import vscodeLogo from "../assets/img/logos/vscode.png";

export default function () {
  return (
    <section id="skills">
      <Container className="skills">
        <h2>Skills</h2>
        <p>These are the skills that I currently have:</p>
        <Col className="skills-container mx-auto" xs={12} md={8}>
          <h5>Front-End Technologies:</h5>
          <Row className="skill-set">
            <Col xs={6} md={3} className="skill-item">
              <img src={htmlLogo} alt="HTML" className="skill-logo" />
              <h6>HTML</h6>
            </Col>
            <Col xs={6} md={3} className="skill-item">
              <img src={cssLogo} alt="CSS" className="skill-logo" />
              <h6>CSS</h6>
            </Col>
            <Col xs={6} md={3} className="skill-item">
              <img src={jsLogo} alt="JavaScript" className="skill-logo" />
              <h6>JavaScript</h6>
            </Col>
            <Col xs={6} md={3} className="skill-item">
              <img src={reactLogo} alt="React" className="skill-logo" />
              <h6>React</h6>
            </Col>
          </Row>
          <h5>Front-End Frameworks:</h5>
          <Row className="skill-set">
            <Col xs={6} md={3} className="skill-item">
              <img src={bootstrapLogo} alt="Bootstrap" className="skill-logo" />
              <h6>Bootstrap</h6>
            </Col>
            <Col xs={6} md={3} className="skill-item">
              <img
                src={tailwindLogo}
                alt="Tailwind CSS"
                className="skill-logo"
              />
              <h6>Tailwind CSS</h6>
            </Col>
            <Col xs={6} md={3} className="skill-item">
              <img src={MUILogo} alt="Material UI" className="skill-logo" />
              <h6>Material UI</h6>
            </Col>
          </Row>
          <h5>Back-End Technologies:</h5>
          <Row className="skill-set">
            <Col xs={6} md={3} className="skill-item">
              <img src={nodeLogo} alt="NodeJs" className="skill-logo" />
              <h6>NodeJs</h6>
            </Col>
            <Col xs={6} md={3} className="skill-item">
              <img src={expressLogo} alt="ExpressJs" className="skill-logo" />
              <h6>ExpressJs</h6>
            </Col>
            <Col xs={6} md={3} className="skill-item">
              <img src={mongodbLogo} alt="MongoDB" className="skill-logo" />
              <h6>MongoDB</h6>
            </Col>
          </Row>
          <h5>Tools:</h5>
          <Row className="skill-set">
            <Col xs={6} md={3} className="skill-item">
              <img src={gitLogo} alt="Git" className="skill-logo" />
              <h6>Git</h6>
            </Col>
            <Col xs={6} md={3} className="skill-item">
              <img src={githubLogo} alt="GitHub" className="skill-logo" />
              <h6>GitHub</h6>
            </Col>
            <Col xs={6} md={3} className="skill-item">
              <img src={vscodeLogo} alt="VS Code" className="skill-logo" />
              <h6>VS Code</h6>
            </Col>
          </Row>
        </Col>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
