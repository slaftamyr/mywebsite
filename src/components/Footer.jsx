import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Solafa Ameer Mahgoob. All Rights Reserved.</p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/solafa-ameer"
            target="_blank"
            rel="noopener noreferrer"
            className="icon linkedin"
          >
            <i className="react-icons/fa fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/slaftamyr"
            target="_blank"
            rel="noopener noreferrer"
            className="icon github"
          >
            <i className="react-icons/fa fa-github"></i>
          </a>
          <a href="mailto:slaftamyr8@gmail.com" className="icon email">
            <i className="react-icons/fa fa-envelope"></i>
          </a>
          <a
            href="https://wa.me/0129512940"
            target="_blank"
            rel="noopener noreferrer"
            className="icon whatsapp"
          >
            <i className="react-icons/fa fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
