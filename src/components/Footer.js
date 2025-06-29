import React from "react";
import "../styles/_footer.scss";
import { Col, Nav, Row } from "react-bootstrap";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";

// import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

// import FavoriteIcon from "@material-ui/icons/Favorite";

const Footer = () => {
  return (
    <div className="footer pb-5 pt-5 ">
      <div className="container">
        <Row className="justify-content-between align-items-center">
          <Col md={3} xs={12}>
            <div className="d-flex justify-content-between footer-info mt-4">
              <Nav.Link
                href="https://www.linkedin.com/in/nitingupta220/"
                className="nav-item cursor-pointer"
                target="_blank"
              >
                <img
                  height="25px"
                  src="https://i.pinimg.com/originals/de/b4/6f/deb46f02a59e3b3a2aa58fac16290d63.gif"
                  alt="icon"
                />
              </Nav.Link>
              <Nav.Link
                href="https://github.com/nitingupta220"
                className="nav-item cursor-pointer"
                target="_blank"
              >
                <GitHubIcon />
              </Nav.Link>
              {/* <Nav.Link
                href="https://www.hackerrank.com/amananku26"
                className="nav-item cursor-pointer"
                target="_blank"
              >
                <img
                  height="25px"
                  src="https://1.bp.blogspot.com/-ULT9oDhqr24/XJYCrttOEpI/AAAAAAAAJYE/inXHXlzblBI3SbcGpiUj4TMNj-E8uPlaQCK4BGAYYCw/s1600/logo%2Bhackerrank%2Bicon.png"
                  alt="icon"
                />
              </Nav.Link> */}
              <Nav.Link
                href="https://medium.com/@nitingupta220"
                className="nav-item cursor-pointer"
                target="_blank"
              >
                <img
                  height="25px"
                  src="https://icons-for-free.com/iconfiles/png/512/media+medium+social+icon-1320086141126884384.png"
                  alt="icon"
                />
              </Nav.Link>
             <Nav.Link
                href="https://buymeacoffee.com/imdevelopr"
                className="nav-item cursor-pointer"
                target="_blank"
              >
               Buy me a coffee
              </Nav.Link>
         
              {/* <Nav.Link
                href="https://www.youtube.com/c/AmanAnku"
                className="nav-item cursor-pointer"
                target="_blank"
              >
                <img
                  height="25px"
                  src="https://cliply.co/wp-content/uploads/2019/07/371907120_YOUTUBE_ICON_TRANSPARENT_400.gif"
                  alt="icon"
                />
              </Nav.Link> */}
              <Nav.Link
                href="https://stackoverflow.com/users/8057486/nitin-gupta"
                className="nav-item cursor-pointer"
                target="_blank"
              >
                <img
                  height="25px"
                  src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/stackoverflow-512.png"
                  alt="icon"
                />
              </Nav.Link>
            </div>
          </Col>
          <Col md={5} xs={12}>
            <ul className="d-flex justify-content-between p-0 w-100 footer-info mt-4 ">
              <li className="p-1">
                <a href="#home">Home</a>
              </li>
              <li className="p-1">
                <a href="#about">About</a>
              </li>
              <li className="p-1">
                <a href="#skills">Skills</a>
              </li>
              <li className="p-1">
                <a href="#projects">Projects</a>
              </li>
              <li className="p-1">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </Col>
        </Row>
        {/* <div className="text-center mt-4  footer-end">
          <p>
            Designed & Developed by{" "}
            <span className="chonburi-font green-text"> Aman Anku</span>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
