import "./App.css";
import AppProvider from "./components/AppProvider.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import RootLayout from "./layouts/RootLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Lab1 from "./pages/lab1";
import Lab2 from "./components/lab2";
import NotFound from "./components/NotFound";
import Lab3Page from "./components/lab3Page";
import Lab4Add from "./components/Lab4Add";
import Lab4Edit from "./components/Lab4Edit";
import Lab5 from "./pages/lab5";
import UserDetails from "./pages/UserDetails";
import PostComments from "./pages/PostComments";
import { useReducer } from "react";

import AppReducer from "./data/AppReducer";

const data = [
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

function App() {
  const [state, appDispatch] = useReducer(AppReducer, data);

  return (
    <AppProvider>
      <RootLayout>
        <Routes>
          <Route path="/lab1" element={<Lab1 />} />
          <Route path="/lab2" element={<Lab2 />} />
          <Route path="/lab3" element={<Lab3Page />} />
          <Route path="/lab4/add" element={<Lab4Add />} />
          <Route path="/lab4/edit/:id" element={<Lab4Edit />} />
          <Route path="/lab5" element={<Lab5 />} />
          <Route path="/lab5/users/:id" element={<UserDetails />} />
          <Route path="/lab5/posts/:id/comments" element={<PostComments />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RootLayout>
    </AppProvider>
  );
}

export default App;
