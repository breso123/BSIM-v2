/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { updateUser } from "../pages/services/apiLobby";
import Button1 from "../ui/buttons/Button1";

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
      <Button1 onClick={(e) => handleClick(e)} type="logout">
        Log Out
      </Button1>
    </div>
  );
}

async function logOut(user) {
  await updateUser(user.id, { ...user, isAuthenticated: false });
  localStorage.removeItem("user");
}

export default User;
