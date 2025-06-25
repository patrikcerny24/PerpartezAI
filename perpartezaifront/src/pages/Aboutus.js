import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Row"
const Aboutus = () => {
  return (
    <>
    
    <Container fluid className="bg-light">
      <Row className="text-center">
          <h1>Náš náhled do budoucnosti</h1> 
      </Row>
      <Row className="justify-content-center text-center">
          <p> Naším cílem je neustále rozšiřovat nabídku služeb. <br></br>
          PerpartezAI nebude pomáhat jen s matematikou – postupně nabídne podporu ve všech předmětech základní i střední školy. <br></br></p>
      </Row> 
    </Container>

    
    <Container fluid>
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
