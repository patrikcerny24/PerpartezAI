import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Row"
const Aboutus = () => {
  return (
    <>
    
    <Container fluid>
      <Row className="justify-content-center">
        <Col py={2} className="text-center">
          <h1>Náš náhled do budoucnosti</h1> 
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col  className="text-center">
          <p> Naším cílem je neustále rozšiřovat nabídku služeb. <br></br>
          PerpartezAI nebude pomáhat jen s matematikou – postupně nabídne podporu ve všech předmětech základní i střední školy. <br></br></p>
        </Col>
      </Row> 
    </Container>

    
    <Container fluid>
      <Row>
        <Col mt={4}>
          Kontakt:  <a href="mailto:liskajakub612@outlook.com">  liskajakub612@outlook.com  </a>  <br></br>
          &copy; 2025 Perpartezai, Všechna práva vyhrazena.
        </Col>
      </Row>
    </Container>
        </>
        
  )
}
  export default Aboutus;