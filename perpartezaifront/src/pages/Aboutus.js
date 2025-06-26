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
    <div className="text-center my-4 bg-light">
      <img src="/Office.png" alt="Office" className="img-fluid office-image" />
    </div>
    <Container fluid className="bg-light">
      <Row className="text-center napis1">
          <h1>Naše začátky</h1>
      </Row>
      <Row className="justify-content-center text-center text1">
          <p>Jsme skupina studentů, kteří sami zápasili s matematikou. <br></br>
          Chtěli jsme vytvořit alternativní způsob učení, který by opravdu fungoval. Běžná umělá inteligence pro nás nebyla dostatečně efektivní – a tak jsme vyvinuli vlastní, specializovanou na výuku. <br></br>
          PerpartezAI je výsledek naší snahy o nástroj, který učí lépe než klasické AI, jako je ChatGPT.</p>
      </Row>
    </Container>
    <div className="text-center my-4 bg-light">
      <img src="/Office.png" alt="Office" className="img-fluid office-image"/>
    </div>
    <Container fluid className="footer">
    <Col>
      <Row className="d-inline">
          Kontakt:<a href="mailto:liskajakub612@outlook.com" id="mail">liskajakub612@outlook.com</a>
      </Row>
      <Row >
        &copy; 2025 PerpartezAI, Všechna práva vyhrazena.
      </Row>
    </Col>
    </Container>
        </>
        
  )
}
  export default Aboutus;
