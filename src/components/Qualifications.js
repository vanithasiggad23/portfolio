import "./Qualifications.css";
import {useEffect,useRef,useState} from "react";

const Qualifications = () => {
  const sectionRef =useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(()=>{
    const observer = new IntersectionObserver(
    ([entry])=>{
      if(entry.isIntersecting){
        setIsVisible(true);
        observer.disconnect();
      }
    },
  {threshhold:0.2}
);
if(sectionRef.current){
  observer.observe(sectionRef.current);
}
return ()=>observer.disconnect();

  },[]);
  return (
    <section id="qualifications" ref={sectionRef} 
    className={`Qualifications ${isVisible ? "show":""}`}>
      <h2 className="section-title">Qualifications</h2>

        <div className="timeline">

          <div className="timeline-item">
            <span className="year">2022–2026</span>
            <h3>Bachelor of Engineering</h3>
            <p>Information Science & Engineering</p>
            <p className="org">BMSIT&M (VTU)</p>
          </div>

          <div className="timeline-item">
            <span className="year">2020–2022</span>
            <h3>Pre-University Education</h3>
            <p>Science (PCMB)</p>
            <p className="org">Alva's PU College</p>
          </div>

          <div className="timeline-item">
            <span className="year">2019–2020</span>
            <h3>Secondary School</h3>
            <p>SSLC</p>
            <p className="org">
              Santhome Higher Primary and High School
            </p>
          </div>

        </div>
    </section>
  );
};

export default Qualifications;
