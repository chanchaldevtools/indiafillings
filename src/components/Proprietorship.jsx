import React from "react";
import Header from "../assets/Header";
import Footer from "../assets/Footer";
import { useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Image,
  Breadcrumb,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import DetailImg from "../Images/detail.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

function Proprietorship() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <Header />

      <div className="all-details">
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link as={Link} to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link as={Link} to="/startup">Startup</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Proprietorship</Breadcrumb.Item>
          </Breadcrumb>

          <Row>
            <Col md={8}>
              <Card className="details-card">
                <Row>
                  <Col md={5}>
                    <Image src={DetailImg} fluid></Image>
                  </Col>
                  <Col md={7}>
                    <h4>Proprietorship</h4>
                    <span>
                      <FontAwesomeIcon icon={faStar} />{" "}
                      <FontAwesomeIcon icon={faStar} />{" "}
                      <FontAwesomeIcon icon={faStar} />{" "}
                      <FontAwesomeIcon icon={faStarHalf} />
                    </span>
                    <p>
                      Assistance for GST registration with 1 year LEDGERS
                      Accounting software license for Invoicing, GST E-invoicing
                      and GST filing through LEDGERS.
                    </p>

                    <Form.Select aria-label="Default select example">
                      <option value="GST Software & Registration">
                        GST Software & Registration
                      </option>
                      <option value="GST Filing & Registration - 6 Months">
                        GST Filing & Registration - 6 Months
                      </option>
                      <option value="GST Filing & Registration - 12 Months">
                        GST Filing & Registration - 12 Months
                      </option>
                    </Form.Select>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="details-card">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Control
                    type="text"
                    name="Name"
                    className="mb-3"
                    placeholder="Name"
                    required
                  />

                  <Form.Control
                    type="email"
                    name="Email"
                    className="mb-3"
                    placeholder="Email"
                    required
                  />
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="Phone"
                      placeholder="Phone no"
                      aria-label="Phone"
                      required
                    />
                  </InputGroup>
                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      label="Enter GSTIN to get 18% GST Credit"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  <Button type="submit" className="btn-detail-submit">
                    Submit
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Proprietorship;
