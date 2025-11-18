import useFetch from "../data/useFetch";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";

function Lab5() {
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

  const [userSort, setUserSort] = useState("natural");
  const [titleSort, setTitleSort] = useState("natural");
  const [commentsSort, setCommentsSort] = useState("natural");

  const tableData = posts.map((p) => {
    return {
      user: users.find((u) => u.id === p.userId),
      post: p,
      comments: comments.filter((c) => c.postId === p.id),
    };
  });

  // Funkcja sortowania
  const sortedData = [...tableData].sort((a, b) => {
    // Sortowanie po użytkowniku
    if (userSort === "asc") {
      const nameA = a.user ? a.user.name : "";
      const nameB = b.user ? b.user.name : "";
      return nameA.localeCompare(nameB);
    }
    if (userSort === "desc") {
      const nameA = a.user ? a.user.name : "";
      const nameB = b.user ? b.user.name : "";
      return nameB.localeCompare(nameA);
    }

    // Sortowanie po tytule
    if (titleSort === "asc") {
      return a.post.title.localeCompare(b.post.title);
    }
    if (titleSort === "desc") {
      return b.post.title.localeCompare(a.post.title);
    }

    // Sortowanie po liczbie komentarzy
    if (commentsSort === "asc") {
      return a.comments.length - b.comments.length;
    }
    if (commentsSort === "desc") {
      return b.comments.length - a.comments.length;
    }

    return 0; // naturalna kolejność
  });

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
                  <Dropdown.Item onClick={() => setUserSort("asc")}>
                    Rosnąco
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setUserSort("desc")}>
                    Malejąco
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setUserSort("natural")}>
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
                  <Dropdown.Item onClick={() => setTitleSort("asc")}>
                    Rosnąco
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setTitleSort("desc")}>
                    Malejąco
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setTitleSort("natural")}>
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
                  <Dropdown.Item onClick={() => setCommentsSort("asc")}>
                    Rosnąco
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setCommentsSort("desc")}>
                    Malejąco
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setCommentsSort("natural")}>
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
              <td>{user ? user.name : "Unknown"}</td>
              <td>{post.title}</td>
              <td>{comments.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Lab5;
