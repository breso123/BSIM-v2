import { Outlet } from "react-router-dom";

function AppNews() {
  return (
    <div className="h-full">
      <div className="grid grid-cols-1 justify-items-center">
        <Outlet />
      </div>
    </div>
  );
}

export default AppNews;
