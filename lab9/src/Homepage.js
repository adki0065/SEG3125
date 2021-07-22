import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import dog from './images/dog.jpg'
import kid from './images/kid.jpg'
import house from './images/house.png'
import money from './images/money.jfif'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const Homepage = () => {
    return ( 
    <div className="homePage">
        <div className="bread" >
        <Breadcrumb style={{marginLeft:"20px"}}>
  <Breadcrumb.Item ><a href="/" style={{color: 'white'}}>Home</a></Breadcrumb.Item>
  
</Breadcrumb>
  
</div>
        <Container>
            <Row style={{ padding: '1rem' }}>
            
                <Col>
                <Card style={{ width: '18rem' }}><Link to={`/service`}>
  <Card.Img className="cardimg" variant="top" src={dog} />
  <Card.Body>
    <Card.Title style={{ backgroundColor: '#f08c2e', width: '100%', color:"white"}}>Animal Services</Card.Title>
    <Card.Text className="cardtxt">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body></Link>
</Card>
                </Col>
                
                <Col>
                <Card style={{ width: '18rem' }}><Link to={`/service`}>
  <Card.Img className="cardimg" variant="top" src={kid} />
  <Card.Body>
    <Card.Title style={{ backgroundColor: '#f08c2e', width: '100%', color:"white"}}>Children Services</Card.Title>
    <Card.Text className="cardtxt">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body></Link>
</Card>
                </Col>
            </Row>
            <Row>
                <Col>
                <Card style={{ width: '18rem' }}><Link to={`/service`}>
  <Card.Img className="cardimg" variant="top" src={house} />
  <Card.Body>
    <Card.Title style={{ backgroundColor: '#f08c2e', color:"white"}}>Housing Services</Card.Title>
    <Card.Text className="cardtxt">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body></Link>
</Card>
                </Col>
                <Col> 
                <Card style={{ width: '18rem' }}><Link to={`/service`}>
  <Card.Img className="cardimg" variant="top" src={money} />
  <Card.Body>
    <Card.Title style={{ backgroundColor: '#f08c2e', width: '100%', color:"white"}}>Financial Services</Card.Title>
    <Card.Text className="cardtxt">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body></Link>
</Card>
                </Col>
            </Row>
        </Container>
        
        
        </div>
     );
}
 
export default Homepage;