import { Col } from "react-bootstrap";

export const ProjectCard = ({ pageUrl, title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a target="_blank" href={pageUrl} className="text-white">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
