import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* Aquí se encontraba el botón de descarga */}
        </Row>

        <Row className="resume">
          {/* Primera imagen */}
          <div className="center-image">
            <img
              src="https://mir-cdn.behance.net/v1/rendition/project_modules/source/91b78b177158365.64d27c2ff16b0.jpg"
              alt="Imagen 1"
              style={{
                maxWidth: "70%",
                borderRadius: "28px",
                marginTop: "-15px",
              }}
            />
          </div>
        </Row>

        {/* Segunda imagen a la izquierda */}
        <Row className="resume">
          <div className="firstdiv">
            <img
              src="https://mir-cdn.behance.net/v1/rendition/project_modules/source/060985177158365.64d19e4db8217.png"
              alt="Imagen 2"
              style={{
                maxWidth: "100%",
                borderRadius: "28px",
                marginTop: "50px",
                
              }}
            />
          </div>
          <div className="seconddiv" >
            <img
              src="https://gyazo.com/d176ee2e499953fa2cc08e7bee1c8288.png"
              alt="Imagen 3"
              style={{
                maxWidth: "100%",
                borderRadius: "28px",
                marginTop: "50px",
              
              }}
            />
          </div>
        </Row>


        {/* Quinta imagen */}
        <Row className="resume">
          <div className="thirddiv">
            <img
              src="https://gyazo.com/942a2650d653e23a38ad3249558b86d9.png"
              alt="Imagen 5"
              style={{
                maxWidth: "90%",
                borderRadius: "28px",
                marginTop: "50px",
              }}
            />
          </div>
        {/* </Row> */}

        {/* Sexta imagen */}
        {/* <Row className="resume"> */}
          <div className="fourthdiv">
            <img
              src="https://gyazo.com/19edc6b1675dedb88670c7c56fbf2718.png"
              alt="Imagen 6"
              style={{
                maxWidth: "90%",
                borderRadius: "28px",
                marginTop: "50px",
              }}
            />
          </div>
        </Row>

        {/* Séptima imagen */}
        <Row className="resume">
          <div className="center-image">
            <img
              src="https://mir-cdn.behance.net/v1/rendition/project_modules/source/054e09162438869.63d5bcb22ec1b.png"
              alt="Imagen 7"
              style={{
                maxWidth: "70%",
                borderRadius: "28px",
                marginTop: "50px",
              }}
            />
          </div>
        </Row>

        {/* Octava imagen */}
        <Row className="resume">
          <div className="center-image">
            <img
              src="https://gyazo.com/f48bb1e0ab468ae4412abbfb37e3727f.png"
              alt="Imagen 7"
              style={{
                maxWidth: "80%",
                borderRadius: "28px",
                marginTop: "50px",
              }}
            />
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* Aquí se encontraba el segundo botón de descarga */}
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
