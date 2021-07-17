import "./App.css";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-awesome-reveal";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import myPic from "../src/assets/my_pic.jpg";
import ParticlesJS from "./components/particles";
import Footer from "./components/footer";
import MySkillsList from "./components/skillsList";
function App() {
  return (
    <div className="App">
      <body
        style={{
          backgroundColor: "#0a192f",
        }}
      >
        <div id="particles-js">
          <ParticlesJS />
          <div id="header">
            <Fade duration={1000}>
              <h4>Hi, my name is</h4>
              <h1 className="display-1">
                <strong>Zeeshan Siddiqui.</strong>
              </h1>
              <h2 className="display-2">I build things for the web.</h2>
            </Fade>
            <Fade duration={1000}>
              <div
                className="d-flex flex-row justify-content-around"
                id="contact-icons"
              >
                <a
                  href="https://www.linkedin.com/in/zeeshan98/"
                  target="_blank"
                  className="fa fa-linkedin"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/siddiqui-zeeshan/"
                  target="_blank"
                  className="fa fa-github"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="mailto:siddiqui.zeeshan1998@gmail.com"
                  className="fa fa-envelope"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a
                  href="https://www.facebook.com/zeeshansiddiqui.1998/"
                  target="_blank"
                  className="fa fa-facebook"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://www.instagram.com/zeeshan.1902/"
                  target="_blank"
                  className="fa fa-instagram"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </Fade>
          </div>
          <a href="#one">
            <div id="scroll-down" />
          </a>
        </div>
        <div id="side-footer">
          <div className="side-container">
            <a
              href="https://www.linkedin.com/in/zeeshan98/"
              target="_blank"
              className="fa fa-linkedin"
              rel="noreferrer"
              id="side-icon"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/siddiqui-zeeshan/"
              target="_blank"
              className="fa fa-github"
              rel="noreferrer"
              id="side-icon"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.facebook.com/zeeshansiddiqui.1998/"
              target="_blank"
              className="fa fa-facebook"
              rel="noreferrer"
              id="side-icon"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/zeeshan.1902/"
              target="_blank"
              className="fa fa-instagram"
              rel="noreferrer"
              id="side-icon"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div id="side-footer-2">
          <div
            className="side-container-2"
            onclick="location.href='https://drive.google.com/uc?export=download&id=1m343gNBUqipgeQ42ZUwkEfnqQjrEL-xh';"
            style={{ cursor: "pointer" }}
          >
            <div id="resume-text">M</div>
            <div id="resume-text">Y</div>
            <div id="resume-text"> </div>
            <div id="resume-text">R</div>
            <div id="resume-text">E</div>
            <div id="resume-text">S</div>
            <div id="resume-text">U</div>
            <div id="resume-text">M</div>
            <div id="resume-text">E</div>
          </div>
        </div>

        <div className="pages" id="one">
          <div className="container-fluid align-self-center">
            <div className="row">
              <div className="col-sm-1" />
              <div className="col-sm-6">
                <Fade duration={1000}>
                  <div id="mydiv">
                    01. <a>About me</a>
                  </div>
                </Fade>
                <Fade duration={1000}>
                  <p>
                    Hello, world! I am Zeeshan Siddiqui. I graduated from IIT
                    (ISM) Dhanbad in 2021 with a degree in Electrical
                    Engineering.
                  </p>
                  <p>
                    I am a software developer by profession, and I enjoy
                    creating things that live on computers and the internet. I
                    have experience in building enterprise-quality scalable
                    solutions. I can enthusiastically grab onto any programming
                    language, frameworks, libraries, and principles. I have a
                    good grasp of the concepts of design and analysis of
                    algorithms and data structures.
                  </p>
                  <p>
                    I aspire to pursue an equally challenging and
                    growth-stimulating career in a progressive organization
                    conducive to professional excellence and bilateral
                    development.
                  </p>
                </Fade>
              </div>
              <div className="col-sm-4">
                <Fade duration={1000}>
                  <div
                    className="d-flex justify-content-center align-content-center"
                    id="my-pic-div"
                  >
                    <img
                      src={myPic}
                      className="img-fluid"
                      alt="Zeeshan Siddiqui"
                      id="my-pic"
                    />
                  </div>
                </Fade>
              </div>
              <div className="col-sm-1" />
            </div>
          </div>
        </div>
        <div className="gap-bottom" />
        {/* <Fade duration={1000}> */}
        <MySkillsList></MySkillsList>

        <div className="pages" id="three">
          <div className="container-fluid align-content-center">
            <div className="row">
              <div className="col-sm-2" />
              <div className="col-sm-8">
                <div className="d-flex justify-content-center">
                  <Fade duration={1000}>
                    <div id="mydiv">
                      03. <a>I'd Love To Hear From You</a>
                    </div>
                  </Fade>
                </div>
                <div className="d-flex justify-content-center">
                  <Fade duration={1000}>
                    <p>
                      My social media inboxes are always open. Whether you have
                      questions, new opportunities, or just want to drop a hi,
                      I'll try my best to get back to you.
                    </p>
                  </Fade>
                </div>
                <Fade duration={1000}>
                  <div className="d-flex justify-content-center">
                    <form
                      id="my-form"
                      action="https://formspree.io/f/xoqylzgq"
                      method="POST"
                    >
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="FIRST NAME"
                      />
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="LAST NAME"
                      />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="EMAIL"
                      />
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={6}
                        placeholder="YOUR MESSAGE"
                        defaultValue={""}
                      />
                      <input
                        type="submit"
                        id="email-submit-button"
                        defaultValue="GO!"
                      />
                    </form>
                  </div>
                </Fade>
              </div>
              <div className="col-sm-2" />
            </div>
          </div>
        </div>
        <div className="gap-bottom" />
        <Footer></Footer>
      </body>
    </div>
  );
}

export default App;
