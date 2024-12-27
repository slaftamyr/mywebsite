import React, { useState } from "react";
import osana from "../assets/osana.png";
import wonderful from "../assets/wonderful.png";
import cats from "../assets/catsgallery.png";
import lemona from "../assets/LEMONA.png";
const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const projects = [
    {
      title: "Osana Soft",
      link: "https://osa-na-soft.vercel.app",
      description:
        "A responsive React-based professional company website showcasing modern design and seamless user experience.",
      image: osana,
    },
    {
      title: "Wonderful",
      link: "https://wonderful-weld.vercel.app",
      description:
        "An elegant, responsive website built with React, offering an engaging and visually stunning experience.",
      image: wonderful,
    },
    {
      title: "Cats Gallery",
      link: "https://cats-gallery-theta.vercel.app",
      description:
        "A dynamic and responsive React application integrating APIs to deliver a delightful gallery experience for cat lovers.",
      image: cats,
    },
    {
      title: "Lemona",
      link: "https://lemona-restaurant.vercel.app",
      description:
        "A beautifully designed restaurant website built with HTML and CSS, featuring an elegant layout and an inviting user interface.",
      image: lemona,
    },
  ];

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h3>Projects</h3>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                onClick={() => openModal(project.image)} // فتح الصورة عند النقر عليها
              />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Modal لفتح الصورة */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Project" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
