import React, { } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";

import CountUp from "react-countup";

import channelImage1 from "../../Assets/Clients/xnestorio.jpg";
import channelImage2 from "../../Assets/Clients/spartalogo.jpg";
import channelImage3 from "../../Assets/Clients/spreen.jpg";
import channelImage4 from "../../Assets/Clients/johnlogo.jpg";
import channelImage5 from "../../Assets/Clients/hasviklogo.jpg";
import channelImage6 from "../../Assets/Clients/nacho.jpg";
import channelImage7 from "../../Assets/Clients/silviologo.jpg";
import channelImage8 from "../../Assets/Clients/ansichan.jpg";

function ChannelImages() {
  const links = [
    "https://www.youtube.com/@xNestorio",
    "https://www.youtube.com/@Sparta356",
    "https://www.youtube.com/@Spreen",
    "https://www.youtube.com/@JohnFalz",
    "https://www.youtube.com/@HasvikGG",
    "https://www.youtube.com/@nacho-minecraft",
    "https://www.youtube.com/@SilvioGamer",
    "https://www.youtube.com/@AnsiChan",
    "https://www.youtube.com/@xNestorio",
    "https://www.youtube.com/@xNestorio",

  ];



  return (

    <div className="text-center">
      <a href={links[0]} target="_blank" rel="noopener noreferrer" className="circular-image-link">
        <img src={channelImage1} alt="Channel 1" className="circular-image" />
      </a>
      <a href={links[1]} target="_blank" rel="noopener noreferrer" className="circular-image-link">
        <img src={channelImage2} alt="Channel 2" className="circular-image" />
      </a>
      <a href={links[2]} target="_blank" rel="noopener noreferrer" className="circular-image-link">
        <img src={channelImage3} alt="Channel 3" className="circular-image" />
      </a>
      <a href={links[3]} target="_blank" rel="noopener noreferrer" className="circular-image-link">
        <img src={channelImage4} alt="Channel 4" className="circular-image" />
      </a>
      <a href={links[4]} target="_blank" rel="noopener noreferrer" className="circular-image-link">
        <img src={channelImage5} alt="Channel 5" className="circular-image" />
      </a>
      <a href={links[5]} target="_blank" rel="noopener noreferrer" className="circular-image-link">
        <img src={channelImage6} alt="Channel 6" className="circular-image" />
      </a>
      <a href={links[6]} target="_blank" rel="noopener noreferrer" className="circular-image-link">
        <img src={channelImage7} alt="Channel 7" className="circular-image" />
      </a>
      <a href={links[7]} target="_blank" rel="noopener noreferrer" className="circular-image-link">
        <img src={channelImage8} alt="Channel 8" className="circular-image" />
      </a>
      {/* Agrega más imágenes y enlaces si es necesario */}
    </div>

  );
}



function Home2() {

  const numberStyles = {
    fontSize: "5em", // Tamaño de fuente para los números
    fontWeight: "800", // Opcional: puedes agregar negrita si lo deseas
    fontFamily: "'Nimbus Sans Bold Extended (D)', sans-serif", // Agregado el fontFamily
  };

  const textStyles = {
    fontSize: "3em", // Tamaño de fuente para los textos
    color: "#F6F9EB", // Color de texto
    fontWeight: "750", // Agregado para hacer el texto en negritas
    fontFamily: "'TT Commons Pro Expanded', sans-serif", // Agregado el fontFamily
  };

  const hrStyles = {
    color: "#C1C1C1",
    borderColor: "#FFFFFF", // Color de la línea divisora
    height: "2px", // Grosor de la línea divisora
    marginLeft: "10%",
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <div style={{ display: "flex", justifyContent: "center" }} className="likediv">
        <div>
          {/* <Col style={{ paddingBottom: 100 }} md={4} className="text-center"> */}
          <div style={{ ...numberStyles, color: "#FFD32D", marginRight: "0rem" }}>
            <CountUp end={20} duration={3} />

            m+
          </div>
          <hr
            style={{
              ...hrStyles,
              width: "80%",
              marginTop: "1rem",
              marginBottom: "1rem",
              marginRight: "16rem",
            }}
          />
          <div style={{ ...textStyles, fontFamily: "'Widy Regular', sans-serif", fontSize: "4em", marginRight: "0rem" }}>Views on YouTube</div>
          {/* </Col> */}
        </div>


        <div>
          {/* <Col md={4} className="text-center"> */}
          <div style={{ ...numberStyles, color: "#E93679" }}>
            <CountUp end={30} duration={3} />
            +
          </div>
          <hr
            style={{
              ...hrStyles,
              width: "80%",
              marginTop: "1rem",
              marginBottom: "1rem"
            }}
          />
          <div style={{ ...textStyles, fontFamily: "'Widy Regular', sans-serif", fontSize: "4em" }}>Satisfied customers</div>
          {/* </Col> */}
        </div>

        <div>
          {/* <Col md={4} className="text-center"> */}
          <div style={{ ...numberStyles, color: "#00C4FE" }}>
            <CountUp end={600} duration={3} />
            k+
          </div>
          <hr
            style={{
              ...hrStyles,
              width: "80%",
              marginTop: "1rem",
              marginBottom: "1rem"
            }}
          />
          <div style={{ ...textStyles, fontFamily: "'Widy Regular', sans-serif", fontSize: "4em" }}>Likes on YouTube</div>
          {/* </Col> */}
        </div>
      </div>
      <Container >
        {/* <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col style={{ paddingBottom: 100 }} md={4} className="text-center">
            <div style={{ ...numberStyles, color: "#FFD32D", marginRight: "139rem" }}>
              <CountUp end={20} duration={3} />

              m+
            </div>
            <hr
              style={{
                ...hrStyles,
                width: "80%",
                marginTop: "1rem",
                marginBottom: "1rem",
                marginRight: "16rem",
              }}
            />
            <div style={{ ...textStyles, fontFamily: "'Widy Regular', sans-serif", fontSize: "4em", marginRight: "43rem" }}>Views on YouTube</div>
          </Col>
          <Col md={4} className="text-center">
            <div style={{ ...numberStyles, color: "#E93679" }}>
              <CountUp end={30} duration={3} />
              +
            </div>
            <hr
              style={{
                ...hrStyles,
                width: "80%",
                marginTop: "1rem",
                marginBottom: "1rem"
              }}
            />
            <div style={{ ...textStyles, fontFamily: "'Widy Regular', sans-serif", fontSize: "4em" }}>Satisfied customers</div>
          </Col>
          <Col md={4} className="text-center">
            <div style={{ ...numberStyles, color: "#00C4FE" }}>
              <CountUp end={600} duration={3} />
              k+
            </div>
            <hr
              style={{
                ...hrStyles,
                width: "80%",
                marginTop: "1rem",
                marginBottom: "1rem"
              }}
            />
            <div style={{ ...textStyles, fontFamily: "'Widy Regular', sans-serif", fontSize: "4em" }}>Likes on YouTube</div>
          </Col>
        </Row> */}

        <h1 style={{ paddingBottom: 45, paddingTop: 100, marginBottom: "-1rem", marginTop: "4rem" }} className="text-center">
          <strong className="main-name" style={{ fontSize: "1.7em", fontFamily: "'Kamerik 105 Bold', sans-serif" }}>
            ⭐Clients
          </strong>
        </h1>

        {/* Llama al componente ChannelImages para mostrar las imágenes de los canales */}
        <ChannelImages />




        <Row>
          <Col md={12} style={{ marginTop: "200px" }} className="home-about-social">
            <h1 style={{ paddingBottom: 45, paddingTop: 100 }} className="text-center">
              <strong className="main-name" style={{ fontSize: "1.45em" }}>Services</strong>
            </h1>

            <Row className="top-rectangles">
            
                <div className="rectangle">
                  Project Manager
                </div>
              
             
                <div className="rectangle">
                  Server Configurator
                </div>
             
                <div className="rectangle">
                  Datapack Maker
                </div>
             
       
            {/* <Row className="bottom-rectangles"> */}
            
                <div className="rectangle">
                  3D Artist
                </div>
              
              
                <div className="rectangle">
                  ResourcePack Artist
                </div>
         
                <div className="rectangle">
                  Render Artist
                </div>
             
            </Row>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
