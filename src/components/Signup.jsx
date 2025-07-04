import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Image,
  InputGroup,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import LoginImg from "../Images/login.jpg";
import Footer from "../assets/Footer";
import Header from "../assets/Header";

function Signup() {
  const [validated, setValidated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showOTP, setShowOTP] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <Container>
          <Card className="login-card">
            <Row className="align-items-stretch">
              <Col md={5} className="p-0 d-none d-md-block">
                <Image
                  src={LoginImg}
                  className="img-fluid h-100 w-100 object-fit-cover"
                  style={{
                    borderTopLeftRadius: "0.375rem",
                    borderBottomLeftRadius: "0.375rem",
                  }}
                  alt="login"
                />
              </Col>
              <Col md={7}>
                <div className="login-form">
                  <h3 className="text-center mb-3">Sign Up!</h3>
                  <p className="text-center mb-4 text-muted">
                    Sign Up to your account
                  </p>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row>
                      <Col md={6}>
                        <Form.Label>First Name</Form.Label>
                        <InputGroup className="mb-3">
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter your first name"
                          />
                        </InputGroup>
                      </Col>
                      <Col md={6}>
                        <Form.Label>Last Name</Form.Label>
                        <InputGroup className="mb-3">
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter your last name"
                          />
                        </InputGroup>
                      </Col>
                      <Col md={6}>
                        <Form.Label>Mobile No</Form.Label>
                        <InputGroup className="mb-3">
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter your mobile no"
                          />
                        </InputGroup>
                      </Col>
                      <Col md={6}>
                        <Form.Label>Password</Form.Label>
                        <InputGroup className="mb-3">
                          <Form.Control
                            required
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                          />
                          <InputGroup.Text
                            className="form-icon password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ cursor: "pointer" }}
                          >
                            <FontAwesomeIcon
                              icon={showPassword ? faEye : faEyeSlash}
                            />
                          </InputGroup.Text>
                        </InputGroup>
                      </Col>
                      <Col md={7}>
                        <Form.Label>Email ID</Form.Label>
                        <InputGroup className="mb-3">
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter your email id"
                          />
                          <InputGroup.Text
                            className="form-icon password-toggle"
                            onClick={() => setShowOTP(!showOTP)}
                            style={{ cursor: "pointer" }}
                          >
                            Send OTP
                          </InputGroup.Text>
                        </InputGroup>
                      </Col>

                      {showOTP && (
                        <Col md={5}>
                          <Form.Label>OTP</Form.Label>
                          <InputGroup className="mb-3">
                            <Form.Control
                              required
                              type="text"
                              placeholder="Enter your OTP"
                            />
                          </InputGroup>
                        </Col>
                      )}
                    </Row>

                    <div className="d-grid">
                      <Button
                        className="login-form-btn"
                        type="submit"
                        size="lg"
                      >
                        Submit
                      </Button>
                    </div>
                    <div className="signup text-center mt-3">
                      <div className="divider">
                        <span>Already have an account?</span>
                      </div>
                      <Button
                        as={Link}
                        to="/login"
                        className="sign-up mt-2"
                        size="lg"
                      >
                        Login
                      </Button>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
