import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogList from "./BlogList";
import Breadcrumb from 'react-bootstrap/Breadcrumb'


const Service = ({blogs}) => {
    const { id } = useParams()
    return ( 
        <div className="service">
        <div className="bread" >
        <Breadcrumb style={{marginLeft:"20px"}}>
  <Breadcrumb.Item ><a href="/" style={{color: 'white'}}>Home</a></Breadcrumb.Item>
  <Breadcrumb.Item ><a href="/services" style={{color: 'white'}}>
    Services</a>
  </Breadcrumb.Item>
  <Breadcrumb.Item active style={{color: 'white'}}>spca</Breadcrumb.Item>
</Breadcrumb>
  
</div>
  

        
            <h2>services - { id }</h2>
        </div>
     );
}
 
export default Service;