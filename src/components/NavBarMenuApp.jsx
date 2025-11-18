import { NavLink } from "react-router";

function NavBarMenuApp() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/lab1">
                Lab1
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/lab2/1">
                Lab2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/lab3">
                Lab3
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/lab4/add">
                Dodaj osobę(lab4)
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/lab5">
                Lab5
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link disabled"
                to="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBarMenuApp;
