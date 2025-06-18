import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header() {
  return (
    <Navbar expand="lg" className="my-nav" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Startup" id="startup-dropdown">
              <NavDropdown.Item as={Link} to="/about">
                <Row>
                  <Col xs={12} md={8}>
                    xs=12 md=8
                  </Col>
                  <Col xs={6} md={4}>
                    xs=6 md=4
                  </Col>
                </Row>
                Startup
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Registrations" id="registrations-dropdown">
              <NavDropdown.Item as={Link} to="/registrations">
                Registrations
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Trademark" id="trademark-dropdown">
              <NavDropdown.Item as={Link} to="/trademark">
                Trademark
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Goods & Services Tax" id="gst-dropdown">
              <NavDropdown.Item as={Link} to="/gst">
                Goods & Services Tax
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Income Tax" id="incometax-dropdown">
              <NavDropdown.Item as={Link} to="/income-tax">
                Income Tax
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="MCA" id="mca-dropdown">
              <NavDropdown.Item as={Link} to="/mca">
                MCA
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Compliance" id="compliance-dropdown">
              <NavDropdown.Item as={Link} to="/compliance">
                Compliance
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Consultation" id="consultation-dropdown">
              <NavDropdown.Item as={Link} to="/consultation">
                Consultation
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Guides" id="guides-dropdown">
              <NavDropdown.Item as={Link} to="/guides">
                Guides
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/guides/more">
              About
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button className="btn-login">
              Login <i className="fa-solid fa-right-to-bracket"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
