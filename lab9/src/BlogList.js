import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


const BlogList = ({blogs, title, handleDelete}) => {

    
    
    return ( 
        
        <div className="blog-list">
            <Container>
                
            
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={'/service/${blog.id}'}>
                    <Row style={{textAlign: "left" }}>
                    <Col><Image src={blog.author}></Image></Col> 
                    <Col><h2>{blog.title}</h2>
                    <p>{blog.body}</p></Col>
                    
                </Row></Link>
                </div>
            ))}</Container>
        </div>
     );
}
 
export default BlogList;