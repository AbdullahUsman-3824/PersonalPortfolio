import { Container, Row, Col } from "react-bootstrap";
import ContactImg from "../assets/img/contact-img.svg";
import { useForm } from "react-hook-form";
import { Alert } from "@mui/material";
import { useState } from "react";
import "../styles/Contact.css";

export default function () {
  const [status, setStatus] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (formDetails) => {
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    reset();
    let result = await response.json();
    if (result.code == 200) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
          <Col md={6}>
            <img src={ContactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get in touch</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col sm={6}>
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    {...register("firstName", { required: true })}
                  />
                </Col>
                <Col sm={6}>
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName")}
                  />
                </Col>
                <Col sm={6}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register("email")}
                  />
                </Col>
                <Col sm={6}>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    {...register("phone", { required: true })}
                  />
                </Col>
                <Col sm={12}>
                  <textarea
                    row="6"
                    placeholder="Message"
                    required
                    {...register("message", { required: true })}
                  />
                  <button type="submit" disabled={isSubmitting}>
                    <span>{isSubmitting ? "Sending" : "Send"}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <Alert severity={status.success ? "success" : "error"}>
                      {status.message}
                    </Alert>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
