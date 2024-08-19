import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/me.jpg";
import { ArrowDownCircle } from "react-bootstrap-icons";
import { ReactTyped } from "react-typed";
import "../styles/Banner.css";
import TrackVisibility from "react-on-screen";

export default function () {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={12} lg={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              Hi! I'm <span>Abdullah </span>and I'm a{" "}
              <span>
                <ReactTyped
                  strings={["Web Developer"]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                  startDelay={500}
                  backDelay={4000}
                />
              </span>
            </h1>
            <TrackVisibility>
              {({ isVisible }) => (
                <>
                  <div
                    className={
                      isVisible
                        ? "animate__animated animate__fadeIn"
                        : "animate__animated animate__fadeOut"
                    }
                  >
                    <p>
                      My name is Muhammad Abdullah Usman. I'm a dedicated Full
                      Stack Developer specializing in the MERN stack. With a
                      strong focus on React, I build dynamic and responsive web
                      applications from front to back. I'm passionate about
                      creating seamless user experiences and continuously
                      expanding my skills. Let's connect and create impactful
                      solutions together!
                    </p>
                    <a href="/myCV.pdf" download="myCV.pdf">
                      <button>
                        Download My Resume <ArrowDownCircle size={25} />
                      </button>
                    </a>
                  </div>
                </>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={12} lg={5} className="img-container">
            <div className="blob">
              <img src={headerImg} alt="Profile Image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
