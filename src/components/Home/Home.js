import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Home2 from "./Home2";
import { Link } from 'react-router-dom';
import homeLogo from "../../Assets/background.png";
<Col md={5} style={{ paddingBottom: 20 }}>
<img
  src={homeLogo}
  alt="home pic"
  className="img-fluid"
  style={{ maxHeight: "2750px" }}
/>
</Col>
function Home() {
  const [zoomLevel, setZoomLevel] = useState(100);

  useEffect(() => {
    const handleZoomChange = () => {
      const currentZoomLevel = (document.documentElement.clientWidth / window.innerWidth) * 100;
      setZoomLevel(currentZoomLevel);
    };

    window.addEventListener('resize', handleZoomChange);

    return () => {
      window.removeEventListener('resize', handleZoomChange);
    };
  }, []);

  const calculateMarginBottom = () => {
    if (zoomLevel >= 110) {
      return "2em";
    } else {
      return "-40em";
    }
  };

  return (
    <section>
      <Container fluid className="home-section custom-background" id="home">
        <Container className="home-content">
          <Row>
            <div   className="home-header">
              <h1 style={{ paddingBottom: 25 }} className="heading">
                {"Gamifying brand engagement"}
                <span className="wave" role="img" aria-labelledby="wave">
                </span>
              </h1>
              <h1 className="heading-name">
                <strong className="main-name"> I've got a knack for curating, organizing, and executing projects that leave people wondering, "How'd they do that?" Let's collaborate and make some digital magic happen!</strong>
              </h1>
            </div>
          </Row>
        </Container>
      </Container>

      <div className="text-center">
        <Link to="/projects">
          <Button
            className="btn"
            style={{
              marginRight: "-50px",
              background: "linear-gradient(to right, #16DAD7, #33D3AB)",
              boxShadow: "0 10px 14px rgba(0, 0, 0, 0.1)",
              color: "white",
              fontSize: "2em",
              fontWeight: "900",
              padding: "13px 120px",
              borderRadius: "20px",
              letterSpacing: "1px",
              marginBottom: calculateMarginBottom(),
            }}
          >
            Projects
          </Button>
        </Link>
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
