import React, { useState } from "react";
import solafa from "../assets/solafa.jpg";
const experiences = [
  {
    id: 1,
    role: "Front-End Developer",
    company: "Osana Soft",
    duration: "November 2024 - Present",
    description: "",
    certificates: [],
  },
  {
    id: 2,
    role: "Freelance Front-End Developer",
    company: "Self-Employed",
    duration: "2023 - Present",
    description: "",
    certificates: [],
  },
  {
    id: 3,
    role: "Intern - Front-end Development",
    company: "CodeAlpha",
    duration: "November 2024 - December 2024",
    description: "",
    certificates: [
      {
        title: "Front-end Development Internship Certificate",
        image:  solafa   },
    ],
  },
  {
    id: 4,
    role: "Intern - Front-end Development",
    company: "intern2grow",
    duration: "November 2024 ",
    description: "",
    certificates: [
      {
        title: "Front-end Development Internship Certificate",
        image:    "https://media.licdn.com/dms/image/v2/D4E2DAQF1yxK1p3CO4A/profile-treasury-image-shrink_160_160/profile-treasury-image-shrink_160_160/0/1736895612438?e=1737511200&v=beta&t=zv7xMW6EA5mfKDX80V49DYuK4goSDujRQcSV0Zk85_o",
      },
    ],
  },
];
 
const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="experience">
      <div className="container">
        <h2>Work Experience & Training</h2>
        <div className="experience-grid">
          {experiences.map((exp) => (
            <div className="experience-card" key={exp.id}>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p className="duration">{exp.duration}</p>
              <p className="description">{exp.description}</p>
              {exp.certificates.length > 0 && (
                <div className="certificates">
                  <h5>Certificates:</h5>
                  <div className="certificates-grid">
                    {exp.certificates.map((cert, index) => (
                      <img
                        key={index}
                        src={cert.image}
                        alt={cert.title}
                        className="certificate-image"
                        onClick={() => openModal(cert.image)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Certificate" />
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
