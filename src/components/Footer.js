import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center pt-5">
          <Col size={12} sm={6}>
            <h2 className="text-white fw-bold">Luis Moya</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/luis-moya-prados-415041247/"><img src={navIcon1} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. Todos los derechos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
