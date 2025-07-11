import React from "react";
import Header from "../assets/Header";
import { Container, Row, Col, Nav, Table, Card } from "react-bootstrap";
import Footer from "../assets/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCog,
  faSignOutAlt,
  faFileExport,
  faListUl,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function TaxTable() {
  const applicationData = [
    {
      id: "001",
      time: "2025-07-10 10:23",
      status: "Pending",
      response: "Awaiting Review",
      updated: "2025-07-10 12:00",
    },
    {
      id: "002",
      time: "2025-07-09 15:42",
      status: "Approved",
      response: "Success",
      updated: "2025-07-09 18:20",
    },
    {
      id: "003",
      time: "2025-07-08 14:10",
      status: "Cancelled",
      response: "Closed",
      updated: "2025-07-08 15:00",
    },
    {
      id: "004",
      time: "2025-07-07 09:30",
      status: "Pending",
      response: "Awaiting Review",
      updated: "2025-07-07 10:45",
    },
    {
      id: "005",
      time: "2025-07-08 14:10",
      status: "Cancelled",
      response: "Closed",
      updated: "2025-07-08 15:00",
    },
    {
      id: "006",
      time: "2025-07-07 09:30",
      status: "Pending",
      response: "Awaiting Review",
      updated: "2025-07-07 10:45",
    },
    {
      id: "007",
      time: "2025-07-08 14:10",
      status: "Cancelled",
      response: "Closed",
      updated: "2025-07-08 15:00",
    },
    {
      id: "008",
      time: "2025-07-07 09:30",
      status: "Pending",
      response: "Awaiting Review",
      updated: "2025-07-07 10:45",
    },
  ];

  return (
    <div>
      <Header />
      <Container fluid className="mb-5 mt-4">
        <Row className="profile">
          <Col md={3} lg={2} className="side-nav p-3 mb-4 sticky-top">
            <h4 className="mb-4">My Profile</h4>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/profile" className="mb-2">
                <FontAwesomeIcon icon={faUser} className="me-2" />
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/document-form" className="mb-2">
                <FontAwesomeIcon icon={faFileExport} className="me-2" />
                Create a tax file
              </Nav.Link>
              <Nav.Link as={Link} to="/tax-table" className="mb-2">
                <FontAwesomeIcon icon={faListUl} className="me-2" />
                List of tax files
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="mb-2">
                <FontAwesomeIcon icon={faCog} className="me-2" />
                Settings
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="logout mt-auto">
                <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                Logout
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={9} lg={10}>
            <Row>
              <Card className="profile-card mx-2 p-3">
                <h5 className="mb-2">List of Tax File</h5>
                <Table striped bordered hover className="table-custom">
                  <thead>
                    <tr>
                      <th>Application ID</th>
                      <th>Application Time</th>
                      <th>Status</th>
                      <th>Response</th>
                      <th>Last Updated Time</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applicationData.map((app, index) => (
                      <tr key={index}>
                        <td data-label="Application ID">{app.id}</td>
                        <td data-label="Application Time">{app.time}</td>
                        <td data-label="Status">
                          <span
                            className={`status status-${app.status.toLowerCase()}`}
                          >
                            {app.status}
                          </span>
                        </td>
                        <td data-label="Response">{app.response}</td>
                        <td data-label="Last Updated Time">{app.updated}</td>
                        <td data-label="View">
                          <Link to="/view-tax-table">
                            <FontAwesomeIcon icon={faEye} />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default TaxTable;
