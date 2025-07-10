import React from "react";
import Header from "../assets/Header";
import Footer from "../assets/Footer";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Image,
} from "react-bootstrap";
import { useState } from "react";
import Pnb from "../Images/bank5.png";
import UPI1 from "../Images/upi-1.png";
import UPI2 from "../Images/upi-2.png";
import UPI3 from "../Images/upi-3.png";
import UPI4 from "../Images/upi-4.png";
import UPI5 from "../Images/upi-5.png";
import UPI6 from "../Images/upi-6.png";

function DocumentForm() {
  const [validated, setValidated] = useState(false);
  const [salaryCompanyType, setSalaryCompanyType] = useState("");
  const [slipCompanyType, setSlipCompanyType] = useState("");

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
      <Container fluid className="mb-5 pb-5">
        <header className="heading text-center mb-4">
          <h2>
            REQUIRED DOCUMENTS <br /> FOR FY 2024-25 (AY 2025-26)
          </h2>
          <p className="form">MANDATORY DOCUMENTS</p>
        </header>

        <div className="form-wrap">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col lg={3} md={6} xs={12}>
                <div className="sub-heading">
                  <p>Salary</p>
                  <Form.Label>Salary Details:</Form.Label>
                  <Form.Select
                    name="salaryCompanyType"
                    required
                    value={salaryCompanyType}
                    onChange={(e) => setSalaryCompanyType(e.target.value)}
                  >
                    <option disabled value="">
                      If worked with multiple companies, provide Form 16 from
                      each.
                    </option>
                    <option value="Single Company">Single Company</option>
                    <option value="Multiple Company">Multiple Company</option>
                  </Form.Select>

                  {salaryCompanyType && (
                    <Form.Group className="form-group mt-2">
                      <Form.Label>
                        {`Upload Form 16 File${
                          salaryCompanyType === "Multiple Company" ? "s" : ""
                        } (PDF - Select ${
                          salaryCompanyType === "Multiple Company"
                            ? "Multiple"
                            : "Single"
                        })`}
                      </Form.Label>
                      <Form.Control
                        type="file"
                        name="form16Files"
                        accept="application/pdf"
                        multiple={salaryCompanyType === "Multiple Company"}
                        required
                        className="multi"
                      />
                    </Form.Group>
                  )}
                </div>
              </Col>

              <Col lg={3} md={6} xs={12}>
                <div className="sub-heading">
                  <p>Salary</p>
                  <Form.Label>Salary Slips:</Form.Label>
                  <Form.Select
                    name="slipCompanyType"
                    required
                    value={slipCompanyType}
                    onChange={(e) => setSlipCompanyType(e.target.value)}
                  >
                    <option disabled value="">
                      If worked with more than one company, also provide payslip
                      & F&F of old company.
                    </option>
                    <option value="Single Company">Single Company</option>
                    <option value="Multiple Company">Multiple Company</option>
                  </Form.Select>

                  {slipCompanyType && (
                    <Form.Group className="form-group mt-2">
                      <Form.Label>
                        {`Upload Salary Slip File${
                          slipCompanyType === "Multiple Company" ? "s" : ""
                        } (PDF - Select ${
                          slipCompanyType === "Multiple Company"
                            ? "Multiple"
                            : "Single"
                        })`}
                      </Form.Label>
                      <Form.Control
                        type="file"
                        name="salarySlipFiles"
                        accept="application/pdf"
                        multiple={slipCompanyType === "Multiple Company"}
                        required
                        className="multi"
                      />
                    </Form.Group>
                  )}
                </div>
              </Col>

              <Col lg={6} md={12} xs={12}>
                <div className="sub-heading">
                  <p>
                    Bank Details: <span>(A/c Details)</span>
                  </p>
                  <Row>
                    <Col md={4} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>Account No</Form.Label>
                        <Form.Control
                          type="text"
                          name="text"
                          placeholder="Enter Your Account No"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>IFSC Code</Form.Label>
                        <Form.Control
                          type="text"
                          name="text"
                          placeholder="Enter Your IFSC Code"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>Bank Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="text"
                          placeholder="Enter Your Bank Name"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col lg={7} md={12} xs={12}>
                <div className="sub-heading">
                  <p>80C Details:</p>
                  <Row>
                    <Col md={4} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>LIC Policy No</Form.Label>
                        <Form.Control
                          type="text"
                          name="text"
                          placeholder="Enter Your LIC Policy No"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>EPF A/c No</Form.Label>
                        <Form.Control
                          type="text"
                          name="text"
                          placeholder="Enter Your EPF A/c No"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>Sukanya Samridhi Scheme A/c No</Form.Label>
                        <Form.Control
                          type="text"
                          name="text"
                          placeholder="Enter Your Sukanya Samridhi Scheme A/c No"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <small>
                      N.B.: For FY 2024-25, providing policy details, PPF
                      account number, etc., is mandatory for claiming deductions
                      under Section 80. Please provide these details if readily
                      available
                    </small>
                  </Row>
                </div>
              </Col>

              <Col lg={5} md={12} xs={12}>
                <div className="sub-heading">
                  <p>80D Details:</p>
                  <Row>
                    <Col md={6} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>
                          Health / Medical Insurance Policy No
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="text"
                          placeholder="Enter Your Health Insurance/ Medical Insurance Policy No"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>Insurance Company Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="text"
                          placeholder="Enter Your Insurance Company Name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <small>
                      N.B.:- From this year onwards, the above details must be
                      provided to claim deduction u/s 80D. (THIS DETAILS ARE
                      AVAILABLE IN YOUR MEDICAL CARD)
                    </small>
                  </Row>
                </div>
              </Col>

              <Col lg={2} md={4} xs={12}>
                <div className="sub-heading">
                  <p>HRA:</p>
                  <Form.Group className="form-group">
                    <Form.Label>Enter HRA:</Form.Label>
                    <Form.Select
                      id="dropdown"
                      name="role"
                      required
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select
                      </option>
                      <option value="Rent Per Month">Rent Per Month</option>
                      <option value="Metro / Non metro City(location of office)">
                        Metro / Non metro City(location of office)
                      </option>
                      <option value="Are you working from home/office/hybrid?">
                        Are you working from home/office/hybrid?
                      </option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </Col>

              <Col lg={10} md={8} xs={12}>
                <div className="sub-heading">
                  <p>
                    Home Loan: <span>(Interest & Principal paid)</span>{" "}
                    <small>
                      For claiming home loan interest, these are the mandatory
                      requirements please provide them:-
                    </small>
                  </p>
                  <Row>
                    <Col lg="auto" md={6} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>Loan A/c No</Form.Label>
                        <Form.Control
                          type="text"
                          name="text"
                          placeholder="Enter Your Loan A/c No"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col lg="auto" md={6} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>Sanction date of loan</Form.Label>
                        <Form.Control
                          type="text"
                          name="text"
                          placeholder="Enter Your Health Sanction date of loan"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={2} md={6} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>Outstanding loan (Date)</Form.Label>
                        <Form.Control type="date" name="text" required />
                      </Form.Group>
                    </Col>
                    <Col lg="auto" md={6} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>Total Loan Taken</Form.Label>
                        <Form.Control
                          type="text"
                          name="text"
                          placeholder="Enter Your Total Loan Taken"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={2} md={6} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>Property Value</Form.Label>
                        <Form.Control
                          type="text"
                          name="text"
                          placeholder="Enter Your Property Value"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col lg={8} md={12} xs={12}>
                <div className="sub-heading">
                  <p>
                    Demat A/c Details:{" "}
                    <small>
                      If you are dealt any shares or mutual funds during the
                      previous financial year (24-25), kindly provide the
                      following details: -
                    </small>
                  </p>

                  <Row>
                    <Col md={6} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>
                          Taxable Profit & Loss Statement (Stocks) (PDF)
                        </Form.Label>
                        <Form.Control
                          type="file"
                          name="taxablePLStocks"
                          accept="application/pdf"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>
                          Capital Gain Statement of Mutual Funds (PDF)
                        </Form.Label>
                        <Form.Control
                          type="file"
                          name="capitalGainMutualFunds"
                          accept="application/pdf"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col lg={4} md={12} xs={12}>
                <div className="sub-heading">
                  <p>ESOP/ RSU:</p>

                  <Row>
                    <Col md={6} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>Capital Gain Statement (PDF)</Form.Label>
                        <Form.Control
                          type="file"
                          name="esopCapitalGain"
                          accept="application/pdf"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>Holding Statement (PDF)</Form.Label>
                        <Form.Control
                          type="file"
                          name="esopHolding"
                          accept="application/pdf"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col md={12} xs={12}>
                <div className="sub-heading">
                  <p>FEE STRUCTURE</p>

                  <Row>
                    <Col lg={2} md={4} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>ITR filling fee :</Form.Label>
                        <Form.Control
                          type="text"
                          name="text"
                          placeholder="Enter Your ITR filling fee"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={3} md={4} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>ITR filling fee :</Form.Label>
                        <Form.Control
                          type="text"
                          name="text"
                          placeholder="Enter Your ITR filling fee"
                          required
                        />
                      </Form.Group>
                      <small>
                        (If worked in more than one company during the year)
                      </small>
                    </Col>
                    <Col lg="auto" md={4} xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>
                          ITR filling fee + Capital Gain :
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="text"
                          placeholder="Enter Your ITR filling fee + Capital Gain"
                          required
                        />
                      </Form.Group>
                      <small>(excluding Future & Option)</small>
                    </Col>
                    <Col md="auto" xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>
                          ITR filling fee + Capital Gain :
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="text"
                          placeholder="Enter Your ITR filling fee + Capital Gain"
                          required
                        />
                      </Form.Group>
                      <small>(including Future & Option)</small>
                    </Col>
                    <Col md="auto" xs={12}>
                      <Form.Group className="form-group">
                        <Form.Label>
                          ITR filling fee + Capital Gain+ESOP:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="text"
                          placeholder="Enter Your ITR filling fee + Capital Gain +ESOP :"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </Col>

              <div className="sub-under-heading text-center">
                <p>
                  N.B.:- 1. In case you have any additional income & other
                  compliances, the fee may vary. You will be informed prior to
                  filling. <br />
                  2. We offer complimentary planning-related services to our
                  existing clients as part of our ongoing engagement.
                </p>
              </div>

              <Col className="text-center mt-4" xs={12}>
                <Button type="submit" id="submit" className="btn-block">
                  Submit Survey
                </Button>
              </Col>
            </Row>

            <Card className="bank-card">
              <Card.Body>
                <h5 className="text-center bank-title">- Bank Details -</h5>
                <p>
                  <strong>Name:</strong>{" "}
                  <span className="blue-text">
                    Bansal Tax Planning And Wealth Management Pvt. Ltd.
                  </span>
                </p>
                <p>
                  <strong>A/C No:</strong> 3193002100016110
                </p>
                <p>
                  <strong>IFSC Code:</strong>{" "}
                  <span className="blue-text">PUNB0319300</span>
                </p>
                <p>
                  <strong>Bank Name:</strong>{" "}
                  <span className="blue-text">Punjab National Bank</span>
                </p>
                <p>
                  <strong>UPI ID:</strong>{" "}
                  <span className="red-text">7908508291m@pnb</span>
                </p>
                <hr />
                <p className="mt-3">
                  Kindly send all the documents via Mail:
                  <a
                    href="mailto:caashok.asn@gmail.com"
                    className="blue-text ms-1"
                  >
                    caashok.asn@gmail.com
                  </a>
                </p>
                <p className="fw-bold">Don't send in Whatsapp.</p>
              </Card.Body>
            </Card>

            <div className="upi-container my-5">
              <div className="text-center mb-4">
                <Image src={Pnb} alt="PNB Logo" className="pnb-logo"></Image>
              </div>

              <h5 className="text-center merchant-name mb-4">
                MERCHANT: BANSAL TAX PLANNING AND WEALTH MANAGEMENT PRIVATE
                LIMITED
              </h5>

              <h3 className="text-center scan-pay-title mb-4">SCAN & PAY</h3>

              {/* <div className="text-center mb-4">
            <Image
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=7908508291m@pnb"
              alt="QR Code"
              className="qr-image"
            ></Image>
      </div> */}

              <h6 className="text-center upi-id mb-4">
                UPI ID: <span className="red-text">7908508291m@pnb</span>
              </h6>

              <div className="text-center mb-3">
                <Image
                  src={UPI1}
                  alt="BHIM UPI"
                  className="bhim-upi-logo"
                ></Image>
              </div>

              <div className="text-center pay-text mb-4">
                <Button className="btn-pay">
                  Pay at this Outlet using any UPI app
                </Button>
              </div>

              <Row className="align-items-center justify-content-center mb-4">
                <Col xs={2}>
                  <Image
                    src={UPI2}
                    alt="Amazon Pay"
                    className="app-logo"
                    fluid
                  />
                </Col>
                <Col xs={2}>
                  <Image
                    src={UPI3}
                    alt="Google Pay"
                    className="app-logo"
                    fluid
                  />
                </Col>
                <Col xs={2}>
                  <Image src={UPI4} alt="PhonePe" className="app-logo" fluid />
                </Col>
                <Col xs={2}>
                  <Image src={UPI6} alt="Paytm" className="app-logo" fluid />
                </Col>
                <Col xs={2}>
                  <Image src={UPI5} alt="Mobikwik" className="app-logo" fluid />
                </Col>
              </Row>

              <h6 className="text-center helpdesk-text">
                Helpdesk: 18001800 / 18002021
              </h6>
            </div>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default DocumentForm;
