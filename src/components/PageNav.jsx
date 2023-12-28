/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";
import User from "./User";
import Button1 from "../ui/buttons/Button1";

function PageNav() {
  const lobbyArr = ["home", "about", "news", "pricing", "contact"];
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  return (
    <nav className="w-full px-16 flex items-center justify-between h-9dvh text-center">
      <ul className="flex items-center justify-center list-none gap-2">
        {lobbyArr.map((navItem, i) => (
          <li className="h-full w-24 flex items-center justify-center" key={i}>
            <NavLink
              style={{ textShadow: "2px 2px 15px white" }}
              className="text-blue-100 h-full w-full flex items-center justify-center text-lg hover:font-semibold"
              to={`${navItem === "home" ? "/" : `/${navItem}`}`}
            >
              {navItem
                .split(" ")
                .map((n) => n[0].toUpperCase() + n.slice(1))
                .join("")}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-self-end gap-4">
        {user !== null ? (
          <User user={user} />
        ) : (
          <>
            <Button1 type="login" onClick={() => navigate("/login")}>
              Log In
            </Button1>
            <Button1 type="signUp" to="/signup">
              Sign Up
            </Button1>
          </>
        )}
      </div>
    </nav>
  );
}

export default PageNav;
