import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { useForm } from "react-hook-form";
import { Alert } from "@mui/material";
import { useState } from "react";
import "../styles/Contact.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

// Extract environment variables
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function () {
  const [status, setStatus] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (formDetails) => {
    const newEmail = {
      from_name: formDetails.firstName + " " + formDetails.lastName,
      phone: formDetails.phone,
      email: formDetails.email,
      message: formDetails.message,
    };
    try {
      await emailjs.send(serviceID, templateID, newEmail, publicKey);
      setStatus({ success: true, message: "Message sent successfully" });
    } catch (err) {
      console.log("ERROR", err);
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
    reset();
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
          <Col md={6} className="contactLeft">
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col md={6} className="contactRight">
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
