import { useEffect, useState } from "react";
import "./Navbar.css";

const sections = [
  { id: "hero", label: "Home" },
  { id: "qualifications", label: "Qualifications" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications" , label: "certificates"}
];

const Navbar = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <ul>
        {sections.map((sec) => (
          <li
            key={sec.id}
            className={active === sec.id ? "active" : ""}
          >
            <a href={`#${sec.id}`}>{sec.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
