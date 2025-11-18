import useFetch from "../data/useFetch";
import { useReducer, useMemo, useEffect } from "react";
import { Dropdown, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import TableDataReducer from "../data/TableDataReducer";

function Lab5() {
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

  const tableData = useMemo(() => {
    if (!posts || !users || !comments) return [];
    return posts.map((p) => {
      return {
        user: users.find((u) => u.id === p.userId),
        post: p,
        comments: comments.filter((c) => c.postId === p.id),
      };
    });
  }, [posts, users, comments]);

  const [state, dispatch] = useReducer(TableDataReducer, {
    originalData: tableData,
    sortedData: tableData,
  });

  useEffect(() => {
    if (tableData.length > 0) {
      dispatch({ type: "SET_ORIGINAL_DATA", data: tableData });
    }
  }, [tableData]);

  const sortedData = state.sortedData;

  return (
    <div className="container mt-4">
      <h2>Lab 5 - Posts, Users and Comments</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>
              <Dropdown>
                <Dropdown.Toggle
                  variant="link"
                  className="p-0 text-decoration-none text-dark"
                >
                  User
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => dispatch({ type: "SORT_USER_ASC" })}
                  >
                    Rosnąco
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => dispatch({ type: "SORT_USER_DESC" })}
                  >
                    Malejąco
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => dispatch({ type: "SORT_USER_NATURAL" })}
                  >
                    Naturalna kolejność
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </th>
            <th>
              <Dropdown>
                <Dropdown.Toggle
                  variant="link"
                  className="p-0 text-decoration-none text-dark"
                >
                  Title
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => dispatch({ type: "SORT_TITLE_ASC" })}
                  >
                    Rosnąco
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => dispatch({ type: "SORT_TITLE_DESC" })}
                  >
                    Malejąco
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => dispatch({ type: "SORT_TITLE_NATURAL" })}
                  >
                    Naturalna kolejność
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </th>
            <th>
              <Dropdown>
                <Dropdown.Toggle
                  variant="link"
                  className="p-0 text-decoration-none text-dark"
                >
                  Comments Count
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => dispatch({ type: "SORT_COMMENTS_ASC" })}
                  >
                    Rosnąco
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => dispatch({ type: "SORT_COMMENTS_DESC" })}
                  >
                    Malejąco
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => dispatch({ type: "SORT_COMMENTS_NATURAL" })}
                  >
                    Naturalna kolejność
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map(({ user, post, comments }, index) => (
            <tr key={index}>
              <td>
                {user ? (
                  <Link to={`/lab5/users/${user.id}`} className="text-primary">
                    {user.name}
                  </Link>
                ) : (
                  "Unknown"
                )}
              </td>
              <td>
                <Accordion>
                  <Accordion.Item eventKey={`post-${post.id}`}>
                    <Accordion.Header>{post.title}</Accordion.Header>
                    <Accordion.Body>{post.body}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </td>
              <td>
                <Link
                  to={`/lab5/posts/${post.id}/comments`}
                  className="btn btn-link p-0 text-primary"
                >
                  {comments.length}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Lab5;
