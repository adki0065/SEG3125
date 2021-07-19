import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Container fluid >
                
                    <Col className="links" style={{textAlign: "left" }}>
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "6px"
                }}>New Blog</a></Col>
                    <Col><h1>Find A Service</h1></Col>
                    <Col style={{textAlign: "right" }} >search</Col>
                
                </Container>
            
            
            
        </nav>
     );
}
 
export default Navbar;