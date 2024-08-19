import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import Socials from "./Socials";
import "../styles/Footer.css";

export default function () {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" id="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <Socials />
            <p>&#169; Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
