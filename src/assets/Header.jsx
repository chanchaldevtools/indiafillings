import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Logo from "../Images/logo.jpg";
import Tax from "../Images/tax.png";
import { Col, Row, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faRightToBracket,
faFileExport,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <>
      <Navbar expand="lg" className="my-nav" sticky="top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <Image src={Logo} className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <NavDropdown
                  title="Startup"
                  id="startup-dropdown"
                  className="mega-dropdown"
                >
                  <div className="mega-menu">
                    <div className="mega-col">
                      <h6>Startup Services</h6>
                      <ul>
                        <li>
                          <Link to="/company-registration">
                            Company Registration
                          </Link>
                        </li>
                        <li>
                          <Link to="/proprietorship">Proprietorship</Link>
                        </li>
                        <li>
                          <Link to="/startup-india">Startup India Scheme</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <h6>Quick Links</h6>
                      <ul>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                          <Link to="/help">Help & Support</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </NavDropdown>
                <NavDropdown
                  title="Registrations"
                  id="startup-dropdown"
                  className="mega-dropdown"
                >
                  <div className="mega-menu">
                    <div className="mega-col">
                      <h6>Registrations</h6>
                      <ul>
                        <li>
                          <Link to="/company-registration">
                            Company Registration
                          </Link>
                        </li>
                        <li>
                          <Link to="/llp-registration">LLP Registration</Link>
                        </li>
                        <li>
                          <Link to="/startup-india">Startup India Scheme</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <h6>Quick Links</h6>
                      <ul>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                          <Link to="/help">Help & Support</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </NavDropdown>
                <NavDropdown title="Trademark" id="trademark-dropdown">
                  <NavDropdown.Item as={Link} to="/trademark">
                    Trademark
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="GST" id="gst-dropdown">
                  <NavDropdown.Item as={Link} to="/gst">
                    Goods & Services Tax
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Income Tax" id="income-tax-dropdown">
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
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
              </Nav>
              <Form className="d-flex align-items-center">
                <Button as={Link} to="/document-form" className="btn-tax">
                  Tax File Now
                </Button>
                <Button as={Link} to="/login" className="btn-login">
                  Login <FontAwesomeIcon icon={faRightToBracket} />
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} className="d-md-block d-none">
              <Image src={Tax} fluid />
            </Col>
            <Col md={6}>
              <h4>Do you want to file your taxes?</h4>
              <p>
                Let us help you navigate your tax filing smoothly and
                efficiently. 
              </p>
              <div className="text-end">
                <Button className="btn-login">Apply</Button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal> */}
    </>
  );
}
