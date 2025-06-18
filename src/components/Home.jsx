import React from "react";
import Header from "../assets/Header";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

import bannerImg1 from "../Images/banner1.png";
import bannerImg2 from "../Images/banner2.png";
import bannerImg3 from "../Images/banner3.png";
import Story from "../Images/story.webp";
import Story2 from "../Images/story2.webp";
import logo1 from "../Images/logos/logo1.png";
import logo2 from "../Images/logos/logo2.png";
import logo5 from "../Images/logos/logo5.png";
import logo16 from "../Images/logos/logo18.webp";
import logo7 from "../Images/logos/logo7.jpg";
import logo8 from "../Images/logos/logo18.webp";
import logo9 from "../Images/logos/logo9.png";
import logo11 from "../Images/logos/logo11.png";
import bank1 from "../Images/bank1.png";
import bank2 from "../Images/bank2.png";
import bank3 from "../Images/bank3.png";
import bank4 from "../Images/bank4.png";
import bank5 from "../Images/bank5.png";
import bank6 from "../Images/bank6.png";

import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Footer from "../assets/Footer";

const bannerImages = [
  { src: bannerImg1, alt: "First slide" },
  { src: bannerImg2, alt: "Second slide" },
  { src: bannerImg3, alt: "Third slide" },
];

const servicesData = [
  { icon: "fa-regular fa-building", label: "Incorporation" },
  { icon: "fa-solid fa-shield-halved", label: "Trademark" },
  { icon: "fa-solid fa-calculator", label: "Accounting" },
  { icon: "fa-solid fa-newspaper", label: "Income Tax" },
  { icon: "fa-solid fa-percent", label: "GST Services" },
  { icon: "fa-regular fa-credit-card", label: "Payroll" },
];

const updatesData = [
  {
    title:
      "Advance Tax Deadline for FY 2025–26 (1st Instalment) Shifted to June 16 - Pay Today!",
    date: "16-Jun-2025",
    linkText: "Advance Tax Payment",
  },
  {
    title:
      "Income Tax Return Filing Opens for AY 2025-26 - Start Filing Today!",
    date: "14-Jun-2025",
    linkText: "File Your ITR",
  },
  {
    title:
      "Income Tax Return Filing Opens for AY 2025-26 - Start Filing Today!",
    date: "14-Jun-2025",
    linkText: "File Your ITR",
  },
  {
    title:
      "Income Tax Return Filing Opens for AY 2025-26 - Start Filing Today!",
    date: "14-Jun-2025",
    linkText: "File Your ITR",
  },
  {
    title: "PAN-Aadhaar Linking Deadline Approaching: Last Date 30th June 2025",
    date: "12-Jun-2025",
    linkText: "Link PAN-Aadhaar",
  },
  {
    title: "GST Amnesty Scheme Extension Announced - File Pending Returns Now",
    date: "10-Jun-2025",
    linkText: "File GST Returns",
  },
];

const customerLogos = [
  logo1,
  logo2,
  logo16,
  logo5,
  logo7,
  logo8,
  logo9,
  logo11,
  logo7,
  logo8,
  logo9,
  logo11,
];

const dueDatesData = [
  {
    title: "IEC Code Renewal",
    date: "16-Jun-2025",
  },
  {
    title:
      "TDS Payment in Form 26QB (Property), 26QC (Rent), 26QD (Contractor Payments), 26QE (Crypto Assets) for June 2025",
    date: "16-Jun-2025",
  },
  {
    title: "GSTR 3B (Apr-Jun 2025) for South India",
    date: "16-Jun-2025",
  },
  {
    title: "Form 16 Issuance by Employers for FY 2024–25",
    date: "15-Jun-2025",
  },
  {
    title: "GST CMP-08 Filing for Q1 (Apr-Jun 2025)",
    date: "18-Jul-2025",
  },
];

const enterpriseData = [
  {
    title: "Enterprise Partnership",
    paragraph: `If you're an independent professional, firm, enterprise client, bank, or government organization, we invite you to reach out to our Enterprise Partnership Team. Our dedicated Enterprise Team is committed to collaborating with a diverse range of clients including professionals, banks, enterprise clients, and government departments to create customized solutions that meet specific requirements. Contact us today to explore partnership opportunities to work together and create value.`,
    italic: `If you're an independent professional, firm, enterprise client, bank, or government organization, we invite you to reach out to our Enterprise Partnership Team.`,
    buttonText: "Get Started",
    image: Story2,
  },
];

const bankLogos = [
  { src: bank1, alt: "ICICI Bank" },
  { src: bank2, alt: "Axis Bank" },
  { src: bank3, alt: "HDFC Bank" },
  { src: bank4, alt: "Kotak Bank" },
  { src: bank5, alt: "YES Bank" },
  { src: bank6, alt: "YES Bank" },
];

const popularSearches = [
  "Partnership",
  "Limited Liability Partnership",
  "Digital Signature",
  "Copyright Registration",
  "Unified Portal",
  "PAN Card Download",
  "Nadakacheri",
  "Flipkart Seller",
  "Caste Certificate",
  "IAY",
  "EPFO Passbook",
  "Domicile Certificate",
  "Udyog Aadhaar",
  "PF Withdrawal",
  "Karnataka One",
  "Encumbrance Certificate",
  "Bonafide Certificate",
  "Instant PAN Card",
  "E PAN Card",
  "Income Certificate",
  "Marriage Certificate",
  "Passport Renewal",
  "Nivesh Mitra",
  "MSME Registration",
  "Experience Certificate",
  "Trademark Status",
  "Trade License",
  "Domicile",
  "eMitra",
  "UAN",
  "PICME",
  "Resignation Letter Format",
  "Ration Card",
  "TNREGINET",
  "RAJSSP",
  "LLP Compliance",
  "Form 16",
  "Police Clearance Certificate",
  "OBC Certificate",
  "Jamabandi",
  "Mee Bhoomi",
  "SC Certificate",
  "UAN Login",
  "eAadhaar Download",
  "Linking Aadhaar To Bank Accounts",
  "mAadhaar",
  "Aadhaar Enrollment Centre",
  "UAN Passbook",
  "Amazon How to Sell",
  "PAN Card Apply",
  "EPFO Unified Portal",
];

export default function Home() {
  return (
    <div>
      <Header />

      <Carousel interval={3000} controls={true} indicators={true} pause={false}>
        {bannerImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image.src} className="d-block w-100" alt={image.alt} />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="digital-services">
        <Container>
          <div className="heading">
            <h3>Explore our digital services stack</h3>
            <p>
              Grow your business and remain compliant by partnering with
              IndiaFilings for a range of high quality, business services from{" "}
              <br /> incorporation to payroll delivered through a seamless
              online platform.
            </p>
          </div>
          <Row className="justify-content-md-center">
            {servicesData.map((service, index) => (
              <Col key={index} lg={2} md={4} xs={6}>
                <div className="services">
                  <i className={service.icon}></i>
                  <p>{service.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="alerts">
        <Container fluid>
          <Row className="justify-content-md-center">
            {/* Updates & Alerts */}
            <Col xs lg="6" md="6">
              <Card>
                <Card.Body>
                  <Card.Title>
                    <i className="fa-solid fa-box-archive"></i> Updates & Alerts
                  </Card.Title>
                  <div className="scroll-tab">
                    {updatesData.map((item, index) => (
                      <div className="tab-details" key={index}>
                        <Link to="">
                          <h4>{item.title}</h4>
                        </Link>
                        <div className="tab-details-through d-flex justify-content-between">
                          <p>
                            Published on: <span>{item.date}</span>
                          </p>
                          <Link className="link-tab">{item.linkText}</Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Due Dates */}
            <Col xs lg="6" md="6">
              <Card>
                <Card.Body>
                  <Card.Title>
                    <i className="fa-solid fa-calendar-week"></i> Due Dates
                  </Card.Title>
                  <div className="scroll-tab">
                    {dueDatesData.map((item, index) => (
                      <div className="tab-details" key={index}>
                        <Link to="">
                          <h4>{item.title}</h4>
                        </Link>
                        <div className="tab-details-through d-flex justify-content-between">
                          <p>
                            Published on: <span>{item.date}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="our-story">
        <Container fluid>
          <Card>
            <Row className="justify-content-md-center align-items-center">
              <Col xs lg="6" md="6">
                <div className="heading story">
                  <h3>Our Story!</h3>
                  <p>
                    We are on a mission to make Entrepreneurship easier and
                    affordable to millions. IndiaFilings provides a simple and
                    intuitive platform for setting up a business and managing
                    compliance. We started our journey in 2014 and bootstrapped
                    the business till 2022, serving over 1 lakh businesses. In
                    2022, we raised funding from institutional investors to
                    further our mission. Know more about IndiaFilings.
                  </p>
                  <i>
                    In 2022, we raised funding from institutional investors to
                    further our mission. Know more about IndiaFilings.
                  </i>
                  <h4>Our Customer!</h4>

                  <div className="marquee-wrapper">
                    <div className="marquee">
                      {customerLogos.map((logo, index) => (
                        <div className="marquee-logo" key={index}>
                          <Image
                            src={logo}
                            alt={`Customer Logo ${index + 1}`}
                            fluid
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs lg="6" md="6">
                <Image src={Story} fluid />
              </Col>
            </Row>
          </Card>
        </Container>
      </div>

      <div className="partner-ship">
        <Container fluid>
          <div className="heading">
            <h3>Industry leading partnerships</h3>
            <p>
              We work with top Indian Institutions to further our shared mission
              of improving ease <br /> of doing business and promoting
              Entrepreneurship in India.
            </p>
          </div>

          <div className="bank-logos">
            <Container>
              <Row>
                {bankLogos.map((logo, index) => (
                  <Col key={index} xs={6} md={3} lg={2} className="logo-cell">
                    <img src={logo.src} alt={logo.alt} className="img-fluid" />
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </Container>
      </div>

      <div className="enterprise">
        <Container fluid>
          {enterpriseData.map((item, index) => (
            <Card key={index}>
              <Row className="justify-content-md-center align-items-center">
                <Col xs="12" lg="7" md="6">
                  <div className="heading story">
                    <h3>{item.title}</h3>
                    <p>{item.paragraph}</p>
                    <i>{item.italic}</i>
                    <br />
                    <br />
                    <Button className="btn-my-button">{item.buttonText}</Button>
                  </div>
                </Col>
                <Col xs="12" lg="5" md="6">
                  <Image src={item.image} fluid />
                </Col>
              </Row>
            </Card>
          ))}
        </Container>
      </div>

      <div className="searches">
        <Container fluid>
          <div className="search-container">
            <div className="heading story">
              <h3>Popular Searches</h3>
            </div>
            <div className="tags-wrapper">
              {popularSearches.map((search, index) => (
                <Link
                  key={index}
                  className="tag"
                  to={`/search/${encodeURIComponent(search)}`}
                >
                  {search}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
