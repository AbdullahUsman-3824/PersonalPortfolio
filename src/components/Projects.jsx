import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projects from "../assets/projects.json";
import ProjectCard from "./ProjectCard";
import "../styles/Project.css";
import colorSharp2 from "../assets/img/color-sharp2.png";

export default function () {
  const frontEndProjects = projects.FrontEndProjects;
  const backEndProjects = projects.BackEndProjects;

  return (
    <section id="projects" className="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>These are the projects that I currently have:</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Front End</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" id="secondItem">
                    Full Stack
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Container>
                    <Row>
                      {frontEndProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </Row>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Container>
                    <Row>
                      {backEndProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </Row>
                  </Container>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
