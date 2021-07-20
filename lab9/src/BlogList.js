import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'




const BlogList = ({blogs, title, handleDelete}) => {

    
    
    return ( 
        
        <div className="blog-list"  style={{marginTop: "-15px"}}>
            
                
            <Row className="serviceHeader" style={{textAlign: "left" }}><h1 style={{marginLeft: "40px" }}>Services</h1></Row>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/service/${blog.id}`}>
                    
                    <Row style={{textAlign: "left", marginLeft: "40px" }}>
                    <Col xs="auto"><Image src={blog.path} style={{width: "250px" }}></Image></Col> 
                    <Col><h2>{blog.title}</h2>
                    <p>{blog.body}</p></Col>
                    
                </Row></Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;