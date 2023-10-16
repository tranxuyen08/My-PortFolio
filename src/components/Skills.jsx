import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./CSS/Skills.css";

function Skills() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Xuyen TN - Skills</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="skills-wrapper">
        <div className="skills-left animate__animated animate__zoomIn">
          <h3>Skills</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>03</strong>
          </h4>
        </div>
        <div className="skills-right">
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-html5-plain-wordmark colored"
                title="HTML"
              ></i>
              <i
                className="devicon-css3-plain-wordmark colored"
                title="CSS"
              ></i>
              <i
                className="devicon-javascript-plain colored"
                title="JavaScript"
              ></i>
              <i class="devicon-redux-original colored" title="Redux"></i>
            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-bootstrap-plain-wordmark colored"
                title="Bootstrap"
              ></i>
              <i
                className="devicon-react-original-wordmark colored"
                title="React JS"
              ></i>
              <i
                className="devicon-mysql-plain-wordmark colored"
                title="MySQL"
              ></i>
              <i class="devicon-git-plain colored" title="Git"></i>
            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-mongodb-plain-wordmark colored"
                title="Mongodb"
              ></i>
              <i
                className="devicon-express-original-wordmark colored"
                title="Express.js"
              ></i>
              <i
                class="devicon-typescript-plain colored"
                title="Typescript"
              ></i>
              <i
                class="devicon-firebase-plain-wordmark colored"
                title="Firebase"
              ></i>
            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                class="devicon-nodejs-plain-wordmark colored"
                title="Node.js"
              ></i>
              <i class="devicon-nestjs-plain colored" title="Nest.js"></i>
              <i
                class="devicon-docker-plain-wordmark colored"
                title="Docker"
              ></i>
              <i class="devicon-sequelize-plain colored"></i>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Skills;
