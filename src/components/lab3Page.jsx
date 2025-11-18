import GridContainer from "./GridContainer";
import ProfileCard2 from "./ProfileCard2";
const people = [
  {
    name: "Ala",
    id: 1,
  },
  {
    name: "Ela",
    id: 2,
  },
  {
    name: "Karol",
    id: 3,
  },
  {
    name: "Ola",
    id: 4,
  },
  {
    name: "Monika",
    id: 5,
  },
  {
    name: "Robert",
    id: 6,
  },
];
const item = ({ name, id, className }) => (
  <ProfileCard2
    style={{ width: `18rem` }}
    className="border mb-3 p-3 ms-3"
    key={id}
    onDelete={() => handleDelete(id)} // <- Upewnij się, że przekazujesz id
  >
    {name}
  </ProfileCard2>
);
function Lab3Page() {
  return <GridContainer element={item} data={people} />;
}
export default Lab3Page;
