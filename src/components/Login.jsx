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
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import LoginImg from "../Images/login.jpg";
import { Link,useNavigate  } from "react-router-dom";
import Header from "../assets/Header";
import Footer from "../assets/Footer";

export default function Login() {
   const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    navigate("/profile");
  };

  return (
    <>
    <Header />
     <div className="login-container">
      <Container>
        <Card className="login-card">
          <Row className="align-items-stretch">
              <Col md={7} className="p-0 d-none d-md-block">
              <Image
                src={LoginImg}
                className="img-fluid h-100 w-100 object-fit-cover"
                style={{ borderTopLeftRadius: "0.375rem", borderBottomLeftRadius: "0.375rem" }}
                alt="login"
              />
            </Col>
            <Col md={5}>
              <div className="login-form">
                <h3 className="text-center mb-2">Welcome Back!</h3>
                <p className="text-center mb-4 text-muted">
                  Login to your account
                </p>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Label>Username / Email</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="form-icon">
                      <FontAwesomeIcon icon={faUser} />
                    </InputGroup.Text>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your username or email"
                    />
                  </InputGroup>

                  <Form.Label>Password</Form.Label>
                  <InputGroup className="mb-4">
                    <InputGroup.Text className="form-icon">
                      <FontAwesomeIcon icon={faLock} />
                    </InputGroup.Text>
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

                  <div className="d-grid">
                    <Button className="login-form-btn" type="submit" size="lg">
                      Login
                    </Button>
                  </div>
                  <div className="signup text-center mt-3">
                    <div class="divider">
                      <span>or continue with</span>
                    </div>
                    <Button as={Link} to="/sign-up" className="sign-up mt-2" size="lg">
                      Sign Up
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
