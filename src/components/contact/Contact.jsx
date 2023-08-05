import { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vf8jwm7",
        "template_oyz4n4y",
        form.current,
        "JexOJKc6EUGNv7B9J"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5> get in touch</h5>
      <h2>contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__option">
            <MdOutlineEmail className="contact__option__icon" />
            <h4>Email</h4>
            <h5>email@gmail.com</h5>
            <a href="mailto:email@gmail.com" target="_blank" rel="noreferrer">
              Send a Message
            </a>
          </div>
          <div className="contact__option">
            <RiMessengerLine className="contact__option__icon" />
            <h4>Messagner</h4>
            <h5>email@gmail.com</h5>
            <a
              href="https://m.me/ashraf.sayed.963434"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </div>
          <div className="contact__option">
            <BsWhatsapp className="contact__option__icon" />
            <h4>whatsapp</h4>
            <h5>96565594848</h5>
            <a
              href="https://wa.me/96565594848"
              target="_blank"
              rel="noreferrer"
            >
              Send whatsapp Message
            </a>
          </div>
        </div>
        {/* end of contact options  */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="your full name"
            required
          />
          <input type="email" name="email" placeholder="your email" required />
          <textarea
            name="message"
            placeholder="your message"
            cols="30"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
