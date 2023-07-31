import "./about.css";
import ME from "../../assets/img3.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>about us</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="about image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>38+ completed projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            dolore non velit at quidem perferendis perspiciatis nostrum incidunt
            tempora asperiores! Porro perferendis provident hic aperiam natus ad
            magni repudiandae error?
          </p>
          <a href="#contact" className="btn btn-primary">
            contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
