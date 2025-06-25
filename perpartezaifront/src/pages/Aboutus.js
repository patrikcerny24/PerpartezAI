import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Row"
import "./Aboutus.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
const Aboutus = () => {
  return (
    <>
    
    <Container fluid className="bg-light">
      <Row className="text-center napis1">
          <h1>Náš náhled do budoucnosti</h1> 
      </Row>
      <Row className="justify-content-center text-center text1">
          <p> Naším cílem je neustále rozšiřovat nabídku služeb. <br></br>
          PerpartezAI nebude pomáhat jen s matematikou – postupně nabídne podporu ve všech předmětech základní i střední školy. <br></br></p>
      </Row> 
    </Container>

    
    <Container fluid className="footer">
    <Col>
      <Row className="d-inline">
          Kontakt:<a href="mailto:liskajakub612@outlook.com">liskajakub612@outlook.com</a>
      </Row>
      <Row>
        &copy; 2025 PerpartezAI, Všechna práva vyhrazena.
      </Row>
    </Col>
    </Container>
        </>
        
  )
}
  export default Aboutus;
