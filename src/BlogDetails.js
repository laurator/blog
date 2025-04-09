import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Button from 'react-bootstrap/Button';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="blog-details">
      {/* { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> } */}
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <Button variant="success badge">Written by { blog.author }</Button>
          <div class="card-text mb-auto">{ blog.body }</div>
          <Button variant="danger" onClick={handleClick}>Delete this entry</Button>
        </article>
      )}
    </div>
  );
}
 
 
export default BlogDetails;