import Toast from 'react-bootstrap/Toast'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";


function Toastsub() {
    const [show, setShow] = useState(false);
  
    return (
      <Row>
        <Col>
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
              
              <strong className="me-auto">Review Saved</strong>
              
            </Toast.Header>
            <Toast.Body>Thank you for your review</Toast.Body>
          </Toast>
        </Col>
        <Col>
          <Button onClick={() => setShow(true)} variant="primary" style={{marginTop:"10px", marginBottom: "10px"}}>Submit Review</Button>
          <br></br>
          <br></br>
          <br></br>
        </Col>
      </Row>
    );
  }
  
 
  export default Toastsub;