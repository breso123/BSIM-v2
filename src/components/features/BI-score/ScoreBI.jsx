import { Outlet } from "react-router-dom";
import HeaderFins from "../financials/financialsItems/HeaderFins";

function ScoreBI() {
  return (
    <div className="h-full relative">
      <HeaderFins />
      <div className="grid grid-cols-1 justify-items-center w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default ScoreBI;
