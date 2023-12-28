import HeaderStatistics from "../statistics/HeaderStatistics";
import { Outlet } from "react-router-dom";
import IdeasHeaderBtns from "./items/IdeasHeaderBtns";
import IdeaBoxes from "./items/IdeaBoxes";

function IdeasContent() {
  return (
    <div className="h-full w-[65.9rem] border-t-2 border-l-2 border-solid border-blue-950 px-4 relative">
      <HeaderStatistics />
      <IdeaBoxes />
      <IdeasHeaderBtns />
      <Outlet />
    </div>
  );
}

export default IdeasContent;
