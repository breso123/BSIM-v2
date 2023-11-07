/* eslint-disable react/prop-types */

import { Outlet } from "react-router-dom";
import ButtonApp from "../components/reusableButtons/ButtonApp";
import Watchlists from "../components/features/appSidebar/WatchLists";
import AppNav from "../components/AppNav";
import { useSelector } from "react-redux";
import AppSpinner from "../components/AppSpinner";
import UpperHeader from "../components/UpperHeader";
import { useShouldRefetch } from "../useShouldRefetch";

function AppLayout() {
  const featureKey = useSelector((state) => state.app.featureKey);
  const featureIndex = useSelector((state) => state.app.featureIndex);
  const appBtns = useSelector((state) => state.app.appBtns);
  useShouldRefetch();

  return (
    <div className="flex flex-col items-center h-full bg-white/50 gap-10">
      <AppNav />
      <div className="h-screen w-11/12 py-5 flex items-start justify-start">
        <div className="flex flex-col items-center justify-start pt-16">
          {appBtns.map((btn, i) => {
            return (
              <ButtonApp
                src={btn[1]}
                item={btn[0]}
                index={i}
                activeIndex={featureIndex}
                key={i}
              />
            );
          })}
        </div>
        <div className="grow h-full relative">
          <Outlet />
          <UpperHeader featureKey={featureKey} />
          <AppSpinner />
        </div>
        <div className="h-full w-[10rem] ml-4">
          <Watchlists />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
