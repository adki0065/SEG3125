import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogList from "./BlogList";


const Service = ({blogs}) => {
    const {id} = useParams()
    return ( 
        <div className="service">
            choose {blogs.id}
        </div>
     );
}
 
export default Service;