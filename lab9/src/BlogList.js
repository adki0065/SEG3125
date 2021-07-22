import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'




const BlogList = ({blogs, title}) => {

    
    
    return ( 
        
        <div className="blog-list"  style={{marginTop: "-16px"}}>
            
                
            <Row className="serviceHeader" style={{textAlign: "left" }}><h1 style={{marginLeft: "40px" }}>{title}</h1></Row>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/services/${blog.id}`}>
                    
                    <Row style={{textAlign: "left", marginLeft: "40px" }}>
                    <Col xs="auto"><Image src={blog.path} style={{width: "250px", height:"150px" }}></Image></Col> 
                    <Col><h2>{blog.title}</h2>
                    <p style={{color: "black"}}>{blog.body}</p></Col>
                    
                </Row></Link>
                
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;