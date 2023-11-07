import { Outlet } from "react-router-dom";
import Loader from "../../Loader";
import HeaderAnalysis from "./HeaderAnalysis";
import { useSelector } from "react-redux";

function Analysis() {
  const status = useSelector((state) => state.analysis.status);
  return (
    <div className="h-full border-t-2 border-l-2 border-solid border-blue-950 px-4 relative">
      <HeaderAnalysis />
      {status === "loading" ? <Loader /> : <Outlet />}
    </div>
  );
}

export default Analysis;
