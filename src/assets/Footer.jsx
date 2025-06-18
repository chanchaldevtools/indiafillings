import React from "react";
import { Link } from "react-router-dom";

const footerData = [
  {
    title: "IndiaFilings",
    links: ["About IndiaFilings", "Careers", "Contact Us"],
  },
  {
    title: "Platforms",
    links: ["Business Search", "Trademark Search", "Filings.AE for UAE"],
  },
  {
    title: "Usage",
    links: ["Terms & Conditions", "Privacy Policy", "Refund Policy"],
  },
  {
    title: "Policy",
    links: [
      "Confidentiality Policy",
      "Disclaimer Policy",
      "IndiaFilings Review",
    ],
  },
];

export default function Footer() {
  return (
    <div>
      <div className="footer-container">
        {footerData.map((section, index) => (
          <div key={index} className="footer-column">
            {section.title && <h4>{section.title}</h4>}
            <ul>
              {section.links.map((link, i) => (
                <li key={i}>
                  <i className="fa-solid fa-chevron-right"></i>{" "}
                  <Link href="#">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()}{" "}
          <Link as={Link} to="/">
            Technext Technosoft Pvt. Ltd.
          </Link>{" "}
          All rights reserved.
        </p>
        <div className="social-icons">
          <Link to="/facebook">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="/twitter">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="/linkedin">
            <i className="fab fa-linkedin-in"></i>
          </Link>
          <Link to="/instagram">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
