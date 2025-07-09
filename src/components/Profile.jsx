import React, { useState } from "react";
import verifyImg from '../Images/verify.png'
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Nav,
} from "react-bootstrap";
import User from "../Images/user.png";
import Header from "../assets/Header";
import Footer from "../assets/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function Profile() {
  const [show, setShow] = useState(false);

  const toggleSidebar = () => setShow(!show);

  const userProfile = {
    image: User,
    name: "Chanchal Ghosh",
    details: [
      { label: "Email", value: "chanchal1234@example.com" },
      { label: "Phone", value: "+1 234 567 890" },
      { label: "Location", value: "Durgapur, India" },
    ],
  };

  return (
    <div>
      <Header />
      {/* <div className="page-header-section">
        <div className="overlay"></div>
        <Container className="text-white position-relative z-1">
          <h1 className="page-title">Profile</h1>
          <Breadcrumb className="custom-breadcrumb">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Profile</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div> */}

      <Container fluid className="mb-5 mt-4">
        <Row className="profile">
          <Col md={3} lg={2} className="side-nav p-3 mb-5">
            <h4 className="mb-4">My Profile</h4>
            <Nav className="flex-column">
              <Nav.Link to="/" className="mb-2">
                <FontAwesomeIcon icon={faHome} className="me-2" />
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/document-form" className="mb-2">
                <FontAwesomeIcon icon={faUser} className="me-2" />
                creacte a tax file
              </Nav.Link>
              <Nav.Link to="/" className="mb-2">
                <FontAwesomeIcon icon={faCog} className="me-2" />
                list of tax file
              </Nav.Link>
              <Nav.Link to="/" className="mb-2">
                <FontAwesomeIcon icon={faCog} className="me-2" />
                settings
              </Nav.Link>
              <Nav.Link to="/" className="logout mt-auto">
                <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                logout
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={9} lg={10}>
            <Row>
                <Card className="profile-card mx-2 p-4">
                  <Row>
                    <Col md={3} className="text-center mb-3">
                      <Image
                        src={userProfile.image}
                        roundedCircle
                        fluid
                        className="mb-3 user"
                      />
                    </Col>
                    <Col md={9}>
                      <h5>{userProfile.name} <Image src={verifyImg}></Image></h5>
                      {userProfile.details.map((detail, index) => (
                        <Row className="mt-2 mb-1" key={index}>
                          <Col sm={4}>
                            <strong>{detail.label}:</strong>
                          </Col>
                          <Col sm={8}>{detail.value}</Col>
                        </Row>
                      ))}
                      {/* <Button className="logout mt-3">
                    Logout
                  </Button> */}
                    </Col>
                  </Row>
                </Card>
            </Row>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Profile;
