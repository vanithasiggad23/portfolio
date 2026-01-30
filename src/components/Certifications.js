import { useEffect, useRef, useState } from "react";
import "./Certifications.css";

const certificates = [
  {
    title: "Foundations of Coding - Full Stack",
    provider: "Microsoft · Coursera",
    file: "/certifications/Coursera1 cerificate.pdf",
  },
  {
    title: "Programming Foundations",
    provider: "Coursera",
    file: "/certifications/Coursera certificate2.pdf",
  },
  {
    title: "Web Development Basics",
    provider: "Coursera",
    file: "/certifications/Coursera 3.pdf",
  },
];

const Certificates = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section id="certifications"
      ref={sectionRef}
      className={`certificates ${visible ? "show" : ""}`}
    >
      <h2 className="section-title">Certificates</h2>

      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div className="cert-card" key={index}>
            <h3>{cert.title}</h3>
            <p className="provider">{cert.provider}</p>

           <a
  href={cert.file}
  target="_blank"
  rel="noopener noreferrer"
  className="view-btn"
>
  View Certificate
</a>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
