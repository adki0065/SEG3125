import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import Image from'react-bootstrap/Image'
import logo from './images/logo.png'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Container fluid >
                
                    <Col className="links" style={{textAlign: "left" }}>
                <a href="/" style={{
                    color: "white",
                    
                    borderRadius: "6px"}}>Home</a>
                <a href="/create" style={{
                    color: "white",
                    
                    borderRadius: "6px"
                }}>New Blog</a></Col>
                    <Row><Col><h1>Find A Service</h1></Col>
                    <Col xs className='align-items-start' style={{position: "absolute", left: "180px"}}><Image src={logo} style={{width: "60px"}}></Image></Col></Row>
                    <Col style={{textAlign: "right" }} >search</Col>
                
                </Container>
            
            
            
        </nav>
     );
}
 
export default Navbar;