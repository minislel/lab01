import "../App.css";
import ProfileCard from "../components/ProfileCard";
import GridLayout from "../components/GridLayout";
import { people } from "../module-data";
import "bootstrap/dist/css/bootstrap.min.css";

function Lab1() {
  return (
    <GridLayout columns={3}>
      {people.map((person, index) => (
        <ProfileCard
          key={index}
          name={person.name}
          email={person.email}
          birthDate={person.birthDate}
          phone={person.phone}
        />
      ))}
    </GridLayout>
  );
}

export default Lab1;
