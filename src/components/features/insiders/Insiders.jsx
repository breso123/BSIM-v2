import { Outlet } from "react-router-dom";

import HeaderStatistics from "../statistics/HeaderStatistics";

function Insiders() {
  return (
    <div className="h-full w-[65.9rem] border-t-2 border-l-2 border-solid border-blue-950 px-4 relative">
      <HeaderStatistics />
      <Outlet />
    </div>
  );
}

export default Insiders;
