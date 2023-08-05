import "./portofolio.css";
import IMG1 from "../../assets/img1.jpeg";
import IMG2 from "../../assets/img2.jpeg";
import IMG3 from "../../assets/img3.jpeg";
import IMG4 from "../../assets/img7.jpeg";
import IMG5 from "../../assets/img5.jpeg";
import IMG6 from "../../assets/img6.jpeg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "first title",
    github: "https://www.github.com",
    domo: "https://www.github.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "second title",
    github: "https://www.github.com",
    domo: "https://www.github.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "third title",
    github: "https://www.github.com",
    domo: "https://www.github.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "fourth title",
    github: "https://www.github.com",
    domo: "https://www.github.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "fifth title",
    github: "https://www.github.com",
    domo: "https://www.github.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "sixest title",
    github: "https://www.github.com",
    domo: "https://www.github.com",
  },
];

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>my Recent work</h5>
      <h2>Portofolio</h2>
      <div className="container portofolio__container">
        {data.map((item, index) => {
          return (
            <article className="portofolio__item" key={index}>
              <div className="portofolio__item__image">
                <img src={item.image} alt={data.title} />
              </div>
              <h3>{item.title}</h3>
              <div className="portofolio__item_cta">
                <a
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                  href={item.github}
                >
                  github
                </a>
                <a
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                  href={item.demo}
                >
                  live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
