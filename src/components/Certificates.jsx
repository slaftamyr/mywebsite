import React from "react";

const Certificates = () => {
  const certificates = [
    {
      title: "Introduction to Front-End Development",
      platform: "Coursera",
      issuedBy: "Meta",
      link: "https://coursera.org/share/dc64bdf7071c5d173fee16a96d3128d2",
      image:
        "https://media.licdn.com/dms/image/v2/D4E2DAQF3KzPQ-n40Rg/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1731276406305?e=1735848000&v=beta&t=S9lkwrAIxKlgghA7goA9HkfOZ821S0cFUsElETe30SU",
    },
    {
      title: "Programming with JavaScript",
      platform: "Coursera",
      issuedBy: "Meta",
      link: "https://coursera.org/share/a70e72c5f76d4f89b6f861d7506f0987",
      image:
        "https://media.licdn.com/dms/image/v2/D4E2DAQH5boKUDJgiZw/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1731276658142?e=1735848000&v=beta&t=2yCIy8TkP-xPivRsdxa1N3H6or7Bw-f7e7eqq460ILc",
    },
    {
      title: "HTML and CSS in Depth",
      platform: "Coursera",
      issuedBy: "Meta",
      link: "https://coursera.org/share/1773ed25406124586b56aeb8ed219eb5",
      image:
        "https://media.licdn.com/dms/image/v2/D4E2DAQG8PIAOPOqA7g/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1731273883665?e=1735848000&v=beta&t=jVeV9Hpylu90qVQOokgiieMbGf6EFOsR4LjCH8By5Js",
    },
    {
      title: "Version control",
      platform: "Coursera",
      issuedBy: "Meta",
      link: "https://coursera.org/share/ed6e31522da2b9550e9a9b9da0f399d5",
      image:
        "https://media.licdn.com/dms/image/v2/D4E2DAQGaK_SG7_RZbg/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1731276957391?e=1735848000&v=beta&t=mu31PmfgLeMP9V86fDM2859BhWMMSntd1aDG_R_MrWo",
    },
    {
      title: "React Basics",
      platform: "Coursera",
      issuedBy: "Meta",
      link: "https://www.coursera.org/account/accomplishments/verify/G1NRCVHB38E6?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      image:
        "https://media.licdn.com/dms/image/v2/D4E2DAQHZd0N3bjx7Hg/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1731271902470?e=1735848000&v=beta&t=yf2XIoD5qHzHJU0fbS0BfA27L1fIiKWH60axUtXD_Fs",
    },
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h3>Certificates</h3>
        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <div key={index} className="certificate-card">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="certificate-image"
              />
              <h4>{certificate.title}</h4>
              <p>
                {certificate.issuedBy} - {certificate.platform}
              </p>
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
