import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      pageUrl: "https://neon-whatsapp.onrender.com/",
      title: "Versioned WhatsApp",
      description: "WhatsApp online hecho con React y NodeJS.",
      imgUrl: projImg1,
    },
    {
      pageUrl: "https://byluismoya.github.io/Proyecto_Sass_GranAuto/",
      title: "GranAuto",
      description: "Web de venta y alquiler de coches de 2ª mano, hecho con Bootstrap y SCSS.",
      imgUrl: projImg2,
    },
    {
      pageUrl: "https://blogvault-vue.web.app/",
      title: "BlogVault",
      description: "Una web para crear y compartir tus posts. Sigue en desarrollo.",
      imgUrl: projImg3,
    },
    {
      pageUrl: "https://cocktail-website.onrender.com/home",
      title: "Cocktail Website",
      description: "Una web diseñada para poder buscar recetas de cocktails en Ingles.",
      imgUrl: projImg4,
    },
    {
      pageUrl: "https://byluismoya.github.io/Api_Peliculas_VueJS/",
      title: "Motor de busqueda de Peliculas",
      description: "Web diseñada para poder proporcionar informacion sobre la pelicula buscada. Hecha con VueJS.",
      imgUrl: projImg5,
    },
    {
      pageUrl: "https://recordatorios-componentesvuejs.web.app",
      title: "Recordatorios",
      description: "Web 'to do list' para apuntar cosas que debes hacer. Hecha con VueJS",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Estos son los proyectos que he hecho en lo que llevo de Desarrollador Web, como se puede ver utilizo distintas tecnologías, aun que, enfocado principalmente a Desarrollo Front-end.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
