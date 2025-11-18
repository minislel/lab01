import { useParams, Link } from "react-router-dom";
import useFetch from "../data/useFetch";

function PostComments() {
  const { id } = useParams();
  const [post] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const [comments] = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );

  if (!post || !post.id) {
    return (
      <div className="container mt-4">
        <p>Ładowanie danych posta...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <Link to="/lab5" className="btn btn-secondary mb-3">
        ← Powrót do tabeli
      </Link>
      <div className="card mb-4">
        <div className="card-header">
          <h2>{post.title}</h2>
        </div>
        <div className="card-body">
          <p className="card-text">{post.body}</p>
        </div>
      </div>

      <h3>Komentarze ({comments.length})</h3>
      {comments.length > 0 ? (
        <div className="list-group">
          {comments.map((comment) => (
            <div key={comment.id} className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{comment.name}</h5>
                <small>{comment.email}</small>
              </div>
              <p className="mb-1">{comment.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Brak komentarzy</p>
      )}
    </div>
  );
}

export default PostComments;
