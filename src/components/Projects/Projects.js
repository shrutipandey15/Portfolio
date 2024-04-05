import React from "react";
import "./Projects.css";
// import weatherApp from "../Images/weatherApp.png";
import portfolioPage from "../Images/portfolioPage.png";
import VideoModal from "./VideoModal";
import useModal from "../Hooks//useModal";

function Projects() {
  const { isShowing, toggle, embedId } = useModal();

  return (
    <section id="projects">
      <div className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="cards">
          <div className="card">
            <button className="project-number-btn">1</button>
            <div className="card-top">
              {/* <div className="card-image">
                <img
                  alt="project screenshot 1"
                  src={weatherApp}
                  className="project-img"
                ></img>
              </div> */}

              <VideoModal
                isShowing={isShowing}
                embedId={embedId}
                hide={toggle}
              />

              <div className="card-content">
                <div className="content-top">
                  <h2 className="card-title">Food Delivery</h2>
                  <p className="card-text">
                    The Food Delivery Web Application is a modern and
                    user-friendly platform designed to streamline the process of
                    ordering and delivering food from various restaurants. Built
                    using JavaScript, Node.js, and React.js, this project offers
                    a seamless and responsive experience for both customers and
                    restaurant owners.
                  </p>
                </div>

                <div className="content-bottom">
                  <div className="card-buttons">
                    <a
                      href="https://github.com/shrutipandey15/Food-Delivery"
                      className="card-btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <button className="project-number-btn">2</button>
            <div className="card-top">
              <div className="card-image">
                <img
                  alt="project screenshot 2"
                  src={portfolioPage}
                  className="project-img tall"
                ></img>
              </div>
              <div className="card-content">
                <div className="content-top">
                  <h2 className="card-title">Portfolio page</h2>
                  <p className="card-text">
                    This portfolio page is built with React.js. React-router-DOM
                    is used for the about section. In the About section are
                    multiple page routes. When changing routes and the component
                    enters the Dom, React Transition Group is used for the
                    animation. Modals are used for showing the resume PDF and
                    project videos. EmailJS is used for sending and receiving
                    messages. After submitting the message the component
                    redirects to the success component.
                  </p>
                </div>
                <div className="content-bottom">
                  <div className="card-buttons">
                    {/* <a href="" className='card-btn current' target="_blank">Current page</a> */}
                    <a
                      href="https://github.com/shrutipandey15/Portfolio"
                      className="card-btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
