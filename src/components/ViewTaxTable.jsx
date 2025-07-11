import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Nav,
  ListGroup,
  Image,
} from "react-bootstrap";
import Header from "../assets/Header";
import Footer from "../assets/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCog,
  faSignOutAlt,
  faFileExport,
  faListUl,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import verifyImg from "../Images/verify.png";

function ViewTaxTable() {
  const sections = [
    {
      title: "Salary",
      items: [
        {
          text: "provide Form 16 from each :",
          status: "Multiple Company",
          files: [1, 2, 3, 4],
        },
        {
          text: "provide Form 16 from each : ",
          status: "Single Company",
          files: [1, 2, 3],
        },
        {
          text: "Also provide payslip & F&F of old company : ",
          files: [1, 2, 3, 4],
          status: "Multiple Company",
        },
        {
          text: "Also provide payslip & F&F of old company",
          files: [1, 2, 3, 4, 5],
          status: "Single Company",
        },
      ],
    },
    {
      title: "Bank Details",
      items: [
        { text: "Account Number :", value: "3193002100016110" },
        { text: "IFSC Code :", value: "PUNB0319300" },
        { text: "Bank Name :", value: "Punjab National Bank" },
      ],
    },
    {
      title: "80C Details",
      items: [
        { text: "LIC Policy Number :", value: "4566781248" },
        { text: "EPF Account Number :", value: "454874178" },
        { text: "Sukanya Samridhi Scheme Account Number :", value: "3238641" },
      ],
    },
    {
      title: "80D Details",
      items: [
        { text: "Health Insurance Policy Number :", value: "2434213457" },
        { text: "Insurance Company Name :", value: "Star Health Insurance" },
      ],
    },
    {
      title: "HRA",
      items: [
        { text: "Enter HRA Amount :", value: "5222.00" },
      ],
    },
    {
      title: "Home Loan",
      items: [
        { text: "Loan Account Number :", value: "563434687" },
        { text: "Sanction Date of Loan :", value: "02.30.25" },
        { text: "Outstanding Loan (Date) :", value: "12.30.25" },
        { text: "Total Loan Taken :", value: "5214.00" },
        { text: "Property Value :", value: "3467451" },
      ],
    },
    {
      title: "Demat A/C Details",
      items: [
        {
          text: "Taxable Profit & Loss Statement (Stocks PDF)",
          files: [1, 2, 3, 4],
        },
        {
          text: "Capital Gain Statement of Mutual Funds (PDF)",
          files: [1, 2, 3, 4],
        },
      ],
    },
    {
      title: "ESOP / RSU",
      items: [
        {
          text: "Capital Gain Statement (PDF)",
          files: [1, 2, 3, 4],
        },
        {
          text: "Holding Statement (PDF)",
          files: [1, 2, 3, 4],
        },
      ],
    },
    {
      title: "Fee Structure",
      items: [
        { text: "ITR Filing Fee :", value: "4631.00" },
        { text: "ITR Filing Fee + Capital Gain :", value: "5423.00" },
        { text: "ITR Filing Fee + Capital Gain + ESOP :", value: "3644.00" },
      ],
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
              <Card className="profile-card mx-2 p-4">
                <ListGroup variant="flush">
                  {sections.map((section, idx) => (
                    <div className="my-list" key={idx}>
                      <ListGroup.Item className="section-header">
                        {section.title}
                      </ListGroup.Item>
                      {section.items.map((item, i) => (
                        <ListGroup.Item className="form-list-item" key={i}>
                          <div className="list-head">
                            <Image src={verifyImg} /> 
                            <strong>
                              {item.text} <span>{item.status}</span>
                            </strong>
                          </div>
                          <div>
                            {item.value && <span>{item.value}</span>}
                            {item.files && (
                              <span>
                                {item.files.map((f, j) => (
                                  <Link to="" target="_blank" key={j}>
                                    <FontAwesomeIcon icon={faFilePdf} className="ms-2" />
                                  </Link>
                                ))}
                              </span>
                            )}
                          </div>
                        </ListGroup.Item>
                      ))}
                    </div>
                  ))}
                </ListGroup>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default ViewTaxTable;
