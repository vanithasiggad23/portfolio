import profilepic from "../images/image1.jpg";
import "./Hero.css";
import {useEffect,useRef,useState} from "react";
const Hero = ()=>{
    const heroRef=useRef(null);
    const [show,setShow] =useState(false);
    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=> {
                if (entry.isIntersecting){
                    setShow(true);
                    observer.disconnect();
                }
            },
        {threshold :0.3}
    );
    if(heroRef.current)observer.observe(heroRef.current);
    return () => observer.disconnect();
},[]);

    return (
        
        <section id="hero" className="Heroclass" href={heroRef}>
            <div className={`hero-wrapper ${show ? "show":""}`}>
                <div className="hero-left">
                <img src={profilepic} alt="profile-pic" className="Hero-img"/>
                <h3 className="role">Frontend/FullStack developer</h3>
                    <div className="hero-links">
                    <a href="https://github.com/vanithasiggad23" target="blank">GitHub</a>
                    <a href="https://www.linkedin.com/in/vanitha-siggad-vanitha-8724b0259/" target="blank">LinkedIn</a>
                    <a href="mailto:siggad343@gmail.com" target="blank">Email</a>
                    </div>
                </div>
                <div className="hero-right">
                <h1 className="hero-name">Hello I am Vanitha P S</h1>
                

                <p className="hero-desc">Motivated Information Science student with a passion for learning and a strong foundation in teamwork, time management,
and technical skills including Java, databases, and front-end technologies, with a keen interest in building impactful projects.
Eager to contribute effectively while continuously growing and advancing professionally</p>

        </div>
        
        </div>
        </section>

    );
}
export default Hero;