import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import Image from'react-bootstrap/Image'
import logo from './images/logo.png'
import { House, InfoLg, Wrench } from 'react-bootstrap-icons';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';



const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Container fluid >
                
                    <Col className="links" style={{textAlign: "left", fontSize:"larger"}}>
                        <House></House>
                <a href="/" style={{color: "white", borderRadius: "6px", marginLeft:"0px", marginRight:"10px"}}>Home</a>
                <InfoLg /><a href="/about" style={{ color: "white", borderRadius: "6px", marginLeft:"-5px", marginRight:"10px"}}>About</a>

                <Wrench></Wrench><a href="/service" style={{ color: "white", borderRadius: "6px", marginLeft:"0px"}}>Services</a>
                
                </Col>
                    <Row><Col><h1 style={{ color: "white", marginRight:"-40px"}}>Find A Service</h1></Col>
                    <Col className='middle' ><Image src={logo} style={{width: "60px", marginLeft:"-20px", marginTop:"15px"}}></Image></Col></Row>
                    <Col style={{textAlign: "right",color: "white", fontSize:"larger" }} ><InputGroup className="mb-3" style={{width:"250px", marginLeft:"150px"}}>
    
    <FormControl
      placeholder="Search"
      aria-label="Username"
      aria-describedby="basic-addon1"
      
    />
  </InputGroup>
                    </Col>
                
                </Container>
            
            
            
        </nav>
     );
}
 
export default Navbar;