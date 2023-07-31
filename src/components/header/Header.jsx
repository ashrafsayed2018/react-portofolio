import "./header.css";
import { CTA } from "./CTA";
import ME from "../../assets/header.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>hello iam</h5>
        <h1>ashraf sayed</h1>
        <h5 className="text-light">fullstack web developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll_down">
          scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
