import { useEffect, useRef, useState } from "react";
import "./Skills.css";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", level: 85 },
      { name: "Flask", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "MySQL", level: 70 }
    ]
  },
  {
    category: "AI / ML",
    skills: [
      { name: "Machine Learning", level: 75 },
      { name: "OpenCV", level: 80 },
      { name: "CNN / SVM", level: 70 }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 70 },
      { name: "VS Code", level: 85 }
    ]
  }
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <h2 className="section-title">Skills</h2>

      <div className={`skills-wrapper ${show ? "show" : ""}`}>
        {skillsData.map((group, index) => (
          <div className="skill-group" key={index}>
            <h3>{group.category}</h3>

            {group.skills.map((skill, i) => (
              <div className="skill-bar" key={i}>
                <span>{skill.name}</span>
                <div className="bar">
                  <div
                    className="fill"
                    style={{
                      width: show ? `${skill.level}%` : "0%"
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;