import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

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

const socialLinks = [
  { icon: faFacebookF, url: "/facebook", label: "Facebook" },
  { icon: faTwitter, url: "/twitter", label: "Twitter" },
  { icon: faLinkedinIn, url: "/linkedin", label: "LinkedIn" },
  { icon: faInstagram, url: "/instagram", label: "Instagram" },
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
                  <FontAwesomeIcon icon={faAngleRight} />{" "}
                  <Link to="#">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()}{" "}
          <Link to="/">Technext Technosoft Pvt. Ltd.</Link>{" "}
          All rights reserved.
        </p>
        <div className="social-icons">
          {socialLinks.map((social, index) => (
            <Link key={index} to={social.url} aria-label={social.label}>
              <FontAwesomeIcon icon={social.icon} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
