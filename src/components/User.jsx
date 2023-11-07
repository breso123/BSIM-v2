/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import ButtonMain from "./reusableButtons/ButtonMain";

import { updateUser } from "../pages/services/apiLobby";

function User({ user }) {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    logOut(user);
    navigate("/");
  }

  return (
    <div className="flex items-center gap-3">
      <p className="text-xl font-semibold text-indigo-300">
        Welcome Back, {user.firstname}
      </p>
      <ButtonMain
        btType="classic"
        additionalClass="h-8 w-24 text-sm hover:font-semibold"
        onClick={(e) => handleClick(e)}
      >
        Log Out
      </ButtonMain>
    </div>
  );
}

async function logOut(user) {
  await updateUser(user.id, { ...user, isAuthenticated: false });
  localStorage.removeItem("user");
}

export default User;
