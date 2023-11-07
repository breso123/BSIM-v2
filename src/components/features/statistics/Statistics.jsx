import { useSelector } from "react-redux";
import HeaderStatistics from "./HeaderStatistics";
import Loader from "../../Loader";
import { Outlet } from "react-router-dom";

function Statistics() {
  const status = useSelector((state) => state.statistics.status);

  return (
    <div className="h-full border-t-2 border-l-2 border-solid border-blue-950 px-4 relative">
      <HeaderStatistics />
      {status === "loading" ? <Loader /> : <Outlet />}
    </div>
  );
}

export default Statistics;
