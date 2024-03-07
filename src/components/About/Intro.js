import { Link } from "react-scroll";

export const Intro = () => {
  return (
    <>
      <div className="about-content">
        <p className="about-text">
          Hello, my name is <span className="intro-highlight">Shruti</span> and
          I enjoy bringing ideas to life in the browser. I am a full stack
          developer with a good understanding of technologies.
        </p>

        <p className="about-text">
          I love structure and order and I also stand for quality. I have
          created a passion for the JavaScript. Check out some of my work in the
          <Link
            to="projects"
            className="intro-click"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Projects section
          </Link>
          .
        </p>

        <p className="about-text">
          I am always ready to dive more deep into my developer job where I can
          contribute, learn and grow. If you have a good opportunity that
          matches my skills and experience then don't hestitate to
          <Link
            to="contact"
            className="intro-click"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            contact me
          </Link>
          .
        </p>
      </div>
    </>
  );
};
