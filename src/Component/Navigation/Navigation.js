import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => (
  <div>
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "link")}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? "active" : "link")}
      >
        Movies
      </NavLink>
      <hr />
    </nav>
    <Outlet />
  </div>
);

export default Navigation;
