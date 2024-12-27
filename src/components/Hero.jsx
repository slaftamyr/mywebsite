import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Hello, I am <span>Solafa</span>
          </h1>
          <p>
            I'm a passionate Front-End Developer who loves creating stunning,
            responsive, and interactive websites. Let’s build something amazing
            together!
          </p>
          <a href="#contact" className="btn contact-btn">
            Contact Me
          </a>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/solafa-ameer"
              target="_blank"
              rel="noopener noreferrer"
              className="icon linkedin"
            ></a>
            <a
              href="https://github.com/slaftamyr"
              target="_blank"
              rel="noopener noreferrer"
              className="icon github"
            ></a>
            <a href="mailto:slaftamyr8@gmail.com" className="icon email"></a>
            <a
              href="https://wa.me/0129512940"
              target="_blank"
              rel="noopener noreferrer"
              className="icon whatsapp"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
