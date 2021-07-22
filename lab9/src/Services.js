import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BlogList from "./BlogList";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import useFetch from "./useFetch";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Toastsub from "./Toast"



const Services = () => {
    const { id } = useParams();
    const {data: blog} = useFetch('http://localhost:8000/blogs/'+ id);
    const ratingChanged = (newRating) => {
      console.log(newRating);
    };
    return ( 
        <div className="services">
         {blog && (<div className="bread" >
        <Breadcrumb style={{marginLeft:"20px", fontSize:"larger", height:"30px"}}>
  <Breadcrumb.Item> <Link to="/" style={{color: 'white'}}>Home</Link></Breadcrumb.Item>
  <Breadcrumb.Item ><Link to="/services" style={{color: 'white'}}>Services</Link></Breadcrumb.Item>
  <Breadcrumb.Item ><Link to="/services/1" style={{color: 'white'}}>{blog.title}</Link></Breadcrumb.Item>
</Breadcrumb></div>)}

<div className="servicesBody" style={{backgroundColor: 'white', paddingTop:"10px"}} >
  {blog && (<div>
    <Row><Col xs="auto"><Image src={blog.path} style={{width: "250px", height:"150px" }}></Image></Col> 
    <Col style={{textAlign: "left", marginLeft: "10rem" }}>
      <h2 style={{color: 'black'}}> 
        {blog.title}
      </h2>
      <p style={{color: 'black'}}>{blog.author}</p>
      <div style={{color: 'black'}}>{blog.body}</div></Col></Row>
     

<Row>
  <Col>
  </Col><Col style={{textAlign:"left"}}><h3 style={{marginTop:"20px"}}>Leave a review</h3></Col>
  <Col><ReactStars
    count={5}
    onChange={ratingChanged}
    size={50}
    activeColor="#ffd700"
  /></Col>
  
</Row>
<Row>
<Col sm={4}></Col>
<Col sm={8}><InputGroup>
    
    <FormControl as="textarea"/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </InputGroup></Col>
</Row>
<Row>
<Col ></Col>
<Col ></Col>
<Col lg={6}>
<Toastsub />
</Col>

</Row>
</div>
  )}

 
</div>


        
            
        </div>
     );
}
 
export default Services;