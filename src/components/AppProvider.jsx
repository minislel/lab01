import { useReducer } from "react";
import AppContext from "../data/AppContext";
import AppReducer from "../data/AppReducer";

const initialData = [
  {
    id: 1,
    name: "Jan Kowalski",
    email: "jan@example.com",
    rating: 0,
    isChecked: false,
  },
  {
    id: 2,
    name: "Anna Nowak",
    email: "anna@example.com",
    rating: 0,
    isChecked: false,
  },
  {
    id: 3,
    name: "Piotr Wiśniewski",
    email: "piotr@example.com",
    rating: 0,
    isChecked: false,
  },
];

function AppProvider({ children }) {
  console.log("AppProvider rendering");

  const [state, appDispatch] = useReducer(AppReducer, initialData);
  console.log("State:", state);

  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
