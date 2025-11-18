import "../App.css";
import ProfileCard from "../components/ProfileCard";
import { people } from "../module-data";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

function Lab02() {
  const { id } = useParams();

  if (id === undefined || id === null) {
    return (
      <div className="alert alert-warning text-center" role="alert">
        Brak identyfikatora osoby. Podaj ID w adresie URL, żeby coś znaleźć!
      </div>
    );
  }

  const person = people.find((p) => p.id == id);

  if (!person) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        Nie znaleziono osoby o identyfikatorze: {id}. Słabo, co?
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center p-4">
      <ProfileCard
        name={person.name}
        email={person.email}
        birthDate={person.birthDate}
        phone={person.phone}
      />
    </div>
  );
}

export default Lab02;
