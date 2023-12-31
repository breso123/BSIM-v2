//import { useDispatch } from "react-redux";
import HeaderFins from "./financialsItems/HeaderFins";
import { Outlet } from "react-router-dom";

function Financials() {
  return (
    <div className="h-full">
      <HeaderFins />
      <div className="grid grid-cols-1 justify-items-center w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Financials;
