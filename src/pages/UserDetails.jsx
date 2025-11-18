import { useParams, Link } from "react-router-dom";
import useFetch from "../data/useFetch";

function UserDetails() {
  const { id } = useParams();
  const [user] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!user || !user.id) {
    return (
      <div className="container mt-4">
        <p>Ładowanie danych użytkownika...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <Link to="/lab5" className="btn btn-secondary mb-3">
        ← Powrót do tabeli
      </Link>
      <h2>Szczegóły użytkownika</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">
            <strong>Username:</strong> {user.username}
          </p>
          <p className="card-text">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="card-text">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="card-text">
            <strong>Website:</strong>{" "}
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.website}
            </a>
          </p>
          <hr />
          <h6>Adres</h6>
          <p className="card-text">
            <strong>Ulica:</strong> {user.address?.street}
          </p>
          <p className="card-text">
            <strong>Miasto:</strong> {user.address?.city}
          </p>
          <p className="card-text">
            <strong>Kod pocztowy:</strong> {user.address?.zipcode}
          </p>
          <hr />
          <h6>Firma</h6>
          <p className="card-text">
            <strong>Nazwa:</strong> {user.company?.name}
          </p>
          <p className="card-text">
            <strong>Catchphrase:</strong> {user.company?.catchPhrase}
          </p>
          <p className="card-text">
            <strong>BS:</strong> {user.company?.bs}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
