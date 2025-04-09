import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const BlogList = ( {blogs, title, handleDelete }) => {
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                <Link to={`/blogs/${blog.id}`}>
                    <h2 class="mb-0">{ blog.title }</h2>
                    <Button variant="success badge">Written by { blog.author }</Button>
                    <br/>
                    <Button variant="warning" onClick={() => handleDelete(blog.id)}>Delete entry</Button>
                </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;