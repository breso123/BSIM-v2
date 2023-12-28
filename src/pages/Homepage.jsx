/* eslint-disable react/prop-types */
import PageNav from "../components/PageNav";
import { useNavigate } from "react-router-dom";
import Button1 from "../ui/buttons/Button1";

function Homepage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  function enterTheApp(e) {
    e.preventDefault();
    navigate(`/${!user ? "login" : "app"}`);
  }

  return (
    <div className="flex flex-col items-center h-screen">
      <PageNav />
      <div className="h-5/6 w-2/4 flex flex-col items-center justify-center gap-28">
        <h1 className="text-5xl leading-relaxed text-center text-sky-100 opacity-80 font-semibold ">
          We are a completely new brand identity
        </h1>
        <p className="text-xl text-center text-blue-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          quibusdam ab officia consequatur esse necessitatibus totam,
          reprehenderit voluptate magni amet quis rerum quam ipsa laudantium
          unde corrupti quasi? Numquam, porro.
        </p>
        <Button1 type="getStarted" onClick={(e) => enterTheApp(e)}>
          Get Started
        </Button1>
      </div>
    </div>
  );
}

export default Homepage;
