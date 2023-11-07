import { Outlet } from "react-router-dom";

function Technicals() {
  return (
    <div className="h-full">
      <div className="grid grid-cols-1 justify-items-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Technicals;
