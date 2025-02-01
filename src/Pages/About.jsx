import NavigationBar from "../Components/NavigationBar"
import '../Styles/About.css'
import AldoSaman from "../Assets/Img/aldosaman2.jpg";
import { useState, useEffect } from 'react';
import Footer from "../Components/Footer";

const About = () => {
    const [text, setText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const textContent = 'Muhammad Reynald Saman';
        const typingAnimation = setInterval(() => {
            setText(textContent.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
            if (charIndex === textContent.length - 1) {
            clearInterval(typingAnimation);
            }
        }, 100);
        return () => clearInterval(typingAnimation);
    }, [charIndex]);

    return (
        <>
            <NavigationBar/>
            <section id="about">
                <div className="container d-flex justify-content-center align-items-center" data-aos="fade-down" data-aos-duration="1500">
                    <div className="row">
                        <div className="col-11 col-lg-7 me-lg-5 m-auto">
                            <h1 className="fw-bold">About Me</h1>
                            <h4 className="mt-3 mb-3 fw-bold">{text}<span>|</span></h4>
                            <p>Hello! I'm Muhammad Reynald Saman, you can call me Aldo. I'm currently living in Gorontalo, Indonesia. I study at SMK Negeri 3 Gorontalo. I'm passionate about coding and constantly strive to enhance my skills by exploring new technologies and developing innovative solutions. My interest in computers began when I was very young, and it has shaped my passion for technology.</p>
                            <p>In addition to my passion for software development, I also have a strong interest in system administration. I enjoy the challenges of managing infrastructure, ensuring servers run smoothly, and maintaining the security and availability of systems. Also, the website you're currently viewing is hosted on my personal home server. This project has provided me with hands-on experience in managing web hosting, configuring servers, and ensuring the site's security and uptime.</p>
                        </div>
                        <div className="col image">
                            <img src={AldoSaman} alt="Aldo Saman"/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default About;