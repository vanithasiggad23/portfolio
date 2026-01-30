import { useEffect,useRef,useState } from "react";
import "./Projects.css";
const ProjectData =[
    {
        title:"Sign-Language detection System",
        description: "Real-time sign language detection system for gesture recognition and accessibility.",
        tech: ["Python", "OpenCV", "Machine Learning"],
        details:
      "Developed a real-time sign language detection system using OpenCV and machine learning for gesture recognition. The system translates gestures into words or phrases to enhance accessibility for the deaf community. Recognition accuracy was improved using optimized ML techniques, with efficient real-time processing for instant interpretation."
    },
    {
    title: "Legal Mind",
    description:
      "AI-powered web tool for legal research and information analysis.",
    tech: ["HTML", "CSS", "JavaScript", "MongoDB", "Python", "Flask"],
    details:
      "Created an AI-powered legal assistance platform to analyze legal information and support quick research. Developed a responsive UI using HTML, CSS, and JavaScript. Implemented legal document parsing, summarization, and enhanced search functionality to retrieve relevant case laws and constitutional articles."
  },
  {
    title: "Smart Waste Classifier",
    description:
      "AI-based waste classification system for sustainable waste management.",
    tech: ["Python", "OpenCV", "Machine Learning"],
    details:
      "Developed an AI-based waste classification system to categorize waste into biodegradable, non-biodegradable, and recyclable. Used OpenCV for image preprocessing and feature extraction. Trained ML models including CNN and SVM to improve classification accuracy and promote sustainable waste management automation."
  }
];
const Projects = () =>{
    const sectionRef = useRef(null);
    const [show, setshow] = useState(false);
    const [activeProject,setActiveProject] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry])=>{
                if (entry.isIntersecting){
                    setshow(true);
                    observer.disconnect();
                }
            },
            {threshold:0.3}
        );
        if(sectionRef.current) observer.observe(sectionRef.current);
    },[]);
    return(
        <section id="projects" className="Projects" ref={sectionRef}>
            <h2 className="section-title">Projects</h2>

            <div className={`project-grid ${show ?"show":""}`}>
                {ProjectData.map((project,index)=>(
                    <div
                    key={index}
                    className="project-card"
                    onClick={() => setActiveProject(project)}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        <div className="tech-stack">
                            {project.tech.map((tech,i)=>(
                                <span key ={i}>{tech}</span>
                            ))}
                            </div>   
                    </div>
                ))}
            </div>
            {activeProject && (
                <div className="modal-overlay"
                onClick={() => setActiveProject(null)}>
                    <div className="modal"
                    onClick ={(e)=> e.stopPropagation()}>
                    <h3>{activeProject.title}</h3>
                    <p>{activeProject.details}</p>
                    <div className="tech-stack modal-tech">
                        {activeProject.tech.map((tech,i) => (
                            <span key={i}>{tech}</span>
                        ))}
                    </div>
                    <button onClick={() =>setActiveProject(null)}>
                        Close
                    </button>
                    </div>
                </div>
            )

            }
        </section>
    );
} 
export default Projects;