import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section className="container" id="services">
      <h5>what i offer ?</h5>
      <h2>services</h2>
      <div className="services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
          </ul>
        </article>
        {/* end of ux card */}
        <article className="service">
          <div className="service__head">
            <h3>ًWeb development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
          </ul>
        </article>
        {/* end of web development */}
        <article className="service">
          <div className="service__head">
            <h3>ًcontent creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </li>
          </ul>
        </article>
        {/* end of content creation */}
      </div>
    </section>
  );
};

export default Services;
