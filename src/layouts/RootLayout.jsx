import FooterApp from "../components/FooterApp";
import NavBarMenuApp from "../components/NavBarMenuApp";
import { Outlet } from "react-router";

function RootLayout({ children }) {
  return (
    <div className="container">
      <NavBarMenuApp />
      <main>{children}</main>
      <FooterApp />
    </div>
  );
}

export default RootLayout;
